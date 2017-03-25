import antlr4 from 'antlr4/index';

var LexicoLexer = require('./LexicoLexer.js').LexicoLexer;
var LexicoParser = require('./LexicoParser.js').LexicoParser;
var LexicoErrorListener = require('./err/LexicoErrorListener.js').LexicoErrorListener;

var DefPhase = require('./walkers/DefPhase.js').DefPhase;
var RefPhase = require('./walkers/RefPhase.js').RefPhase;
var RunPhase = require('./walkers/RunPhase.js').RunPhase;

var herramientas = require('runtime/herramientas.js');

function InterpreteLexico(){
    this.errorListener = null;
    this.errors = null;

    this.lexer = null;
    this.tokens = null;
    this.parser = null;
    this.tree = null;

    this.def = null;
    this.ref = null;

    this.run = null;
}

InterpreteLexico.prototype.construirAnalizador = function(codigo){
    this.lexer = new LexicoLexer(new antlr4.InputStream(codigo));
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new LexicoParser(this.tokens);
}

InterpreteLexico.prototype.analizarSintaxis = function(){
    this.errorListener = new LexicoErrorListener();
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(this.errorListener);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.prog();
    this.errors = this.errorListener.errors;
    return this.errors.length == 0;
}

InterpreteLexico.prototype.analizarSemantica = function(){

    if(this.errors == null || this.errors.length != 0){
        return false;
    }

    this.def = new DefPhase();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.def, this.tree);

    if(this.def.errors.length != 0){
        this.errors = this.def.errors;
        return false;
    }

    this.ref = new RefPhase(this.def.globales, this.def.alcances);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.ref, this.tree);

    this.errors = this.ref.errors;
    return this.errors.length == 0;
}

InterpreteLexico.prototype.transformar = function(){
    if(this.errors == null || this.errors.length != 0){
        return false;
    }
    this.run = new RunPhase(this.def.globales, this.def.alcances);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.run, this.tree);

    this.errors = this.run.errors;
    return this.errors.length == 0;
}

/*
    La ejecución ha sido un dolor de cabeza para el desarrollador
    ya que el jsx está en un alcance "use strict".
    Por favor no lo culpe por este horrendo hack, si tiene una
    manera más saludable de ejecutar el código, por favor
    haga un pull request.

    Si desea saber como funciona:
    http://stackoverflow.com/questions/19357978/indirect-eval-call-in-strict-mode
*/

InterpreteLexico.prototype.ejecutar = function(){
    if(this.errors == null || this.errors.length != 0){
        return false;
    }
    var codigo = this.run.codigo;
    try{
        (function(){ "use strict" //El alcance ya es estricto, esto no *debería* hace nada
            var nuevoeval = eval; //Hacemos nuestro eval con juegos de azar y mujerzuelas.
            nuevoeval(codigo); //Magia negra
        })();
        window.programa(herramientas); //Pasar todo lo que se necesite por aquí.
    }catch(err){
        this.errors =[{
            problema: "EJ",
            simbolo: null,
            linea: 1,
            columna: 0,
            recomendacion: err
        }];
        return false;
    }
    return true;
}

exports.InterpreteLexico = InterpreteLexico;
