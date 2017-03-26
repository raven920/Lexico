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

/*
    Creación de arreglo N-dimensional por Matthew Crumley
    obtenido de: http://stackoverflow.com/a/966938
*/
function crearArreglo(longitud) {
    var arr = new Array(longitud || 0),
        i = longitud;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[longitud-1 - i] = crearArreglo.apply(this, args);
    }

    return arr;
}

function Arreglo(arr, nombre){
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            if(arr[i] < 0){
                throw "Declaración inválida: "+nombre+"["+arr+"]";
            }
        }else{
            throw "Declaración inválida: "+nombre+"["+arr+"]";
        }
    }
    this.nombre = nombre;
    this.dim = arr.length;
    this.size = arr;
    this.array = crearArreglo.apply(this, arr);
}

Arreglo.prototype.revisarIndice = function(indice){
    if(!Array.isArray(indice)
       || indice.length != this.dim ){
        return null;
    }
    for(var i = 0; i < indice.length; i++){
        if(typeof indice[i] == "number"){
            if(indice[i] < 0 || indice[i] >= this.size[i]){
               throw "Índice fuera de rango: "+this.nombre+"["+indice+"]";
            }
        }else{
            throw "Índice inválido: "+this.nombre+"["+indice+"]";
        }
    }
}

Arreglo.prototype.get = function(indice){
    this.revisarIndice(indice);
    var element = this.array;
    for(var i of indice){
        element = element[i];
    }
    if(element == undefined){
        throw "No se ha inicializado: "+this.nombre+"["+indice+"]";
    }
    return element;
}

Arreglo.prototype.set = function(indice, objeto){
    this.revisarIndice(indice);
    var i;
    var element = this.array;
    for(i=0; i < this.dim-1; i++){
        element = element[indice[i]];
    }
    element[indice[i]] = objeto;
}

exports.Arreglo = Arreglo;
