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
var tipos = require('./util/tipos.js');

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
    this.codigo += "window.programa = function(h){";
    this.idn += "    ";
    this.codigo += this.idn + "var Archivo = h.Archivo;\n";
    this.codigo += this.idn + "var Escritor = h.Escritor;\n";
    this.codigo += this.idn + "var Lector = h.Lector;\n";
    this.codigo += this.idn + "var Arreglo = h.Arreglo;\n";
    this.codigo += this.idn + "var muestre = h.Stdio.muestre;\n";
    this.codigo += this.idn + "var entre = h.Stdio.entre;\n";
    this.alcanceActual = this.globales;
}

RunPhase.prototype.exitProg = function(ctx){
    this.codigo += "}\n";
}

RunPhase.prototype.exitIncluya = function(ctx){
    this.codigo += "require('"+ctx.STRING(0)+"');\n";
}

RunPhase.prototype.enterTarea = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
    this.codigo += this.idn + "async function tarea()";
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

RunPhase.prototype.definirVariables = function(l, tipo, constParams, noCrear){
    if(l.length == 0){
        return;
    }
    this.codigo += this.idn;
    for(var i of l){

        this.codigo += tipos.declaracion(this.nombreVar(i["token"]), i["indices"], tipo, constParams, noCrear);
        //tipos.declaracion("x", [2,3], "cantidad", [""]);
    }
    this.codigo += "\n";
}


RunPhase.prototype.nombreVar = function(idToken, variable){

    variable = variable || this.alcanceActual.resolve(idToken.text);
    var prefijo = ""
    if(variable != null){
        prefijo =  Array(variable.alcance.profundidad+1).join("_");
    }
    return prefijo+idToken.text;
}


RunPhase.prototype.exitParentesis = function(ctx){
    var expr = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push("("+expr+")");
}

RunPhase.prototype.exitVerdadero = function(ctx){
    this.exprStack[this.exprStack.length-1].push('true');
}

RunPhase.prototype.exitFalso = function(ctx){
    this.exprStack[this.exprStack.length-1].push('false');
}

RunPhase.prototype.exitCaracteres =function(ctx){
    this.exprStack[this.exprStack.length-1].push(ctx.STRING(0).getText());
}

RunPhase.prototype.exitCantidades = function(ctx){
    this.exprStack[this.exprStack.length-1].push(ctx.INT(0).getText());
}

RunPhase.prototype.exitIgual = function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(expr1+" == "+expr2);
}

RunPhase.prototype.exitDiferente = function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(expr1+" != "+expr2);
}

RunPhase.prototype.exitYTambien = function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(expr1+" && "+expr2);
}

RunPhase.prototype.exitOMasBien = function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(expr1+" || "+expr2);
}

RunPhase.prototype.exitNegacion = function(ctx){
    var expr = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push("!"+expr);
}

RunPhase.prototype.exitUnario = function(ctx){
    var expr = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(ctx.children[0].getText()+expr);
}

RunPhase.prototype.exitMultDivMod
    =   RunPhase.prototype.exitSumaResta
    =   RunPhase.prototype.exitRelacional
    =   function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push(expr1+ctx.children[1].getText()+expr2);
}

/*
    Para js -2 ** 2 es ambiguo. Para solucionar se encierra el primer operador
    en paréntesis.
    (-2)**2 = 4

    Este operador es asociativo hacia la derecha
*/
RunPhase.prototype.exitPotencia = function(ctx){
    var expr2 = this.exprStack[this.exprStack.length-1].pop();
    var expr1 = this.exprStack[this.exprStack.length-1].pop();
    this.exprStack[this.exprStack.length-1].push('(1*('+expr1+')) **'+expr2);
}

RunPhase.prototype.exitUsoFuncion = function(ctx){
    var params = "";
    if(ctx.usoListaExpr() != null){
        params = this.exprStack.pop();
    }
    this.exprStack[this.exprStack.length-1].push(ctx.ID(0)+"("+params+")");
}

RunPhase.prototype.exitUsoArreglo = function(ctx){

    var indices = this.exprStack.pop();

    var uso = ctx.ID(0).getText()+"["+indices.join("][")+"]";
    this.exprStack.push([uso])
}

RunPhase.prototype.exitUsoVar =function(ctx){
    var nom = this.nombreVar(ctx.ID(0).getSymbol());
    this.exprStack[this.exprStack.length-1].push(nom);
}
RunPhase.prototype.enterExprMientras
    = RunPhase.prototype.enterCondVariando
    = RunPhase.prototype.enterCopieEn
    = RunPhase.prototype.enterUsoListaExpr
    = RunPhase.prototype.enterExprCond
    = RunPhase.prototype.enterConsultaSencilla
    = RunPhase.prototype.enterUsoConsultable = function(ctx){
    this.exprStack.push([]);

}

