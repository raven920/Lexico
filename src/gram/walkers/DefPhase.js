var HashTable = require('../../util/HashTable.js').HashTable;
var antlr4 = require('antlr4/index');
var LexicoListener = require('../LexicoListener.js').LexicoListener;
var Scope = require('../scope/Scope.js').Scope;
var Symbol = require('../scope/Symbol.js').Symbol;
var FunctionSymbol = require('../scope/FunctionSymbol.js').FunctionSymbol;

function recolectarTokens(idTokens){
    var i;
    var l = [];
    for(i of idTokens){
        l.push(i);
    }
    return l;
}

function DefPhase(){
    LexicoListener.call(this);
    this.globals = null;
    this.currentScope = null;
    this.idStack = [];
    this.errors = [];
    return this;
}

DefPhase.prototype = Object.create(LexicoListener.prototype);
DefPhase.prototype.constructor = DefPhase;
DefPhase.prototype.scopes = new HashTable();

DefPhase.prototype.defineVar = function(nameToken,typeToken){
    if(this.currentScope.exists(nameToken.getText())){
        var sim = nameToken.getSymbol();
        this.errors.push({
            problema: "Error semántico",
            simbolo: sim,
            linea: sim.line,
            columna: sim.column,
            recomendacion: "'"+nameToken.getText()+"' fue previamente definido."
        });
        return;
    }
    var symVar = new Symbol({"name": nameToken.getText(),
                             "type": typeToken.getText(),
                             "line": nameToken.getSymbol().line,
                             "column": nameToken.getSymbol().column})
    this.currentScope.define(symVar);
}

DefPhase.prototype.defineVars = function(arr, idToken){
    var i;
    for(i of arr){
        this.defineVar(i, idToken);
    }
}

DefPhase.prototype.enterProg = function(ctx){
    this.globals = new Scope("globals", null);
    this.currentScope = this.globals;
}

DefPhase.prototype.exitProg = function(ctx){
    console.log(this.globals.toString());
}

DefPhase.prototype.enterTarea = function(ctx){
    var func = new FunctionSymbol({"name":"tarea",
                                   "type":"void",
                                   "currentScope": this.currentScope,
                                    line:0, column:0});
    this.currentScope.define(func);
    this.scopes.put(ctx,func);
    this.currentScope = func;
}

DefPhase.prototype.enterBloque = function(ctx){
    this.currentScope = new Scope("locals",this.currentScope);
    this.scopes.put(ctx, this.currentScope);
}

DefPhase.prototype.exitBloque = function(ctx){
    console.log(this.currentScope.toString())
    this.currentScope = this.currentScope.enclosingScope;
}


DefPhase.prototype.exitTarea = function(ctx){
    console.log(this.currentScope.toString());
    this.currentScope = this.currentScope.enclosingScope;
}

DefPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    this.defineVar(ctx.ID(0), ctx.ID(1));
}

DefPhase.prototype.enterDeclaracionVariasVar = function(ctx){
    this.idStack.push([ctx.ID(0)]);
}

DefPhase.prototype.enterDeclaracionArreglos
    = DefPhase.prototype.enterUsoArreglo
    = DefPhase.prototype.enterEntre
    = DefPhase.prototype.enterCopieEn
    = function(ctx) {
    this.idStack.push([]);
}

DefPhase.prototype.exitUsoArreglo
    = DefPhase.prototype.exitEntre
    = DefPhase.prototype.exitCopieEn
    = function(ctx){
    this.idStack.pop();
}

DefPhase.prototype.exitIDFromIdOrArr = function(ctx) {
    this.idStack[this.idStack.length-1].push(ctx.ID());
};

DefPhase.prototype.exitArreglo = function(ctx) {
    this.idStack[this.idStack.length-1].push(ctx.ID());
};

DefPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    this.defineVars( this.idStack.pop() ,ctx.ID(1));
}

DefPhase.prototype.exitDeclaracionArreglos = function(ctx) {
    this.defineVars( this.idStack.pop() ,ctx.ID(0));
}

exports.DefPhase = DefPhase;
