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

var Simbolo = require('./Simbolo.js').Simbolo;
function SimboloClase(params){
    Simbolo.call(this, params);
    this.alcanceSuperior = params["alcanceSuperior"];
    this.profundidad = params["profundidad"];
    this.nombreAlcance = "clase";
    this.symbols = {};
}

SimboloClase.prototype = Object.create(Simbolo.prototype);
SimboloClase.prototype.constructor = SimboloClase;

SimboloClase.prototype.resolve = function(name){
    console.log("entra: "+name)
    var s = this.symbols[name];
    console.log("sale: "+s)
    if(s != undefined){
        console.log("se encontró: "+name)
        return s;
    }
    if(this.alcanceSuperior != null){
        console.log("se enviará: "+name)
        return this.alcanceSuperior.resolve(name);}
    console.log("no se encontró: "+name)
    return null;
}

SimboloClase.prototype.define = function(sym){
    this.symbols[sym.nombre] = sym;
    sym.alcance = this;
}

SimboloClase.prototype.toString = function(){
    return "function<"+this.nombre+":"+this.tipo+">:"+JSON.stringify(Object.keys(this.symbols));
}

SimboloClase.prototype.getFuncionSuperior = function(){
    return this.alcanceSuperior.getFuncionSuperior();
}

SimboloClase.prototype.exists = function(varName){
    return this.symbols[varName] != undefined;
}



exports.SimboloClase = SimboloClase;
