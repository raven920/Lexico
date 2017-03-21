var LexicoListener = require('../LexicoListener.js').LexicoListener;
var FunctionSymbol = require('../scope/FunctionSymbol.js').FunctionSymbol;

function RefPhase(globals, scopes){
    LexicoListener.call(this);
    console.log(globals);
    this.globals = globals;
    this.scopes = scopes;
    this.currentScope = null;
    this.idStack = [];
    this.errors =[];
    return this;
}

RefPhase.prototype = Object.create(LexicoListener.prototype);
RefPhase.prototype.constructor = RefPhase;

RefPhase.prototype.checkScope = function(idToken){
    var name = idToken.getSymbol();

    var variable = this.currentScope.resolve(name.text);
    if(variable == null){
        this.errors.push("linea "+name.line+":"+name.column+ " no fue declarada: <"+name.text+">");
    }else if(variable instanceof FunctionSymbol){
        this.errors.push("linea "+name.line+":"+name.column+" <" +name.text+"> no es una variable");
    }else if(variable.scope == this.currentScope){
        if(name.line <= variable.line && name.column < variable.column){
            this.errors.push("linea "+name.line+":"+name.column+" <" +name.text+"> léxico no puede leer el futuro, declare primero la variable");
        }
    }
}

RefPhase.prototype.enterProg = function(ctx){
    this.currentScope = this.globals;
}

RefPhase.prototype.enterTarea = function(ctx){

    this.currentScope = this.scopes.get(ctx);
}

RefPhase.prototype.exitTarea = function(ctx){
    this.currentScope = this.currentScope.enclosingScope;
}

RefPhase.prototype.enterBloque = function(ctx){
    this.currentScope = this.scopes.get(ctx);
}

RefPhase.prototype.exitBloque = function(ctx){
    this.currentScope = this.currentScope.enclosingScope;
}

RefPhase.prototype.exitArreglo = function(ctx){
    this.idStack[this.idStack.length-1].push(ctx.ID(0));
}

RefPhase.prototype.exitIDFromIdOrArr = function(ctx) {
    this.idStack[this.idStack.length-1].push(ctx.ID(0));
};

RefPhase.prototype.enterUsoArreglo
    =   RefPhase.prototype.enterEntre
    =   RefPhase.prototype.enterCopieEn
    =   RefPhase.prototype.enterDeclaracionArreglos
    =   RefPhase.prototype.enterDeclaracionVariasVar
    =   function(ctx) {
    this.idStack.push([]);
}

RefPhase.prototype.exitCopieEn
    =   RefPhase.prototype.exitEntre
    =   function(ctx){
    var i;
    var l = this.idStack.pop();
    for(i of l ){
        this.checkScope(i);
    }
}

RefPhase.prototype.exitDeclaracionArreglos
    =   RefPhase.prototype.exitDeclaracionVariasVar
    =   function(ctx){
    this.idStack.pop();
}

RefPhase.prototype.exitUsoArreglo = function(ctx) {
    this.checkScope((this.idStack.pop())[0]);
}

RefPhase.prototype.exitUsoVar = function(ctx) {
    this.checkScope(ctx.ID(0));
}

exports.RefPhase = RefPhase;
