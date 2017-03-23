
import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, Row, Col, ToolbarButton, Icon} from 'react-onsenui';
import {notification} from 'onsenui';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/lexico';
import 'brace/theme/xcode';
var InterpreteLexico = require('gram/InterpreteLexico.js').InterpreteLexico;

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {codigo: 'tarea {\n    el objeto x es un caracter\n    copie 2 en x\n    muestre x\n}',
                  errores: [], marcadores: []};
  }

  handleCodigoChange(e) {
    this.setState({codigo: e});
  }

  mostrarErrores(errors){
      var erroresLineaEd = [];
      var erroresResaltadoEd = [];
      for(var err of errors){
          erroresLineaEd.push(
              {row: err['linea']-1,
               column: err['columna'],
               type:'error',
               text: err['recomendacion']});
          erroresResaltadoEd.push(
              {startRow: err['simbolo'].line-1,
               startCol: err['simbolo'].column,
               endRow: err['simbolo'].line-1,
               endCol: err['simbolo'].column+err['simbolo'].text.length,
               className: 'ace_highlight-marker', type: 'text' });
      }
      this.setState({errores: erroresLineaEd, marcadores: erroresResaltadoEd});
  }

  ejecutar() {
      var interprete = new InterpreteLexico();
      interprete.construirAnalizador(this.state.codigo);
      if(   !interprete.analizarSintaxis()
         || !interprete.analizarSemantica()
         //|| !interprete.transformar()
        ){
          this.mostrarErrores(interprete.errors);
          return;
      }
      this.setState({errores: [], marcadores: []});
  }

  renderToolbar() {

    return (
      <Toolbar>
        <div className='center'>Léxico</div>
        <div className='right'>
            <ToolbarButton onClick={this.ejecutar.bind(this)}>
                Correr <Icon icon='ion-play, material:md-play'></Icon>
            </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  render() {
    return (

        <Page  renderToolbar={this.renderToolbar.bind(this)}>
            <div height="100vh">
                <AceEditor
                    mode="lexico"
                    theme="xcode"
                    width="100%"
                    height="85vh"
                    fontSize="0.9em"
                    onChange={this.handleCodigoChange.bind(this)}
                    name="UNIQUE_ID_OF_DIV"
                    wrapEnabled={true}
                    annotations={this.state.errores}
                    markers={this.state.marcadores}
                    value={this.state.codigo}
                  />
            </div>
        </Page>

    );
  }
}
