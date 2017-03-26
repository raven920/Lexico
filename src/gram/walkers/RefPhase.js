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

var LexicoListener = require('../LexicoListener.js').LexicoListener;
var SimboloFuncion = require('../scope/SimboloFuncion.js').SimboloFuncion;


function RefPhase(globales, alcances){
    LexicoListener.call(this);

    this.globales = globales;
    this.alcances = alcances;
    this.alcanceActual = null;
    this.idStack = [];
    this.errors =[];
    return this;
}

RefPhase.prototype = Object.create(LexicoListener.prototype);
RefPhase.prototype.constructor = RefPhase;

RefPhase.prototype.nuevoError = function(idSimbolo, mensaje){
    this.errors.push({
            problema: "SE",
            simbolo: idSimbolo,
            linea: idSimbolo.line,
            columna: idSimbolo.column,
            recomendacion: mensaje
    });
}

RefPhase.prototype.revisarAlcance = function(idToken){
    var name = idToken.getSymbol();
    var variable = this.alcanceActual.resolve(name.text);
    if(variable == null){
        this.nuevoError(name, "'"+idToken.getText()+"' no ha sido declarado.");
    }else if(variable instanceof SimboloFuncion){
        this.nuevoError(name, "'"+idToken.getText()+"' no es una variable.");
    }else if(this.alcanceActual.getFuncionSuperior() == variable.alcance.getFuncionSuperior()){
        if(   name.line < variable.linea
          || (name.line == variable.linea && name.column < variable.columna)){
            this.nuevoError(name, "'"+idToken.getText()+"' debe ser declarada primero." );
        }
    }
    return variable;
}

RefPhase.prototype.enterProg = function(ctx){
    this.alcanceActual = this.globales;
}

RefPhase.prototype.enterTarea = function(ctx){

    this.alcanceActual = this.alcances.get(ctx);
}

RefPhase.prototype.exitTarea = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

RefPhase.prototype.enterBloque = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
}

RefPhase.prototype.exitBloque = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

RefPhase.prototype.exitArreglo = function(ctx){
    var token = ctx.ID(0);
    var variable = this.revisarAlcance(token);
    if(variable != null && variable.tipo["dim"] != ctx.expr().length){
        this.nuevoError(token.getSymbol(), "Dimensiones de '"+token.getText()+"' son incorrectas" );
    }
    this.idStack[this.idStack.length-1].push(ctx.ID(0));
}

RefPhase.prototype.exitIDFromIdOrArr = function(ctx) {
    this.idStack[this.idStack.length-1].push(ctx.ID(0));
};

RefPhase.prototype.enterUsoArreglo
    =   RefPhase.prototype.enterEntre
    =   RefPhase.prototype.enterCopieEn
    =   RefPhase.prototype.enterDeclaracionArreglos
    =   RefPhase.prototype.enterDeclaracionVariasVar
    =   function(ctx) {
    this.idStack.push([]);
}

RefPhase.prototype.exitCopieEn
    =   RefPhase.prototype.exitEntre
    =   function(ctx){
    var i;
    var l = this.idStack.pop();
    for(i of l ){
        this.revisarAlcance(i);
    }
}
RefPhase.prototype.exitUsoArreglo
    =   RefPhase.prototype.exitDeclaracionArreglos
    =   RefPhase.prototype.exitDeclaracionVariasVar
    =   function(ctx){
    this.idStack.pop();
}

//FIXME
RefPhase.prototype.enterCondVariando = function(ctx){
    var variable = this.revisarAlcance(ctx.ID(0));
    if( variable != null && variable.tipo["dim"] !=0){
        this.nuevoError(ctx.ID().getSymbol(), "No use arreglos como variables");
    }
}

RefPhase.prototype.exitUsoVar = function(ctx) {
    var variable = this.revisarAlcance(ctx.ID(0));
}

exports.RefPhase = RefPhase;
