import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, Row, Col, ToolbarButton, Icon} from 'react-onsenui';
import {notification} from 'onsenui';
import antlr4 from 'antlr4/index'

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/lexico';
import 'brace/theme/xcode';


var LexicoLexer = require('gram/LexicoLexer.js');
var LexicoParser = require('gram/LexicoParser.js');
var LexicoListener = require('gram/LexicoListener.js');

var DefPhase = require('gram/walkers/DefPhase.js').DefPhase;
var RefPhase = require('gram/walkers/RefPhase.js').RefPhase;
var RunPhase = require('gram/walkers/RunPhase.js').RunPhase;



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {codigo: 'tarea {\n    el objeto x es un caracter\n    copie 2 en x\n    muestre x\n}'};
  }

  handleCodigoChange(e) {
    this.setState({codigo: e});
  }

  alertPopup() {

      var chars = new antlr4.InputStream(this.state.codigo);
      var lexer = new LexicoLexer.LexicoLexer(chars);
      var tokens  = new antlr4.CommonTokenStream(lexer);
      var parser = new LexicoParser.LexicoParser(tokens);
      parser.buildParseTrees = true;
      var tree = parser.prog();
      var def = new DefPhase();
      var run = new RunPhase();
      //var printer = new LexicoListener.LexicoListener();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(def, tree);


      var ref = new RefPhase(def.globals, def.scopes);
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(ref, tree);

      if(ref.errors.length != 0){
          notification.alert(ref.errors[0]);
      }else{
          /*antlr4.tree.ParseTreeWalker.DEFAULT.walk(run, tree);
          console.log(run.codigo);*/
//          eval(run.codigo.join(""));
      }
      //alert(yo.state.codigo);
      //alert(printer.texto);
      /*window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, gotFile, fail);
      function fail(e) {
        console.log("FileSystem Error");
        console.dir(e);
      };

        function gotFile(dir) {

            dir.getFile("jscode.log", {create:true}, function(file) {
                var logOb = file;
                var log = " "+printer.texto;
                logOb.createWriter(function(fileWriter) {
                    fileWriter.seek(fileWriter.length);
                    var blob = new Blob([log], {type:'text/plain'});
                    fileWriter.write(blob);
                }, function(e){alert(e);});
            });

      };*/
    //notification.alert('This is an Onsen UI alert notification test.'+tree.toStringTree(parser));
  }

  renderToolbar() {

    return (
      <Toolbar>
        <div className='center'>Léxico</div>
        <div className='right'>
            <ToolbarButton onClick={this.alertPopup.bind(this)}>
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
                    value={this.state.codigo}
                  />
            </div>
        </Page>

    );
  }
}
