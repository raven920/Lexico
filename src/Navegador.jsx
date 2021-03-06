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

import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';

import App from './App';

export default class Navegador extends React.Component {
    constructor(props){
        super(props);
    }

    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;
        if(route.component == App){
            props.key = 0
        }else{
            props.key = Math.floor(Math.random()*10000+1);
        }
        return React.createElement(route.component, props);
    }

    render() {
        return (
          <Navigator initialRoute={{component: App}} renderPage={this.renderPage} />
        );
    }
}
