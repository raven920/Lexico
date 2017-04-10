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

import antlr4 from 'antlr4/index'

function LexicoErrorListener(){
    this.errors = [];
}

LexicoErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
LexicoErrorListener.prototype.constructor = LexicoErrorListener;

LexicoErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    var tipoProblema = "SI"
    if(offendingSymbol == null){
        offendingSymbol = {text: msg.substr(msg.indexOf("'")+1, 1), line: line, column: column};
        tipoProblema="LE";
    }
    var problema = {problema: tipoProblema, simbolo: offendingSymbol, linea: line, columna: column};
    if(e != null){
        if(e instanceof antlr4.error.NoViableAltException){
            problema['recomendacion'] = "revise llaves y paréntesis."
        }else if(e instanceof antlr4.error.InputMismatchException
                || e instanceof antlr4.error.LexerNoViableAltException){
            problema['recomendacion'] = "no se esperaba <"+offendingSymbol.text+">"/*+" pruebe: "+ e.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames)*/;
        }else if(e instanceof antlr4.error.FailedPredicateException){
            problema['recomendacion'] = "1: Contacte al desarrollador."
        }
    }else{

        var expecting = recognizer.getExpectedTokens();
        var esperando = expecting.toString(recognizer.literalNames, recognizer.symbolicNames);

        if(msg.includes("extraneous input")){
            problema['recomendacion'] = "no se esperaba '"+offendingSymbol.text +"'"/*+" pruebe: "+esperando*/;
        }else if(msg.includes("missing")){
            problema['recomendacion'] = "se esperaba '"+esperando+ "' antes de '"+offendingSymbol.text+"'";
        }else{
            problema['recomendacion'] = "2: Contacte al desarrollador."
        }
    }

    this.errors.push(problema);
};

exports.LexicoErrorListener = LexicoErrorListener;
