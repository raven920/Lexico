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

import {
    platform
} from 'onsenui';

import antlr4 from 'antlr4/index';

var LexicoLexer = require('./LexicoLexer.js').LexicoLexer;
var LexicoParser = require('./LexicoParser.js').LexicoParser;
var LexicoErrorListener = require('./err/LexicoErrorListener.js').LexicoErrorListener;

var InclPhase = require('./walkers/InclPhase.js').InclPhase;
var DefPhase = require('./walkers/DefPhase.js').DefPhase;
var RefPhase = require('./walkers/RefPhase.js').RefPhase;
var RunPhase = require('./walkers/RunPhase.js').RunPhase;
var archivos = require('../runtime/archivos.js');
var Archivo = archivos.Archivo;
var Lector = archivos.Lector;

var herramientas = require('runtime/herramientas.js');
var Babel = require('babel-standalone');
import t from 'flow-runtime';
import ft from 'babel-plugin-flow-runtime';
Babel.registerPlugin('flow-runtime', ft);

function InterpreteLexico(codigo){
    this.codigo = codigo;
    this.errorListener = null;
    this.errors = null;

    this.lexer = null;
    this.tokens = null;
    this.parser = null;
    this.tree = null;

    this.def = null;
    this.ref = null;



    this.run = null;
}

InterpreteLexico.prototype.construirAnalizador = function(codigo){
    this.lexer = new LexicoLexer(new antlr4.InputStream(codigo));
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new LexicoParser(this.tokens);
}

InterpreteLexico.prototype.analizarSintaxis = function(){
    this.errorListener = new LexicoErrorListener();
    this.parser.removeErrorListeners();
    this.lexer.removeErrorListeners();
    this.lexer.addErrorListener(this.errorListener);
    this.parser.addErrorListener(this.errorListener);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.prog();
    this.errors = this.errorListener.errors;
}

InterpreteLexico.prototype.analizarIncluya = async function(codigoPorAnalizar){
    var nomArch, archivoAbrir, lector, incl, porIncluir = [], incluidos = [];
    var codigoRes = "";

    do{
        if(porIncluir.length > 0){
            nomArch = porIncluir.pop();
            console.log("se incluirá: "+nomArch)
            if(incluidos.indexOf(nomArch) != -1) continue;
            archivoAbrir = new Archivo("Lexico/"+nomArch);
            lector = await archivoAbrir.demeLector();
            console.log("se entrará al procesar");
            codigoPorAnalizar = this.procesarIncluya(lector.leaTodo(),nomArch);

            incluidos.push(nomArch);
        }

        this.construirAnalizador(codigoPorAnalizar);
        this.analizarSintaxis();
        if(this.errors == null || this.errors.length != 0){
            throw "error";
        }
        incl = new InclPhase();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(incl, this.tree);

        if(incl.incluya.length > 0){
            codigoPorAnalizar = codigoPorAnalizar.split(/incluya(\s|\t|\r|\n)*".*"/).join("");
            //Reemplazar cuando se soporte importar bibliotecas JS
            //codigoPorAnalizar.split(/incluya(\s|\t|\r|\n)*".*\.lx"/).join("");
            // No analizaremos incluya si no es android, lo siento :c
            if(!platform.isAndroid())
                return codigoPorAnalizar;
            porIncluir.push(...incl.incluya);
        }
        codigoRes = codigoPorAnalizar + codigoRes;
    }while(porIncluir.length > 0);
    return codigoRes;
}

InterpreteLexico.prototype.analizar = async function(){
    try{
        this.codigo = await this.analizarIncluya(this.codigo);
    }catch(e){
        return false;
    }

    console.log(this.codigo);

    this.construirAnalizador(this.codigo);
    this.analizarSintaxis();
    if(this.errors == null || this.errors.length != 0){
        return false;
    }

    this.def = new DefPhase();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.def, this.tree);

    if(this.def.errors.length != 0){
        this.errors = this.def.errors;
        return false;
    }

    this.ref = new RefPhase(this.def.globales, this.def.alcances);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.ref, this.tree);


    this.errors = this.ref.errors;


    return this.errors.length == 0;
}

InterpreteLexico.prototype.procesarIncluya = function(texto, nomArchivo){
    console.log("entrando procesar "+nomArchivo);
    var resultado, hayClase;
    var spl1 = texto.split("tarea");

    if(spl1.length > 2)
        throw "Muchas tareas en un archivo: "+nomArchivo;
    else if(spl1.length == 1)
        return texto;
    resultado = spl1[0];
    hayClase = spl1[1].indexOf("clase");
    if(hayClase != -1){
        resultado += spl[1].substr(hayClase);
    }
    console.log("saliendo procesar incluya");
    return resultado;
}

InterpreteLexico.prototype.transformar = function(){
    if(this.errors == null || this.errors.length != 0){
        return false;
    }
    this.run = new RunPhase(this.def.globales, this.def.alcances);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.run, this.tree);

    this.errors = this.run.errors;
    return this.errors.length == 0;
}

/*
    La ejecución ha sido un dolor de cabeza para el desarrollador
    ya que el jsx está en un alcance "use strict".
    Por favor no lo culpe por este horrendo hack, si tiene una
    manera más saludable de ejecutar el código, por favor
    haga un pull request.

    Si desea saber como funciona:
    http://stackoverflow.com/questions/19357978/indirect-eval-call-in-strict-mode
*/

InterpreteLexico.prototype.ejecutar = function(onError){
    if(this.errors == null || this.errors.length != 0){
        return false;
    }

    console.log(this.run.codigo);
    var codigo = Babel.transform(this.run.codigo, { presets: ["stage-2", "react"], plugins: [
        "transform-decorators-legacy",
        ["flow-runtime", {assert: true, annotate: true }]
    ]}).code;
    codigo = codigo.split("import t from 'flow-runtime';").join("");
    console.log(codigo);

    //Magia negra!!
    var cargarEnMemoria = new Function(
      't',
      "return function(){"+codigo+"}"
      )(t);
      cargarEnMemoria();
    var ejecute = async ()=>{
        try{
            this.errors = [];
            await window.programa(herramientas); //Pasar todo lo que se necesite por aquí.
        }catch(err){
            console.error(err);
            this.errors =[{
                problema: "EJ",
                simbolo: null,
                linea: 1,
                columna: 0,
                recomendacion: err.message
            }];
        }finally{
            onError(this.errors);
        }
    }
    ejecute();
}

exports.InterpreteLexico = InterpreteLexico;
