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
    this.codStack = [];
    this.codigo = "";
    this.idModStack = [];
    this.exprStack = [];
    this.idn = "";
    return this;
}

RunPhase.prototype = Object.create(LexicoListener.prototype);
RunPhase.prototype.constructor = RunPhase;

RunPhase.prototype.enterProg = function(ctx){
    this.codigo += "window.programa = async function(h){";
    this.idn += "    ";
    //this.codigo += this.idn + "let require = h.require;\n";
    this.codigo += this.idn + "const Archivo = h.Archivo;\n";
    this.codigo += this.idn + "const Escritor = h.Escritor;\n";
    this.codigo += this.idn + "const Lector = h.Lector;\n";
    this.codigo += this.idn + "const Arreglo = h.Arreglo;\n";
    this.codigo += this.idn + "const muestre = h.Stdio.muestre;\n";
    this.codigo += this.idn + "const entre = h.Stdio.entre;\n";
    this.codigo += this.idn + "const reglas = h.reglas\n";
    this.codigo += this.idn + "const caracter = h.caracter\n";
    this.codigo += this.idn + "const cantidad = h.cantidad\n";
    this.alcanceActual = this.globales;
}

RunPhase.prototype.exitProg = function(ctx){
    this.codigo += "}\n";
}

/*RunPhase.prototype.exitIncluya = function(ctx){
    if(ctx.ID()){
        this.codigo += "var "+this.nombreVar(ctx.ID(0).getSymbol())+" = ";
    }
    this.codigo += "require("+ctx.STRING(0).getText()+");\n";
}*/

RunPhase.prototype.enterTarea = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
    this.codStack.push([]);
    console.log(this.codStack);
    this.codStack.slice(-1)[0].push(this.idn + "async function tarea()");
}
RunPhase.prototype.exitTarea = function(ctx){
    //this.codigo += this.idn + "try{\n";
    this.codStack.slice(-1)[0].push(this.idn + "await tarea();\n");
    this.codigo += this.codStack.pop().join("");


    /*this.codigo += this.idn + "}catch(e){\n";
    this.codigo += this.idn + "    console.log(e);\n";
    this.codigo += this.idn + "}";*/
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

RunPhase.prototype.enterClase = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
    this.codigo += this.idn + "class "+ctx.ID(0).getText();
    if(ctx.ID(1)){
        this.codigo += " extends "+ ctx.ID(1).getText();
    }
    this.codigo += "{\n";
    this.idn += "    ";

    this.codStack.push([""]);

}

/*
clase Hogar{
  publicos:
  el objeto y es una cantidad
  mensajes:
  Hogar{
    copie 2 en y
  }
}

clase Vivienda derivada_de Hogar{
  publicos:
  mensajes:
  abra{
    muestre "Hola"
  }
}

tarea{
  el objeto x es una Vivienda
  muestre x.y
}

*/
RunPhase.prototype.exitClase = function(ctx){
    //this.codigo += this.idn + "try{\n";
    let miembros = this.codStack.pop().join("");
    let constru;
    let codigoPr =
        this.idn+"    let proxy;\n"
    +   this.idn+"    if(this['___esProxy'])\n"
    +   this.idn+"        proxy = new Proxy(this['___instancia'], reglas);\n"
    +   this.idn+"    else proxy = new Proxy(this, reglas);\n"
    +   this.idn+"    return proxy;\n";

    if(this.codStack.length == 1){
        constru = this.codStack.pop();
        constru.splice(2, 0, miembros);
        constru.splice(constru.length-1, 0, codigoPr);
        this.codigo += constru.join("");
    }else{
        this.codigo += this.idn + "constructor(){\n"
        if(ctx.ID(1)){
            this.codigo += this.idn + "    super();\n";
        }
        this.codigo += miembros;
        this.codigo += codigoPr;
        this.codigo += this.idn + "}\n";
    }
    this.idn = this.idn.substring(0,this.idn.length-4);
    this.codigo += this.idn + "}\n";


    /*this.codigo += this.idn + "}catch(e){\n";
    this.codigo += this.idn + "    console.log(e);\n";
    this.codigo += this.idn + "}";*/
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}

