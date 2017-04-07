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

function Archivo(ruta){
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
    }).then(()=>{
        return new Promise(
            (exito, falla) => this.archivo.createWriter(exito,falla));
    }).then((escritor)=>{
        return new Promise(exito=>{
            exito(new Escritor(escritor));
        });
    });
}

function Escritor(escritor){
    this.escritor = null
    if(escritor != undefined){
        this.escritor = escritor
    }
}

Escritor.prototype.escriba = function(texto){
    if(this.escritor != null){
        this.escritor.write(" "+texto); //Por alguna razón se está comiendo un caracter
    }else{
        throw "El escritor no está asociado a un archivo"
    }
}


exports.Escritor = Escritor;
exports.Archivo = Archivo;