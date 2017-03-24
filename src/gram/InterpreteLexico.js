import antlr4 from 'antlr4/index';

var LexicoLexer = require('./LexicoLexer.js').LexicoLexer;
var LexicoParser = require('./LexicoParser.js').LexicoParser;
var LexicoErrorListener = require('./err/LexicoErrorListener.js').LexicoErrorListener;

var DefPhase = require('./walkers/DefPhase.js').DefPhase;
var RefPhase = require('./walkers/RefPhase.js').RefPhase;
var RunPhase = require('./walkers/RunPhase.js').RunPhase;

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

exports.InterpreteLexico = InterpreteLexico;
