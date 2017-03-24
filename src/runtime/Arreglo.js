function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function Arreglo(arr){
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            if(arr[i] < 0){
                throw "Indices del arreglo menores que cero.";
            }
        }else{
            throw "Indice del arreglo no es un entero";
        }
    }
    this.dim = arr.length;
    this.size = arr;
    this.array = createArray.apply(this, arr);
}

Arreglo.prototype.revisarIndice = function(indice){
    if(!Array.isArray(indice)
       || indice.length != this.dim ){
        return null;
    }
    for(var i = 0; i < indice.length; i++){
        if(typeof indice[i] == "number"){
            if(indice[i] < 0 || indice[i] >= this.size[i]){
               throw "Indice del arreglo fuera de rango"
            }
        }else{
            throw "Indice del arreglo no es un entero";
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
        throw "Elemento del arreglo no existe";
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
