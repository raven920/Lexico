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
import {Carousel, CarouselItem, Popover} from 'react-onsenui';
import CodeMirror from 'react-codemirror';
var HashTable = require('./util/HashTable.js').HashTable;

require('codemirror/lib/codemirror.css');
require('codemirror/mode/lexico/lexico');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/matchbrackets');

/*require('codemirror/mode/javascript/javascript');
require('./jshint');
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/javascript-lint')
require('codemirror/addon/lint/lint.css');*/

export default class TabsEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {isOpen: false,
                     textoError: "Temporal"};
        this.target = null;
        this.errorPorComponente = new HashTable();
    }

    componentDidMount() {
        const cm = this.cmEditor.getCodeMirror();
        // set width & height
        cm.setSize("100%", "90vh");
        cm.on("gutterClick", (cm, n) => {
            var info = cm.lineInfo(n);
            if(info.gutterMarkers){
                this.target = info.gutterMarkers["CodeMirror-linenumbers"];
                this.setState({textoError: this.errorPorComponente.get(this.target), isOpen: true});
            }
        });
    }
    componentWillReceiveProps(nextProps){
        const cm = this.cmEditor.getCodeMirror();
        if(nextProps.errors != this.props.errors){
            var errComps = new HashTable();
            cm.clearGutter("CodeMirror-linenumbers");
            var marker = null;
            for(var e of nextProps.errors){
                marker = this.makeMarker();
                cm.setGutterMarker(e["row"], "CodeMirror-linenumbers", marker);
                errComps.put(marker, e["text"]);
            }

            this.errorPorComponente = errComps;
        }
    }

    makeMarker() {
      var marker = document.createElement("div");
      marker.innerHTML = "☒";
      marker.style.fontWeight = "bold";
      marker.style.textAlign = "right";
      marker.style.color = "red";
      return marker;
    }

    getTarget(){
        return this.target;
    }

    showPop(){
        this.setState({isOpen: true});
    }

    hidePop(){
        this.setState({isOpen: false});
    }

    render() {

        return(
              <div height="100vh">
                <CodeMirror
                    ref={(editor) => {this.cmEditor = editor}}
                    style={{height: "100vh", width: "100%"}}
                    value={this.props.value}
                    onChange={this.props.onChange}

                    options={{
                        mode: 'lexico',
                        lineNumbers: true,
                        dragDrop: false,
                        autoCloseBrackets: true,
                        matchBrackets: true,
                        lint: true,
                        lineWrapping:true,
                        gutters: ["CodeMirror-linenumbers"]}} />
                <Popover
                  isOpen={this.state.isOpen}
                  onOpen={this.showPop.bind(this)}
                  onHide={this.hidePop.bind(this)}
                  onCancel={this.hidePop.bind(this)}
                  isCancelable={true}
                  getTarget={this.getTarget.bind(this)}
                >
                  <section style={{margin: '16px'}}>
                    <p style={{opacity: 0.6}}>
                      {this.state.textoError}
                    </p>
                  </section>
            </Popover>
              </div>


        );
    }


}


