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
var SimboloClase = require('../scope/SimboloClase.js').SimboloClase;

const clases = {
    caracter: "caracter",
    cantidad: "cantidad",
    caracteres: "caracter",
    cantidades: "cantidad"
}

function DefPhase(){
    LexicoListener.call(this);
    this.globales = null;
    this.alcanceActual = null;
    this.idStack = [];
    this.errors = [];
    this.vA = [""]; //Visibilidad Actual
    return this;
}

DefPhase.prototype = Object.create(LexicoListener.prototype);
DefPhase.prototype.constructor = DefPhase;
DefPhase.prototype.alcances = new HashTable();

DefPhase.prototype.defineVar = function(nameToken,typeToken, dimension){

    if(!this.revisarAlcance(nameToken)){
        return;
    }
    var nomOriginal = nameToken.getText();
    var nombreVariable = this.obtenerNombre(nomOriginal,false);

    var tipo = clases[typeToken.getText()] || typeToken.getText()

    var symVar = new Simbolo({nombre: nameToken.getText(),
                              nombreVar: nombreVariable,
                             visibilidad: this.vA.slice(-1)[0],
                             tipo: {nombre: tipo, dim: dimension},
                             linea: nameToken.getSymbol().line,
                             columna: nameToken.getSymbol().column})
    this.alcanceActual.define(symVar);
}

DefPhase.prototype.obtenerNombre = function(nomOriginal, esFuncion){
    let nombreVariable = "";
    var visibilidad = this.vA.slice(-1)[0];
    if(!esFuncion && visibilidad){
        nombreVariable += "this.";
    }
    if(visibilidad == "publicos"){
        nombreVariable += "_"+nomOriginal;
    }else if(visibilidad == "privados"){
        nombreVariable += "__"+nomOriginal;
    }else{
        nombreVariable += "_".repeat(this.alcanceActual.profundidad+1)+nomOriginal;
    }
    return nombreVariable;
}

DefPhase.prototype.defineVars = function(arr, claseToken){
    var i;
    for(i of arr){
        this.defineVar(i["token"], claseToken, i["dim"]);
    }
}



DefPhase.prototype.revisarAlcance = function(nameToken){
    //Si existe en este alcance no se puede volver a declarar.
    var varTexto = nameToken.getText();


    if(this.alcanceActual.exists(varTexto) || this.globales.exists(varTexto)){
        var sim = nameToken.getSymbol();
        this.errors.push({
            problema: "SE",
            simbolo: sim,
            linea: sim.line,
            columna: sim.column,
            recomendacion: "'"+nameToken.getText()+"' ya se definió o es una clase."
        });
        return false;
    }

    return true;
}

DefPhase.prototype.enterProg = function(ctx){
    this.globales = new Alcance("globales", null, 1);
    this.alcanceActual = this.globales;
}

DefPhase.prototype.enterClase = function(ctx){
    var clase = new SimboloClase({nombre:ctx.ID(0).getText(),
                                  nombreVar: "_"+ctx.ID(0).getText(),
                                   tipo:"clase",
                                   visibilidad: "",
                                   alcanceSuperior: this.alcanceActual,
                                    line:ctx.ID(0).getSymbol().line,
                                    column:ctx.ID(0).getSymbol().column,
                                    profundidad: this.alcanceActual.profundidad+1});
    if(this.alcanceActual.exists(ctx.ID(0).getText())){
        var sim = ctx.ID(0).getSymbol();
        this.errors.push({
            problema: "SE",
            simbolo: sim,
            linea: sim.line,
            columna: sim.column,
            recomendacion: "'"+sim.text+"' ya se definió en este alcance."
        });
        return false;
    }
    this.alcanceActual.define(clase);
    this.alcances.put(ctx,clase);
    this.alcanceActual = clase;
}

DefPhase.prototype.exitClase = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}
DefPhase.prototype.enterDeclaracionFunc = function(ctx){
    var tipoFunc = 'void';
    var nomFunc = ctx.ID(0).getText();
    if(nomFunc != this.alcanceActual["nombre"]){
        if(!this.revisarAlcance(ctx.ID(0))){
            return;
        }
    }

    if(ctx.ID(1) != null){
        tipoFunc = ctx.ID(1).getText();
    }
    var func = new SimboloFuncion({nombre:nomFunc,
                                   nombreVar: this.obtenerNombre(ctx.ID(0).getText(), true),
                                   tipo: tipoFunc,
                                   alcanceSuperior: this.alcanceActual,
                                   visibilidad: this.vA.slice(-1)[0],
                                   line:ctx.ID(0).getSymbol().line,
                                   column:ctx.ID(0).getSymbol().column,
                                   profundidad: this.alcanceActual.profundidad+1});
    this.alcanceActual.define(func);
    this.alcances.put(ctx,func);
    this.alcanceActual = func;
    this.vA.push("");
}
DefPhase.prototype.exitDeclaracionFunc = function(ctx){
    this.vA.pop();
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

DefPhase.prototype.enterPrivados = function(ctx){
    this.vA.push("privados");
}

DefPhase.prototype.enterPublicos = function(ctx){
    this.vA.push("publicos");
}

DefPhase.prototype.exitPrivados
    = DefPhase.prototype.exitPublicos
    = function(ctx){
    this.vA.pop();
}

DefPhase.prototype.exitIncluya = function(ctx){
    if(ctx.ID()){
        this.defineVar(ctx.ID(0), ctx.ID(0),0)
    }
}

DefPhase.prototype.enterTarea = function(ctx){
    var func = new SimboloFuncion({nombre:"tarea",
                                   nombreVar: "tarea",
                                   tipo:"void",
                                   alcanceSuperior: this.alcanceActual,
                                   visibilidad: "",
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

/* INICIO */


DefPhase.prototype.exitConstructor = function(ctx){
    this.idStack.push([{token: ctx.ID(0), dim: 0}]);
}

DefPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    var clase = this.idStack.pop().pop();
    this.defineVar(ctx.ID(0), clase["token"], 0);
}

DefPhase.prototype.enterParamsEntrada
    = DefPhase.prototype.enterListaVar
    = function(ctx){
    this.idStack.push([]);
}

DefPhase.prototype.exitParametro = function(ctx){

    var variable = this.idStack.slice(-1)[0].pop();

    var clase = {getText: ()=>"any"};
    if(ctx.ID()){
        clase = ctx.ID(0);
    }

    this.defineVar(variable["token"], clase, variable["dim"]);
}

DefPhase.prototype.exitParamsEntrada
    = DefPhase.prototype.exitEntre
    = DefPhase.prototype.exitCopieEn = function(ctx){
    this.idStack.pop();
}

DefPhase.prototype.exitVariable = function(ctx){
    this.idStack.slice(-1)[0].push({token: ctx.ID(0), dim: ctx.expr().length } );
}

DefPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    var clase = this.idStack.pop().pop();
    this.defineVars( this.idStack.pop(), clase["token"]);
}

exports.DefPhase = DefPhase;
