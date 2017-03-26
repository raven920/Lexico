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

var HashTable = require('../../util/HashTable.js').HashTable;
var antlr4 = require('antlr4/index');
var LexicoListener = require('../LexicoListener.js').LexicoListener;
var Alcance = require('../scope/Alcance.js').Alcance;
var Simbolo = require('../scope/Simbolo.js').Simbolo;
var SimboloFuncion = require('../scope/SimboloFuncion.js').SimboloFuncion;

function DefPhase(){
    LexicoListener.call(this);
    this.globales = null;
    this.alcanceActual = null;
    this.idStack = [];
    this.errors = [];
    return this;
}

DefPhase.prototype = Object.create(LexicoListener.prototype);
DefPhase.prototype.constructor = DefPhase;
DefPhase.prototype.alcances = new HashTable();

DefPhase.prototype.defineVar = function(nameToken,typeToken, dimension){
    if(!this.revisarAlcance(nameToken)){
        return;
    }

    var symVar = new Simbolo({"nombre": nameToken.getText(),
                             "tipo": {nombre: typeToken.getText(), dim: dimension},
                             "linea": nameToken.getSymbol().line,
                             "columna": nameToken.getSymbol().column})
    this.alcanceActual.define(symVar);
}

DefPhase.prototype.defineVars = function(arr, idToken){
    var i;
    for(i of arr){
        this.defineVar(i["token"], idToken, i["dim"]);
    }
}

DefPhase.prototype.revisarAlcance = function(nameToken){
    //Si existe en este alcance no se puede volver a declarar.
    if(this.alcanceActual.exists(nameToken.getText())){
        var sim = nameToken.getSymbol();
        this.errors.push({
            problema: "SE",
            simbolo: sim,
            linea: sim.line,
            columna: sim.column,
            recomendacion: "'"+nameToken.getText()+"' ya se definió en este alcance."
        });
        return false;
    }

    return true;
}

DefPhase.prototype.enterProg = function(ctx){
    this.globales = new Alcance("globales", null, 1);
    this.alcanceActual = this.globales;
}

DefPhase.prototype.enterTarea = function(ctx){
    var func = new SimboloFuncion({"nombre":"tarea",
                                   "tipo":"void",
                                   "alcanceSuperior": this.alcanceActual,
                                    line:0,
                                    column:0,
                                    profundidad: this.alcanceActual.profundidad+1});
    this.alcanceActual.define(func);
    this.alcances.put(ctx,func);
    this.alcanceActual = func;
}

DefPhase.prototype.enterBloque = function(ctx){
    this.alcanceActual = new Alcance("locales",this.alcanceActual, this.alcanceActual.profundidad+1);
    this.alcances.put(ctx, this.alcanceActual);
}

DefPhase.prototype.exitBloque = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}


DefPhase.prototype.exitTarea = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

DefPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    this.defineVar(ctx.ID(0), ctx.ID(1), 0);
}

DefPhase.prototype.enterDeclaracionVariasVar = function(ctx){
    this.idStack.push([{token: ctx.ID(0), dim: 0}]);
}

DefPhase.prototype.enterDeclaracionArreglos
    = DefPhase.prototype.enterUsoArreglo
    = DefPhase.prototype.enterEntre
    = DefPhase.prototype.enterCopieEn
    = function(ctx) {
    this.idStack.push([]);
}

DefPhase.prototype.exitUsoArreglo
    = DefPhase.prototype.exitEntre
    = DefPhase.prototype.exitCopieEn
    = function(ctx){
    this.idStack.pop();
}

DefPhase.prototype.exitIDFromIdOrArr = function(ctx) {
    this.idStack[this.idStack.length-1].push({token: ctx.ID(), dim: 0});
};

DefPhase.prototype.exitArreglo = function(ctx) {
    this.idStack[this.idStack.length-1].push({token: ctx.ID(), dim: ctx.expr().length } );
};

DefPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    this.defineVars( this.idStack.pop() ,ctx.ID(1));
}

DefPhase.prototype.exitDeclaracionArreglos = function(ctx) {
    this.defineVars( this.idStack.pop() ,ctx.ID(0));
}

exports.DefPhase = DefPhase;
