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

function Archivo(ruta){
    if(!platform.isAndroid()){
        throw {message: "No se soporta uso de archivos", name: "EJ"};
    }
    this.ruta = ruta
    this.archivo = null;
}

Archivo.prototype.abraArchivo = function(){
    return new Promise(
        (exito, falla) =>
            window.resolveLocalFileSystemURL(
                cordova.file.externalRootDirectory,
                exito, falla)
    ).then(dir =>
        new Promise(
            (exito, falla) =>
            dir.getFile(this.ruta,
                        {create: true,exclusive: false},
                        exito, falla
            ))
    ).then(arch =>{
        this.archivo = arch;
        return new Promise(b=>b());
    });
}

Archivo.prototype.demeEscritor = function(){
    return new Promise(r =>{
        if(this.archivo == null){
            return this.abraArchivo().then(()=>r());
        }
        r();
        return new Promise(c=>c());
    }).then(()=>
        new Promise(
            (exito, falla) => this.archivo.createWriter(exito,falla))
    ).then((escritor)=>new Promise(
        exito => {
            exito(new Escritor(escritor));
        }));
}

Archivo.prototype.demeLector = function(){
    return new Promise(r =>{
        if(this.archivo == null){
            return this.abraArchivo().then(()=>r());
        }
        r();
        return new Promise(c=>c());
    }).then(()=>new Promise(
            (exito,falla) => this.archivo.file(exito,falla))
    ).then((archivoObj) =>
        new Promise( (exito,falla) =>{
            var lector = new FileReader();
            lector.onloadend = function(){
                exito(new Lector(this.result))
            }
            lector.readAsText(archivoObj);
            }));
}

function Escritor(escritor){
    if(!escritor || escritor.constructor.name != "FileWriter")
        throw {message: "Instancie escritor usando la clase Archivo.", name: "EJ"};
    this.escritor = escritor;

}

Escritor.prototype.escriba = function(texto){
    this.escritor.write(" "+texto); //Por alguna razón se está comiendo un caracter
}

function Lector(texto: string){

    this.texto = null;
    this.lineas = null;
    if(texto != undefined){
        this.texto = texto;
        this.lineas = texto.split("\n");
    }
}

Lector.prototype.leaTodo = function(){
    if(this.texto == null){
        throw "El escritor no está asociado a un archivo"
    }
    return this.texto;
}

Lector.prototype.leaLinea = function(){
    if(this.lineas != null){
        return this.lineas.shift() || null;
    }
}

exports.Lector = Lector;
exports.Escritor = Escritor;
exports.Archivo = Archivo;