RunPhase.prototype.enterDeclaracionFunc = function(ctx){
    if(this.alcanceActual.nombreAlcance != "clase"){
        console.log("alcance extraño: ")
        this.console.log(this.alcanceActual);
    }
    if(this.alcanceActual.nombreAlcance == "clase"
       && this.alcanceActual["nombre"] == ctx.ID(0).getText()){
        console.log("constructor!: "+ctx.ID(0).getText());
    }
    this.codStack.push([]);
    this.alcanceActual = this.alcances.get(ctx);

}

RunPhase.prototype.exitDeclaracionFunc = function(ctx){
    let identi, params, varAct;
    let listParams = [], cod =[];
    let nombreCod = this.nombreVar(ctx.ID(0).getText());
    let esConstr = this.alcanceActual.alcanceSuperior["nombre"] == ctx.ID(0).getText();

    identi = this.idn;
    if(!esConstr){
        identi += "async "+ nombreCod + "(";
    }else{
        identi += "constructor(";
    }

    if(ctx.paramsEntrada()){
        params = this.idModStack.pop();
        for(var i of params){
            varAct = this.alcanceActual.resolve(i["token"].text);
            listParams.push(this.nombreVar(i["token"].text)+ " : "+varAct["tipo"]["nombre"]);
        }
        identi += listParams.join(", ");
    }
    identi += ")";
    if(ctx.ID(1) && !esConstr){
        identi += ": "+ctx.ID(1).getText();
    }
    cod.push(identi);
    if(ctx.sent() == true){
        cod.push("{\n");
    }
    cod.push(...this.codStack.pop())
    if(ctx.sent() == true){
        cod.push(this.idn + "}\n");
    }
    if(!esConstr){
        this.codigo += cod.join("");
    }else{
        this.codStack.unshift(cod);
    }
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
}


RunPhase.prototype.enterBloque = function(ctx){
    this.alcanceActual = this.alcances.get(ctx);
    this.codStack.slice(-1)[0].push("{\n");
    this.idn += "    ";
}

RunPhase.prototype.exitBloque = function(ctx){
    this.alcanceActual = this.alcanceActual.alcanceSuperior;
    this.idn = this.idn.substring(0,this.idn.length-4);

    this.codStack.slice(-1)[0].push(this.idn+"}\n");

}

RunPhase.prototype.definirVariables = function(l, tipo, constParams, noCrear){
    let cod = this.idn;
    if(l.length == 0){
        return;
    }

    for(var i of l){
        cod += tipos.declaracion(this.nombreVar(i["token"].text), i["indices"], tipo, constParams, noCrear);
        //tipos.declaracion("x", [2,3], "cantidad", [""]);
    }
    cod += "\n";
    this.codStack.slice(-1)[0].push(cod);
}


RunPhase.prototype.nombreVar = function(nombre, variable){

    variable = variable || this.alcanceActual.resolve(nombre);
    if(variable != null){
        return variable.nombreVar;
    }
    return nombre;
}


RunPhase.prototype.exitParentesis = function(ctx){
    var expr = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push("("+expr+")");
}

RunPhase.prototype.exitVerdadero = function(ctx){
    this.exprStack.slice(-1)[0].push('true');
}

RunPhase.prototype.exitFalso = function(ctx){
    this.exprStack.slice(-1)[0].push('false');
}

RunPhase.prototype.exitCaracteres =function(ctx){
    this.exprStack.slice(-1)[0].push(ctx.STRING(0).getText());
}

RunPhase.prototype.exitCantidades = function(ctx){
    this.exprStack.slice(-1)[0].push(ctx.INT(0).getText());
}

RunPhase.prototype.exitIgual = function(ctx){
    var expr2 = this.exprStack.slice(-1)[0].pop();
    var expr1 = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push(expr1+" == "+expr2);
}

RunPhase.prototype.exitDiferente = function(ctx){
    var expr2 = this.exprStack.slice(-1)[0].pop();
    var expr1 = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push(expr1+" != "+expr2);
}

