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
import {Carousel, CarouselItem} from 'react-onsenui';
import CMEditor from './CMEditor';

export default class TabsEditor extends React.Component {
    constructor(props){

        super(props);
    }

    render() {
        return(
           <Carousel
               index={this.props.tabIndex}
               autoRefresh fullscreen autoScroll>
                  {this.props.tabs.map((item, index) => (
                    <CarouselItem key={item["actualIndex"]}>
                      <CMEditor
                          value={this.props.tabs[index]["texto"]}
                          onChange={(codigo) => this.props.onCodeChange(codigo,index)}
                          errors={this.props.tabs[index]["anotaciones"]}
                          />
                    </CarouselItem>
                  ))}

        </Carousel>
        );
    }


}


