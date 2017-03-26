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

// Generated from Lexico.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LexicoParser.
function LexicoListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LexicoListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LexicoListener.prototype.constructor = LexicoListener;

// Enter a parse tree produced by LexicoParser#prog.
LexicoListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#prog.
LexicoListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#tarea.
LexicoListener.prototype.enterTarea = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#tarea.
LexicoListener.prototype.exitTarea = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#bloque.
LexicoListener.prototype.enterBloque = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#bloque.
LexicoListener.prototype.exitBloque = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#SentDeclaracion.
LexicoListener.prototype.enterSentDeclaracion = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#SentDeclaracion.
LexicoListener.prototype.exitSentDeclaracion = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Condicional.
LexicoListener.prototype.enterCondicional = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Condicional.
LexicoListener.prototype.exitCondicional = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Variando.
LexicoListener.prototype.enterVariando = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Variando.
LexicoListener.prototype.exitVariando = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Mientras.
LexicoListener.prototype.enterMientras = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Mientras.
LexicoListener.prototype.exitMientras = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#CopieEn.
LexicoListener.prototype.enterCopieEn = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#CopieEn.
LexicoListener.prototype.exitCopieEn = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Entre.
LexicoListener.prototype.enterEntre = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Entre.
LexicoListener.prototype.exitEntre = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Muestre.
LexicoListener.prototype.enterMuestre = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Muestre.
LexicoListener.prototype.exitMuestre = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#condVariando.
LexicoListener.prototype.enterCondVariando = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#condVariando.
LexicoListener.prototype.exitCondVariando = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#exprCond.
LexicoListener.prototype.enterExprCond = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#exprCond.
LexicoListener.prototype.exitExprCond = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#exprMientras.
LexicoListener.prototype.enterExprMientras = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#exprMientras.
LexicoListener.prototype.exitExprMientras = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#SiYNoCond.
LexicoListener.prototype.enterSiYNoCond = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#SiYNoCond.
LexicoListener.prototype.exitSiYNoCond = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#SoloNoCond.
LexicoListener.prototype.enterSoloNoCond = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#SoloNoCond.
LexicoListener.prototype.exitSoloNoCond = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#siCond.
LexicoListener.prototype.enterSiCond = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#siCond.
LexicoListener.prototype.exitSiCond = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#noCond.
LexicoListener.prototype.enterNoCond = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#noCond.
LexicoListener.prototype.exitNoCond = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#llamadaFuncion.
LexicoListener.prototype.enterLlamadaFuncion = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#llamadaFuncion.
LexicoListener.prototype.exitLlamadaFuncion = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#DeclaracionUnaVar.
LexicoListener.prototype.enterDeclaracionUnaVar = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#DeclaracionUnaVar.
LexicoListener.prototype.exitDeclaracionUnaVar = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#DeclaracionVariasVar.
LexicoListener.prototype.enterDeclaracionVariasVar = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#DeclaracionVariasVar.
LexicoListener.prototype.exitDeclaracionVariasVar = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#DeclaracionArreglos.
LexicoListener.prototype.enterDeclaracionArreglos = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#DeclaracionArreglos.
LexicoListener.prototype.exitDeclaracionArreglos = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#UsoVar.
LexicoListener.prototype.enterUsoVar = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#UsoVar.
LexicoListener.prototype.exitUsoVar = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Caracteres.
LexicoListener.prototype.enterCaracteres = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Caracteres.
LexicoListener.prototype.exitCaracteres = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#UsoArreglo.
LexicoListener.prototype.enterUsoArreglo = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#UsoArreglo.
LexicoListener.prototype.exitUsoArreglo = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Entero.
LexicoListener.prototype.enterEntero = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Entero.
LexicoListener.prototype.exitEntero = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Parentesis.
LexicoListener.prototype.enterParentesis = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Parentesis.
LexicoListener.prototype.exitParentesis = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#MenosUnario.
LexicoListener.prototype.enterMenosUnario = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#MenosUnario.
LexicoListener.prototype.exitMenosUnario = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Llamada.
LexicoListener.prototype.enterLlamada = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Llamada.
LexicoListener.prototype.exitLlamada = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Igualdad.
LexicoListener.prototype.enterIgualdad = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Igualdad.
LexicoListener.prototype.exitIgualdad = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#SumaResta.
LexicoListener.prototype.enterSumaResta = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#SumaResta.
LexicoListener.prototype.exitSumaResta = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#MenorQue.
LexicoListener.prototype.enterMenorQue = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#MenorQue.
LexicoListener.prototype.exitMenorQue = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#Negacion.
LexicoListener.prototype.enterNegacion = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#Negacion.
LexicoListener.prototype.exitNegacion = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#MultDiv.
LexicoListener.prototype.enterMultDiv = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#MultDiv.
LexicoListener.prototype.exitMultDiv = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#listaExpr.
LexicoListener.prototype.enterListaExpr = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#listaExpr.
LexicoListener.prototype.exitListaExpr = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#listaIdOArr.
LexicoListener.prototype.enterListaIdOArr = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#listaIdOArr.
LexicoListener.prototype.exitListaIdOArr = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#arreglo.
LexicoListener.prototype.enterArreglo = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#arreglo.
LexicoListener.prototype.exitArreglo = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#IDFromIdOrArr.
LexicoListener.prototype.enterIDFromIdOrArr = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#IDFromIdOrArr.
LexicoListener.prototype.exitIDFromIdOrArr = function(ctx) {
};


// Enter a parse tree produced by LexicoParser#ArrFromIdOrArr.
LexicoListener.prototype.enterArrFromIdOrArr = function(ctx) {
};

// Exit a parse tree produced by LexicoParser#ArrFromIdOrArr.
LexicoListener.prototype.exitArrFromIdOrArr = function(ctx) {
};



exports.LexicoListener = LexicoListener;
