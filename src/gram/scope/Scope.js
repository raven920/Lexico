function Scope(scopeName, enclosingScope){
    this.enclosingScope = enclosingScope;
    this.symbols = [];
    this.scopeName = scopeName;
}

Scope.prototype.constructor = Scope;

Scope.prototype.resolve = function(name){
    var s = this.symbols[name];
    if(s != undefined)
        return s;
    if(this.enclosingScope != null)
        return this.enclosingScope.resolve(name);
    return null;
}

Scope.prototype.define = function(sym){
    this.symbols[sym.name] = sym;
    sym.scope = this;
}

Scope.prototype.exists = function(varName){
    return this.symbols[varName] != undefined;
}

Scope.prototype.toString = function(){
    return this.scopeName+":"+this.symbols.toString();
}

exports.Scope = Scope;
