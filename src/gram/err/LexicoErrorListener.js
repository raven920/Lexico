import antlr4 from 'antlr4/index'

function LexicoErrorListener(){
    this.errors = [];
}

LexicoErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
LexicoErrorListener.prototype.constructor = LexicoErrorListener;

LexicoErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {

    var problema = {problema: "Error de sintaxis", simbolo: offendingSymbol, linea: line, columna: column};
    if(e != null){
        if(e instanceof antlr4.error.NoViableAltException){
            problema['recomendacion'] = "revise llaves y paréntesis."
        }else if(e instanceof antlr4.error.InputMismatchException){
            problema['recomendacion'] = "no se esperaba '"+offendingSymbol.text+"'"/*+" pruebe: "+ e.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames)*/;
        }else if(e instanceof antlr4.error.FailedPredicateException){
            problema['recomendacion'] = "1: Contacte al desarrollador."
        }
    }else{

        /*var expecting = recognizer.getExpectedTokens();
        var esperando = expecting.toString(recognizer.literalNames, recognizer.symbolicNames);  */

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
