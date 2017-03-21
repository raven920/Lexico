function Symbol(params){
    if(params != undefined){
        this.name = params["name"];
        this.type = params["type"];
        this.line = params["line"];
        this.column = params["column"];
    }else{
        this.name = null;
        this.type = null;
        this.line = null;
        this.column = null;
    }

    this.scope = null;

}

Symbol.prototype.constructor = Symbol;

Symbol.prototype.toString = function(){
    return "<"+this.name+":"+this.type+">("+this.line+":"+this.column+")";
}

exports.Symbol = Symbol;
