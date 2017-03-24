function Alcance(nombreAlcance, alcanceSuperior, profundidad){
    this.alcanceSuperior = alcanceSuperior;
    this.nombreAlcance = nombreAlcance;
    this.profundidad = profundidad;
    this.symbols = {};

}

Alcance.prototype.constructor = Alcance;

Alcance.prototype.resolve = function(name){
    var s = this.symbols[name];
    if(s != undefined)
        return s;
    if(this.alcanceSuperior != null)
        return this.alcanceSuperior.resolve(name);
    return null;
}

Alcance.prototype.define = function(sym){
    this.symbols[sym.nombre] = sym;
    sym.alcance = this;
}

Alcance.prototype.exists = function(varName){
    return this.symbols[varName] != undefined;
}

Alcance.prototype.toString = function(){
    return this.nombreAlcance+":"+this.symbols.toString();
}

Alcance.prototype.getFuncionSuperior = function(){
    if(this.nombreAlcance == "globales"){
        return null;
    }
    return this.alcanceSuperior.getFuncionSuperior();
}

exports.Alcance = Alcance;
