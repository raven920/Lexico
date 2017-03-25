function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
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
