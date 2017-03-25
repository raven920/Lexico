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

RunPhase.prototype.tipoDatos = {
    caracter: "\"\"",
    caracteres: "\"\"",
    cantidad: 0,
    cantidades: 0,
    booleano: false,
    booleanos: true
}

RunPhase.prototype.enterProg = function(ctx){
    this.codigo += "function programa(h){";
    this.idn += "    ";
    this.codigo += this.idn + "var Arreglo = h.Arreglo";
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


RunPhase.prototype.definirVariables = function(l, tipo){
    if(l.length == 0){
        return;
    }

    this.codigo += this.idn;
    for(var i of l){
        this.codigo += "var "+i["nombre"]+" = ";
        if(i["dim"] != 0){
            this.codigo += "new Arreglo(["+i["indices"][0];
            for(var j = 1; j < i["dim"]; j++){
                this.codigo += ", "+i["indices"][j];
            }
            this.codigo += "], '"+i["token"].text+"' ); ";
        }else{
            this.codigo += this.tipoDatos[tipo]+"; ";
        }
    }
    this.codigo += "\n";
}

RunPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    this.definirVariables([{nombre: this.nombreVar(ctx.ID(0)), dim: 0, indexes: null}], ctx.ID(1).getText());
}

RunPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    var variables = this.idModStack.pop();
    variables.unshift({nombre: this.nombreVar(ctx.ID(0)), dim: 0, indexes: null})
    this.definirVariables(variables, ctx.ID(1).getText());
}

RunPhase.prototype.exitDeclaracionArreglos = function(ctx){
    var arrN = this.idModStack.pop();
    var arr1
    if(ctx.listaIdOArr() != null){
        var arr1 = this.idModStack.pop();
        arrN.unshift(arr1[0]);
    }
    this.definirVariables(arrN, ctx.ID(0).getText());
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
        if(i["dim"] != 0){
            this.codigo += i["nombre"]+".set(["
            this.codigo += i["indices"][0];
            for(var j = 1; j < i["dim"]; j++){
                this.codigo += ", " + i["indices"][j];
            }
            this.codigo += "], "+expr+"); "
        }else{
            this.codigo += i["nombre"]+ " = "+ expr+"; ";
        }
    }
    this.codigo +=  ";\n";
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
    var indices;
    var l = this.idModStack.pop();
    this.codigo += this.idn;
    for(var i of l){
        this.codigo += i["nombre"];
        if(i["dim"] != 0){
            indices = "["+ i["indices"][0];
            for(var j = 1; j < i["dim"]; j++){
                indices += ", "+i["indices"][j];
            }
            indices += "]"

            this.codigo += ".set("+indices+", prompt('entre "+i["token"].text+"['+"+indices+"+']')); "
        }else{
            this.codigo += " = prompt('entre "+i["token"].text+"');\n";
        }

    }
};

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

RunPhase.prototype.enterDeclaracionArreglos
    =   RunPhase.prototype.enterListaIdOArr
    =   RunPhase.prototype.enterUsoArreglo = function(ctx){
    this.idModStack.push([]);
}

RunPhase.prototype.exitUsoArreglo = function(ctx){
    var stack = this.idModStack.pop();
    var expr = stack[0]["nombre"]+".get([";
    expr += stack[0]["indices"][0];
    for(var i = 1; i < stack[0]["dim"]; i++){
        expr += ", " + stack[0]["indices"][i];
    }
    expr += "])"
    this.exprStack[this.exprStack.length-1].push(expr);
}

RunPhase.prototype.nombreVar = function(idToken){
    var variable = this.alcanceActual.resolve(idToken.getText());
    var prefijo = Array(variable.alcance.profundidad+1).join("_");
    return prefijo+variable.nombre;
}

RunPhase.prototype.exitIDFromIdOrArr= function(ctx) {
    var nom = this.nombreVar(ctx.ID(0));
    this.idModStack[this.idModStack.length-1].push({nombre: nom, token: ctx.ID(0).getSymbol(), dim: 0, indices: null});
}

RunPhase.prototype.enterListaExpr
    =   RunPhase.prototype.enterArreglo = function(ctx){
    this.exprStack.push([]);
}

RunPhase.prototype.exitArreglo = function(ctx) {
    var nom = this.nombreVar(ctx.ID(0));
    var exprs = this.exprStack.pop();
    this.idModStack[this.idModStack.length-1].push({nombre: nom, token: ctx.ID(0).getSymbol(), dim: ctx.expr().length, indices: exprs});
}


exports.RunPhase = RunPhase;
