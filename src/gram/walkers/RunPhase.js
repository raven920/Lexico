var LexicoListener = require('../LexicoListener.js').LexicoListener;
var SimboloFuncion = require('../scope/SimboloFuncion.js').SimboloFuncion;

function RunPhase(globales, alcances){
    LexicoListener.call(this);
    this.globales = globales;
    this.alcances = alcances;
    this.alcanceActual = null;
    this.errors = [];
    this.codigo = "";
    this.idModStack = [];
    this.exprStack = [];
    this.idn = "";
    return this;
}

RunPhase.prototype = Object.create(LexicoListener.prototype);
RunPhase.prototype.constructor = RunPhase;

RunPhase.prototype.enterProg = function(ctx){
    this.codigo += "function programa(notification){";
    this.idn += "    ";
    this.alcanceActual = this.globales;
}

RunPhase.prototype.exitProg = function(ctx){
    this.codigo += "}\n";
}

RunPhase.prototype.enterTarea = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
    this.codigo += "\n" + this.idn + "function tarea()";
}
RunPhase.prototype.exitTarea = function(ctx){
    this.codigo += this.idn + "tarea();\n";
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

RunPhase.prototype.enterBloque = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
    this.codigo += "{\n";
    this.idn += "    ";
}

RunPhase.prototype.exitBloque = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
    this.idn = this.idn.substring(0,this.idn.length-4);
    this.codigo += this.idn + "}\n";
}

RunPhase.prototype.enterSoloNoCond = function(ctx){
    this.codigo += "{\n"+ this.idn+ "}";
}

RunPhase.prototype.enterNoCond = function(ctx){
    this.codigo +=  this.idn + "else";
}

RunPhase.prototype.enterCondVariando
    =   RunPhase.prototype.enterExprCond
    =   RunPhase.prototype.enterExprMientras
        = function(ctx){
    this.exprStack.push([]);
}

RunPhase.prototype.exitExprCond = function(ctx){
    var stack = this.exprStack.pop();
    var expr = stack.pop();
    this.codigo += this.idn + "if("+expr+") "
}

RunPhase.prototype.exitExprMientras = function(ctx){
    var stack = this.exprStack.pop();
    var expr = stack.pop();
    this.codigo += this.idn + "while("+expr+") "
}

RunPhase.prototype.exitCondVariando = function(ctx){
    var nomVar = this.nombreVar(ctx.ID(0));
    var stack = this.exprStack.pop();
    var expr2 = stack.pop();
    var expr1 = stack.pop();

    this.codigo += this.idn + "for("+nomVar+" = "+expr1+"; "+nomVar+" < "+expr2+"; "+nomVar+"++)"
}

RunPhase.prototype.definirVariables = function(ctx, l){
    var i;
    var variable = this.alcanceActual.resolve(ctx.ID(0).getText());
    var prefijo = Array(variable.alcance.profundidad+1).join("_");
    this.codigo += this.idn + "var "+prefijo+variable.nombre;
    for(i of l){
        this.codigo += ", " + i;
    }
    this.codigo += ";\n";
}

RunPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    this.definirVariables(ctx,[]);
}

RunPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    this.definirVariables(ctx, this.idModStack.pop());
}

RunPhase.prototype.enterCopieEn = function(ctx){
    this.exprStack.push([]);
}

RunPhase.prototype.exitCopieEn = function(ctx) {
    var stack = this.exprStack.pop();
    var expr = stack.pop();

    var l = this.idModStack.pop();
    this.codigo += this.idn ;
    for(var i of l){
        this.codigo += i["nombre"]+ " = ";
    }
    this.codigo +=  expr+ ";\n";
};

/*
    El código de exitMuestre y exitEntre debe cambiar.
    Hay que pensar en usar Promises, es posible que
    haya que hacer un refactor grande.
*/

RunPhase.prototype.exitMuestre = function(ctx) {
    this.codigo += this.idn + "alert( ";
    var l = this.exprStack.pop();
    for(var i of l){
        this.codigo += '(' + i + ")+ '' + ";
    }
    this.codigo = this.codigo.substring(0, this.codigo.length-2);
    this.codigo += ");\n";
};

RunPhase.prototype.exitEntre = function(ctx) {
    var l = this.idModStack.pop();
    for(var i of l){
        this.codigo += this.idn + i["nombre"] +" = prompt('entre "+i["nombre"]+"');\n";
    }
};

RunPhase.prototype.enterListaExpr = function(ctx) {
    this.exprStack.push([]);
}

RunPhase.prototype.exitUsoVar =function(ctx){
    var nom = this.nombreVar(ctx.ID(0));
    this.exprStack[this.exprStack.length-1].push(nom);
}

RunPhase.prototype.exitEntero =function(ctx){
    this.exprStack[this.exprStack.length-1].push(ctx.INT(0).getText());
}

RunPhase.prototype.exitCaracteres = function(ctx){
    this.exprStack[this.exprStack.length-1].push(ctx.STRING(0).getText());
}

RunPhase.prototype.exitParentesis = function(ctx){
    var expr = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push("("+expr+")");
}

RunPhase.prototype.exitMultDiv
    =   RunPhase.prototype.exitSumaResta
    =   RunPhase.prototype.exitIgualdad
    =   RunPhase.prototype.exitMenorQue
    =   function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(expr1+ctx.children[1].getText()+expr2);
}

RunPhase.prototype.exitMenosUnario
    = RunPhase.prototype.exitNegacion
    = function(ctx){
    var expr = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(ctx.children[0].getText()+expr);
}

RunPhase.prototype.enterUsoArreglo = function(ctx){
    this.idModStack.push([]);
}

RunPhase.prototype.exitUsoArreglo = function(ctx){
    var stack = this.idModStack.pop();
    var expr = stack[0]["nombre"];
    this.exprStack[this.exprStack.length-1].push(expr);
}

RunPhase.prototype.enterListaIdOArr = function(ctx){
    this.idModStack.push([]);
}

RunPhase.prototype.nombreVar = function(idToken){
    var variable = this.alcanceActual.resolve(idToken.getText());
    var prefijo = Array(variable.alcance.profundidad+1).join("_");
    return prefijo+variable.nombre;
}

RunPhase.prototype.exitIDFromIdOrArr= function(ctx) {
    var nom = this.nombreVar(ctx.ID(0));
    this.idModStack[this.idModStack.length-1].push({nombre: nom, dim: 0});
}

RunPhase.prototype.exitArreglo= function(ctx) {
    var nom = this.nombreVar(ctx.ID(0));
    this.idModStack[this.idModStack.length-1].push({nombre: nom, dim: 0});
}


exports.RunPhase = RunPhase;
