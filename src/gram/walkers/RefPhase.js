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

    var name = idToken["token"].getSymbol();
    var variable = this.alcanceActual.resolve(name.text);
    if(variable == null){
        //si no es una funcion existente...
        if(idToken["tipo"] != 'f'){
            this.nuevoError(name, "'"+idToken["token"].getText()+"' no ha sido declarado.");
        }else if( window[idToken["token"].getText()] == undefined){
            this.nuevoError(name, "'"+idToken["token"].getText()+"' no existe.");
        }
    }else if(this.alcanceActual.getFuncionSuperior() == variable.alcance.getFuncionSuperior()){
        if(   name.line < variable.linea
          || (name.line == variable.linea && name.column < variable.columna)){
            this.nuevoError(name, "'"+idToken["token"].getText()+"' debe ser declarada primero." );
        }else if('a' == idToken["tipo"]
             && idToken["validar"]
             && variable.tipo["dim"] != idToken["dim"]){
                this.nuevoError(name, "Dimensiones de '"+idToken["token"].getText()+"' son incorrectas" );
        }
    }
    return variable;
}

RefPhase.prototype.enterProg = function(ctx){
    this.alcanceActual = this.globales;
}

RefPhase.prototype.enterClase = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
}

RefPhase.prototype.exitClase = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

RefPhase.prototype.enterDeclaracionFunc = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
}

RefPhase.prototype.exitDeclaracionFunc = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
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




RefPhase.prototype.exitConstructor = function(ctx){
    //REVISAR ALCANCE

}

RefPhase.prototype.enterConsultaSencilla
    = RefPhase.prototype.enterUsoConsultable = function(ctx){
    this.idStack.push([]);
}


RefPhase.prototype.exitUsoVar = function(ctx){
    this.idStack.slice(-1)[0].push({token: ctx.ID(0), dim: 0, tipo: 'v'});
}

RefPhase.prototype.exitUsoArreglo = function(ctx){
    var vali = true;
    if(ctx.children.slice(-1)[0].getText()=="no_validar"){
        vali = false;
    }
    this.idStack.slice(-1)[0].push({token: ctx.ID(0), dim: ctx.expr().length, tipo: 'a', validar: vali});
}


RefPhase.prototype.enterCondVariando = function(ctx){
    this.idStack.push([]);
}

RefPhase.prototype.exitCondVariando = function(ctx){
    var sobre = this.idStack.pop().pop();
    if(sobre["tipo"] == 'f'){
        this.nuevoError(sobre["token"].getSymbol(), "no se puede variar sobre una funcion");
    }else{
        sobre["validar"]= true;
        this.revisarAlcance(sobre);
    }


}
RefPhase.prototype.exitUsoFuncion = function(ctx){
    this.idStack.slice(-1)[0].push({token: ctx.ID(0), dim: 0, tipo: 'f'});
}

RefPhase.prototype.exitConsultaSencilla
    = RefPhase.prototype.exitUsoConsultable = function(ctx){
    this.revisarAlcance(this.idStack.pop().shift());
}

RefPhase.prototype.enterParamsEntrada
    = RefPhase.prototype.enterListaVar = function(ctx){
    this.idStack.push([]);
}

RefPhase.prototype.exitCopieEn
    = function(ctx){
    var listaV = this.idStack.pop();
    for(var i of listaV){
        this.revisarAlcance(i);
    }
}

RefPhase.prototype.exitEntre = function(ctx){
    var listaV = this.idStack.pop();
    var variable;
    for(var i of listaV){
        variable = this.revisarAlcance(i);
        if("caracter" != variable["tipo"]["nombre"]  && "cantidad" != variable["tipo"]["nombre"]){
            this.nuevoError(i["token"].getSymbol(), "'"+i["token"].getText()+"' debe ser cantidad o caracter." );
        }
    }
}

RefPhase.prototype.exitVariable = function(ctx){
    this.idStack.slice(-1)[0].push({token: ctx.ID(0), dim: ctx.expr().length, tipo: 'a', validar: true});
}

RefPhase.prototype.exitDeclaracionVariasVar
    = RefPhase.prototype.exitParamsEntrada
    = function(ctx){
    this.idStack.pop();
}

exports.RefPhase = RefPhase;
