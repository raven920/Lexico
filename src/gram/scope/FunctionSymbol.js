var Symbol = require('./Symbol.js').Symbol;
function FunctionSymbol(params){
    Symbol.call(this, params);
    this.enclosingScope = params["enclosingScope"];
}

FunctionSymbol.prototype = Object.create(Symbol.prototype);
FunctionSymbol.prototype.constructor = FunctionSymbol;
FunctionSymbol.prototype.arguments = [];

FunctionSymbol.prototype.resolve = function(name){
    var s = this.arguments["name"];
    if( s != undefined)
        return s;
    if(this.enclosingScope != null)
        return this.enclosingScope.resolve(name);
    return null;
}

FunctionSymbol.prototype.define = function(sym){
    this.arguments[sym.name] = sym;
    sym.scope = this;
}

FunctionSymbol.prototype.toString = function(){
    return "function<"+this.name+":"+this.type+">:"+JSON.stringify(Object.keys(this.arguments));
}

exports.FunctionSymbol = FunctionSymbol;
