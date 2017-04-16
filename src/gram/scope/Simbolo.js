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

function Simbolo(params){
    if(params != undefined){
        this.nombre = params["nombre"];
        this.nombreVar = params["nombreVar"];
        this.tipo = params["tipo"];
        this.linea = params["linea"];
        this.columna = params["columna"];
        this.visibilidad = params["visibilidad"];
    }else{
        this.nombre = null;
        this.tipo = null;
        this.linea = null;
        this.columna = null;
        this.visibilidad = null;
    }

    this.alcance = null;
}

Simbolo.prototype.constructor = Simbolo;

Simbolo.prototype.toString = function(){
    return "<"+this.nombre+":"+this.tipo+">("+this.linea+":"+this.columna+")";
}

exports.Simbolo = Simbolo;
