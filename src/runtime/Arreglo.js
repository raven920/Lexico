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


import t, {reify} from 'flow-runtime';
import type {Type} from 'flow-runtime';

type NumeroNatural = number;
const NumeroNaturalType = (reify: Type<NumeroNatural>);
NumeroNaturalType.addConstraint((input: number) => {
  if (input < 0 || !isFinite(input)) {
    return 'los índices deben ser un números naturales';
  }
});

type Cantidad = number;
const CantidadType = (reify: Type<Cantidad>);
CantidadType.addConstraint((input: number) => {
  if (!isFinite(input)) {
    return input+ ' no es un número válido';
  }
});


/*
    Creación de arreglo N-dimensional por Matthew Crumley,
    obtenido de: http://stackoverflow.com/a/966938
    Modificada para incluir inicialización.
*/

function crearArreglo(longitud, ini) {

    var arr = new Array(longitud || 0),
        i = longitud;
    if(arguments.length == 2 && !ini["no_crear"]){
		for(var j = 0; j < longitud; j++){
            arr[j] = new (Function.prototype.bind.apply(ini["clase"], [ini["clase"]].concat(ini["params"])));
        }
    }
    if (arguments.length > 2) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[longitud-1 - i] = crearArreglo.apply(this, args);
    }

    return new Proxy(arr, arguments[arguments.length-1]);
}

function getTipo(clase){
    if(clase == Number){
        return t.union(t.ref(Number), Cantidad);
    }
    if(clase == String){
        return t.union(t.ref(String),t.string());
    }
    return t.ref(clase);
}


function Arreglo(arr: Array<NumeroNatural>, nombre: string, clase: Class<any>, params: Array, noCrear: boolean){
    var tipoObjeto = getTipo(clase);
    console.log("tipoobjeto: "+tipoObjeto)
    var maneja = {
        get (arr, clave: NumeroNatural) {
            if(clave >= arr.length)
                throw {message: "Indice fuera de rango "+ clave, name: "EJ"};
            return arr[clave]
        },
        //hay que revisar el tipo de dato
        set (arr, clave: NumeroNatural, valor) {
            tipoObjeto.assert(valor);
          if(clave >= arr.length)
              throw {message: "Indice fuera de rango "+ clave, name:"EJ"};
          return true
        }
    }
    return crearArreglo.apply(this, arr.concat({clase: clase, params: params, no_crear: noCrear}, maneja));
}

exports.Arreglo = Arreglo;
