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

RefPhase.prototype.revisarAlcance = function(idToken){
    var name = idToken.getSymbol();

    var err = {
            problema: "Error semántico",
            simbolo: name,
            linea: name.line,
            columna: name.column
    };

    var variable = this.alcanceActual.resolve(name.text);

    if(variable == null){
        err["recomendacion"] = "'"+idToken.getText()+"' no ha sido declarado.";
    }else if(variable instanceof SimboloFuncion){
        err["recomendacion"] = "'"+idToken.getText()+"' no es una variable.";
    }else if(this.alcanceActual.getFuncionSuperior() == variable.alcance.getFuncionSuperior()){
        if(   name.line < variable.linea
          || (name.line == variable.linea && name.column < variable.columna)){
            err["recomendacion"] = "'"+idToken.getText()+"' debe ser declarada primero.";
        }
    }
    if(err["recomendacion"] != undefined){
        this.errors.push(err);
    }
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

RefPhase.prototype.exitDeclaracionArreglos
    =   RefPhase.prototype.exitDeclaracionVariasVar
    =   function(ctx){
    this.idStack.pop();
}

RefPhase.prototype.exitUsoArreglo = function(ctx) {
    this.revisarAlcance((this.idStack.pop())[0]);
}


RefPhase.prototype.enterCondVariando
    =   RefPhase.prototype.exitUsoVar = function(ctx) {
    this.revisarAlcance(ctx.ID(0));
}

exports.RefPhase = RefPhase;
