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
