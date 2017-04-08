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


const clases = {
    caracter: "String",
    cantidad: "Number",
    caracteres: "String",
    cantidades: "Number"
}

function declaracion(nombre,dim,clase,constructor, noCrear){

    if(clase.toLowerCase() in clases){
        clase = clases[clase.toLowerCase()];
    }

    var codigo = "var "+nombre;

    if(dim.length != 0){
        codigo += " = new Arreglo("
        codigo += "["+dim.join(", ")+"],";
        codigo += "'"+nombre+"', "+clase+", ";
        codigo += "["+constructor.join(", ")+"],"
        codigo += noCrear
        codigo += ")";
    }else if(!noCrear){
        codigo += " = new "+clase+"("+constructor.join(", ")+")";
    }
    codigo += ";"


    return codigo;
}

exports.declaracion = declaracion
