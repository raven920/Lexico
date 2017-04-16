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

var antlr4 = require('antlr4/index');
var LexicoListener = require('../LexicoListener.js').LexicoListener;

function InclPhase(){
    LexicoListener.call(this);
    this.incluya = [];
    return this;
}

InclPhase.prototype = Object.create(LexicoListener.prototype);
InclPhase.prototype.constructor = InclPhase;

InclPhase.prototype.exitIncluya = function(ctx){
    let nombre = ctx.STRING(0).getText().trim();
    nombre = nombre.substr(1, nombre.length-2);
    console.log("que pasa con: "+nombre);
    if(nombre.endsWith('.lx')){
        console.log("se encontró un incluya!!!! "+nombre);
        this.incluya.push(nombre);
    }
}

exports.InclPhase = InclPhase;
