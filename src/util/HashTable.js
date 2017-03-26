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
    Clase HashTable creada por por Ilya_Gazman
    Se puede encontrar en: http://stackoverflow.com/a/10908885
*/

function HashTable(){
    var hash = new Object();
    this.put = function(key, value){
        if(typeof key === "string"){
            hash[key] = value;
        }
        else{
            if(key._hashtableUniqueId == undefined){
                key._hashtableUniqueId = UniqueId.prototype.generateId();
            }
            hash[key._hashtableUniqueId] = value;
        }

    };

    this.get = function(key){
        if(typeof key === "string"){
            return hash[key];
        }
        if(key._hashtableUniqueId == undefined){
            return undefined;
        }
        return hash[key._hashtableUniqueId];
    };
}

function UniqueId(){

}

UniqueId.prototype._id = 0;
UniqueId.prototype.generateId = function(){
    return (++UniqueId.prototype._id).toString();
};

exports.HashTable = HashTable;
