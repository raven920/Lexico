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

import {notification} from 'onsenui';

function Stdio(){}

Stdio.muestre = function(texto, titulo){
    return new Promise(r =>
                       notification.alert({
                            title: titulo||"Muestre...",
                            message: texto,
                            callback: r}));
}

Stdio.entre = function(texto, titulo){
    console.log(titulo||"LEXICO");
    return new Promise(r =>
                       notification.prompt({
                            title: titulo||"Entre...",
                            message: texto,
                            callback: r}));
}

exports.Stdio = Stdio;
