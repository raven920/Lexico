function Simbolo(params){
    if(params != undefined){
        this.nombre = params["nombre"];
        this.tipo = params["tipo"];
        this.linea = params["linea"];
        this.columna = params["columna"];
    }else{
        this.nombre = null;
        this.tipo = null;
        this.linea = null;
        this.columna = null;
    }

    this.alcance = null;
}

Simbolo.prototype.constructor = Simbolo;

Simbolo.prototype.toString = function(){
    return "<"+this.nombre+":"+this.tipo+">("+this.linea+":"+this.columna+")";
}

exports.Simbolo = Simbolo;
