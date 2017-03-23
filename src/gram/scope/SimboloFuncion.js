var Simbolo = require('./Simbolo.js').Simbolo;
function SimboloFuncion(params){
    Simbolo.call(this, params);
    this.alcanceSuperior = params["alcanceSuperior"];
    this.profundidad = params["profundidad"];
    this.nombreAlcance = "funcion";
}

SimboloFuncion.prototype = Object.create(Simbolo.prototype);
SimboloFuncion.prototype.constructor = SimboloFuncion;
SimboloFuncion.prototype.argumentos = {};

SimboloFuncion.prototype.resolve = function(nombre){
    var s = this.argumentos[nombre];
    if( s != undefined)
        return s;
    if(this.alcanceSuperior != null)
        return this.alcanceSuperior.resolve(name);
    return null;
}

SimboloFuncion.prototype.define = function(sym){
    this.argumentos[sym.nombre] = sym;
    sym.alcance = this;
}

SimboloFuncion.prototype.toString = function(){
    return "function<"+this.nombre+":"+this.tipo+">:"+JSON.stringify(Object.keys(this.argumentos));
}

SimboloFuncion.prototype.getFuncionSuperior = function(){
    return this;
}

exports.SimboloFuncion = SimboloFuncion;