RunPhase.prototype.exitYTambien = function(ctx){
    var expr2 = this.exprStack.slice(-1)[0].pop();
    var expr1 = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push(expr1+" && "+expr2);
}

RunPhase.prototype.exitOMasBien = function(ctx){
    var expr2 = this.exprStack.slice(-1)[0].pop();
    var expr1 = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push(expr1+" || "+expr2);
}

RunPhase.prototype.exitNegacion = function(ctx){
    var expr = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push("!"+expr);
}

RunPhase.prototype.exitUnario = function(ctx){
    var expr = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push(ctx.children[0].getText()+expr);
}

RunPhase.prototype.exitMultDivMod
    =   RunPhase.prototype.exitSumaResta
    =   RunPhase.prototype.exitRelacional
    =   function(ctx){
    var expr2 = this.exprStack.slice(-1)[0].pop();
    var expr1 = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push(expr1+ctx.children[1].getText()+expr2);
}

/*
    Para js -2 ** 2 es ambiguo. Para solucionar se encierra el primer operador
    en paréntesis.
    (-2)**2 = 4

    Este operador es asociativo hacia la derecha
*/
RunPhase.prototype.exitPotencia = function(ctx){
    var expr2 = this.exprStack.slice(-1)[0].pop();
    var expr1 = this.exprStack.slice(-1)[0].pop();
    this.exprStack.slice(-1)[0].push('(1*('+expr1+')) **'+expr2);
}

RunPhase.prototype.exitUsoFuncion = function(ctx){
    var params = "";
    if(ctx.usoListaExpr() != null){
        params = this.exprStack.pop();
    }
    this.exprStack.slice(-1)[0].push(ctx.ID(0)+"("+params+")");
}

RunPhase.prototype.exitUsoArreglo = function(ctx){

    var indices = this.exprStack.pop();

    var uso = ctx.ID(0).getText()+"["+indices.join("][")+"]";
    this.exprStack.slice(-1)[0].push(uso)
}

RunPhase.prototype.exitUsoVar =function(ctx){
    this.exprStack.slice(-1)[0].push(ctx.ID(0).getText());
}
RunPhase.prototype.enterExprMientras
    = RunPhase.prototype.enterCondVariando
    = RunPhase.prototype.enterCopieEn
    = RunPhase.prototype.enterRetorne
    = RunPhase.prototype.enterUsoListaExpr
    = RunPhase.prototype.enterUsoArreglo
    = RunPhase.prototype.enterExprCond
    = RunPhase.prototype.enterConsultaSencilla
    = RunPhase.prototype.enterUsoConsultable = function(ctx){
    this.exprStack.push([]);

}

RunPhase.prototype.exitUsoConsultable = function(ctx){

    var secuencia = this.exprStack.pop();
    var nom = secuencia[0];
    var finNom = "";
    var arrOFuncion = Math.max(nom.indexOf('['), nom.indexOf('('));
    console.log("se pregunta por: "+nom);
    if(arrOFuncion != -1){
        finNom = nom.substr(arrOFuncion);
        nom = nom.substr(0, arrOFuncion);
    }
    nom = this.nombreVar(nom);
    secuencia[0] = nom+finNom;
    console.log("se sube: "+secuencia[0]);
    this.exprStack.slice(-1)[0].push("(await "+secuencia.join(".")+")");
}

RunPhase.prototype.exitConsultaSencilla = function(ctx){
    var secuencia = this.exprStack.pop();
    var nom = secuencia[0];
    var arrOFuncion = Math.max(nom.indexOf('['), nom.indexOf('('));
    if(arrOFuncion != -1){
        nom = nom.substr(0, arrOFuncion);
    }
    nom = this.nombreVar(nom);
    secuencia[0] = nom;

    this.codStack.slice(-1)[0].push( this.idn +"await "+ secuencia.join(".")+";\n");
}

RunPhase.prototype.exitConstructor = function(ctx){
    if(ctx.usoListaExpr() == null){
        this.exprStack.push([]);
    }
    this.idModStack.push([{token: ctx.ID(0).getSymbol(), indices: null}]);
}