RunPhase.prototype.exitUsoConsultable = function(ctx){
    var secuencia = this.exprStack.pop();
    this.exprStack[this.exprStack.length-1].push("(await "+secuencia.join(".")+")");
}

RunPhase.prototype.exitConsultaSencilla = function(ctx){
    var secuencia = this.exprStack.pop();
    this.codigo += this.idn +"await "+ secuencia.join(".")+";\n";
}

RunPhase.prototype.exitConstructor = function(ctx){
    if(ctx.usoListaExpr() == null){
        this.exprStack.push([]);
    }
    this.idModStack.push([{token: ctx.ID(0).getSymbol(), indices: null}]);
}

RunPhase.prototype.enterListaVar = function(ctx){
    this.idModStack.push([]);
}

RunPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    var clase = this.idModStack.pop().pop();
    var constParams = this.exprStack.pop();
    var noCrear= ctx.children[ctx.children.length-1] == 'no_crear';
    this.definirVariables([{token: ctx.ID(0).getSymbol(), indices: []}], clase["token"].text, constParams, noCrear);
}


RunPhase.prototype.enterVariable = function(ctx){
    if(ctx.expr().length > 0){
        this.exprStack.push([]);
    }
}

RunPhase.prototype.exitVariable = function(ctx){
    var indices = [];
    if(ctx.expr().length > 0){
        indices = this.exprStack.pop();
    }
    this.idModStack[this.idModStack.length-1].push({token: ctx.ID(0).getSymbol(), indices: indices});
}



RunPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    var clase = this.idModStack.pop().pop();
    var variables = this.idModStack.pop();
    var constParams = this.exprStack.pop();
    var noCrear= ctx.children[ctx.children.length-1] == 'no_crear';
    this.definirVariables(variables, clase["token"].text, constParams, noCrear);
}

RunPhase.prototype.exitExprCond = function(ctx){
    var stack = this.exprStack.pop();
    var expr = stack.pop();
    this.codigo += this.idn + "if("+expr+") "
}

RunPhase.prototype.enterSoloNoCond = function(ctx){
    this.codigo += "{\n"+ this.idn+ "}";
}

RunPhase.prototype.enterNoCond = function(ctx){
    this.codigo +=  this.idn + "else";
}

RunPhase.prototype.exitCondVariando = function(ctx){

    var stack = this.exprStack.pop();
    var expr2 = stack.pop();
    var expr1 = stack.pop();
    var nomVar = stack.pop();

    this.codigo += this.idn + "for("+nomVar+" = "+expr1+"; "+nomVar+" <= "+expr2+"; "+nomVar+"++)"
}

RunPhase.prototype.exitExprMientras = function(ctx){
    var expr = this.exprStack.pop().pop();
    this.codigo += this.idn + "while("+expr+") "
}



RunPhase.prototype.exitMuestre = function(ctx) {
    this.codigo += this.idn + "await muestre(";
    var l = this.exprStack.pop();
    this.codigo += "(" + l.join(") + '' + (") + "));\n";
}

RunPhase.prototype.exitEntre = function(ctx) {

    var varNom, varMuestra;
    var l = this.idModStack.pop();
    this.codigo += this.idn;

    for(var i of l){
        varMuestra = i["token"].text;
        var variable = this.alcanceActual.resolve(i["token"].text);
        varNom = this.nombreVar(i["token"], variable);
        var promptIn =  "await entre('entre ";
        var promptOut =  "')";
        if(variable.tipo["nombre"] == "cantidad"){
            promptIn = "parseFloat("+promptIn;
            promptOut += ")";
        }
        if(i["indices"].length != 0){
            varNom += '['+i["indices"].join('][')+"]";
            varMuestra += "['+("+i["indices"].join(")+', '+(")+")+']";
        }
        this.codigo += varNom + " = "+ promptIn + varMuestra + promptOut+";\n"
    }
};


RunPhase.prototype.exitCopieEn = function(ctx) {
    var expr = this.exprStack.pop().pop();
    var l = this.idModStack.pop();
    this.codigo += this.idn ;
    for(var i of l){
        this.codigo += this.nombreVar(i["token"]);
        if(i["indices"].length != 0){
            this.codigo += "["+i["indices"].join("][")+"]";
        }
    }
    this.codigo += " = "+expr+";\n";
};


exports.RunPhase = RunPhase;
