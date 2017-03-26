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