RunPhase.prototype.enterParamsEntrada
    = RunPhase.prototype.enterListaVar = function(ctx){
    this.idModStack.push([]);
}

RunPhase.prototype.exitDeclaracionUnaVar = function(ctx){
    var clase = this.idModStack.pop().pop();
    var constParams = this.exprStack.pop();
    var noCrear= ctx.children.slice(-1)[0] == 'no_crear';
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
    this.idModStack.slice(-1)[0].push({token: ctx.ID(0).getSymbol(), indices: indices});
}



RunPhase.prototype.exitDeclaracionVariasVar = function(ctx){
    var clase = this.idModStack.pop().pop();
    var variables = this.idModStack.pop();
    var constParams = this.exprStack.pop();
    var noCrear= ctx.children.slice(-1)[0] == 'no_crear';
    this.definirVariables(variables, clase["token"].text, constParams, noCrear);
}

RunPhase.prototype.exitExprCond = function(ctx){
    var stack = this.exprStack.pop();
    var expr = stack.pop();
    this.codStack.slice(-1)[0].push( this.idn + "if("+expr+") ");
}

RunPhase.prototype.enterSoloNoCond = function(ctx){
    this.codStack.slice(-1)[0].push( "{\n"+ this.idn+ "}");
}

RunPhase.prototype.enterNoCond = function(ctx){
    this.codStack.slice(-1)[0].push(this.idn + "else");
}

RunPhase.prototype.exitCondVariando = function(ctx){

    var stack = this.exprStack.pop();
    var expr2 = stack.pop();
    var expr1 = stack.pop();
    var nomVar = this.nombreVar(stack.pop());

    this.codStack.slice(-1)[0].push(this.idn + "for("+nomVar+" = "+expr1+"; "+nomVar+" <= "+expr2+"; "+nomVar+"++)");
}

RunPhase.prototype.exitExprMientras = function(ctx){
    var expr = this.exprStack.pop().pop();
    this.codStack.slice(-1)[0].push(this.idn + "while("+expr+") ");
}



RunPhase.prototype.exitMuestre = function(ctx) {

    var l = this.exprStack.pop();
    this.codStack.slice(-1)[0].push(
        this.idn    + "await muestre("
                    +"("
                    + l.join(") + '' + (")
                    + "));\n");

}

RunPhase.prototype.exitEntre = function(ctx) {

    var varNom, varMuestra;
    var l = this.idModStack.pop();

    for(var i of l){
        varMuestra = i["token"].text;
        var variable = this.alcanceActual.resolve(i["token"].text);
        varNom = this.nombreVar(varMuestra, variable);
        var promptIn =  "await entre('"+variable.tipo["nombre"]+"', 'entre ";
        var promptOut =  "');\n";
        if(i["indices"].length != 0){
            varNom += '['+i["indices"].join('][')+']';
            varMuestra += "['+("+i["indices"].join(")+', '+(")+")+']";
        }
        this.codStack.slice(-1)[0].push( this.idn+ varNom + " = "+ promptIn + varMuestra + promptOut);
    }
};

RunPhase.prototype.exitRetorne = function(ctx) {
    var expr = this.exprStack.pop().pop();
    this.codStack.slice(-1)[0].push(this.idn+"return "+expr+";\n");
}

RunPhase.prototype.exitCopieEn = function(ctx) {
    let variable, cod, oldExpr;
    let expr = this.exprStack.pop().pop();
    let l = this.idModStack.pop();
    for(let i of l){
        variable = this.alcanceActual.resolve(i["token"].text);
        oldExpr = expr;
        expr = "("+variable.nombreVar;
        if(i["indices"].length != 0){
            expr += "["+i["indices"].join("][")+"]";
        }
        expr += " = "+oldExpr+")";
        expr = "("+expr+" : "+variable["tipo"]["nombre"]+")";
    }
    cod = this.idn + expr +";\n";
    this.codStack.slice(-1)[0].push(cod);
};


exports.RunPhase = RunPhase;
