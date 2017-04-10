/*
   Derechos de autor 2017 Fabián Ríos y Christian Delany

   Autorizado en virtud de la Licencia de Apache, Versión 2.0 (la "Licencia");
   se prohíbe utilizar este archivo excepto en cumplimiento de la Licencia.
   Podrá obtener una copia de la Licencia en:

       Inglés: http://www.apache.org/licenses/LICENSE-2.0
       Español: https://www.moo.com/es/about/fonts/licences/apache-licence.html

   A menos que lo exijan las leyes pertinentes o se haya establecido por escrito, el software
   distribuido en virtud de la Licencia se distribuye “TAL CUAL”,
   SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
   Véase la Licencia para consultar el texto específico relativo a los permisos y
   limitaciones establecidos en la Licencia.
*/

import antlr4 from 'antlr4/index';

var LexicoLexer = require('./LexicoLexer.js').LexicoLexer;
var LexicoParser = require('./LexicoParser.js').LexicoParser;
var LexicoErrorListener = require('./err/LexicoErrorListener.js').LexicoErrorListener;

var DefPhase = require('./walkers/DefPhase.js').DefPhase;
var RefPhase = require('./walkers/RefPhase.js').RefPhase;
var RunPhase = require('./walkers/RunPhase.js').RunPhase;

var herramientas = require('runtime/herramientas.js');
var Babel = require('babel-standalone');

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
    this.lexer.removeErrorListeners();
    this.lexer.addErrorListener(this.errorListener);
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

InterpreteLexico.prototype.ejecutar = function(onError){
    if(this.errors == null || this.errors.length != 0){
        return false;
    }

    var codigo = Babel.transform(this.run.codigo, { presets: ['es2015'] }).code;
    console.log(codigo);

    (function(){ "use strict" //El alcance ya es estricto, esto no *debería* hace nada
        var nuevoeval = eval; //Hacemos nuestro eval con juegos de azar y mujerzuelas.
        nuevoeval(codigo); //Magia negra
    })();
    var ejecute = async ()=>{
        try{
            await window.programa(herramientas); //Pasar todo lo que se necesite por aquí.
        }catch(err){
            console.error(err);
            this.errors =[{
                problema: "EJ",
                simbolo: null,
                linea: 1,
                columna: 0,
                recomendacion: err.message
            }];
            onError(this.errors);
        }
    }
    ejecute();


}

exports.InterpreteLexico = InterpreteLexico;
