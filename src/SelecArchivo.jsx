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
import {platform,notification} from 'onsenui';
import {Icon, List, ListItem, Col, Row, Toolbar, Page, Button, BackButton, Input} from 'react-onsenui';

export default class SelecArchivo extends React.Component {

    constructor(props){
        super(props);
        this.state = {ficheros: ["Cargando..."],
                      nomFich: "",
                     };
        this.updateFileList();
    }

    handleNomFichChange(e){
        this.setState({nomFich: e.target.value});
    }

  revisarValidez() {
    var nom = this.state.nomFich.trim();
    if(nom == ""){
        notification.alert({title: "Error", message: "No se ha seleccionado o ingresado ningun nombre de archivo."})
        return;
    }
    if(this.props.leerFichero){
        this.leerFichero();
    }else{
        if(!nom.endsWith(".lx")){
            nom += ".lx";
        }
        if(this.state.ficheros.includes(nom)){
            notification.confirm({
            message: '¿Desea sobreescribir '+nom+'?',
            callback: (answer) =>{
                if(answer == 1){
                    this.props.onFileSelected(nom);
                    this.props.navigator.popPage();
                }}});
        }else{
            this.props.onFileSelected(nom);
            this.props.navigator.popPage();
        }

    }
  }

  ejem(fich){
      notification.alert(fich);
  }

  leerFichero(){
      window.resolveLocalFileSystemURL(
      cordova.file.externalRootDirectory+"Léxico",
      (fileSystem) => { //exito
          fileSystem.getFile(
              this.state.nomFich,
              {create:false},
              (entradaArchivo) =>{
                 entradaArchivo.file(
                     (archivo) =>{
                         var lector = new FileReader();
                         var contexto = this;
                         lector.onloadend = function() {
                             contexto.props.onFileRead(this.result, archivo.name);
                             contexto.props.navigator.popPage();
                          };
                          lector.readAsText(archivo);
                     });
              },
              (err2) =>{
                  console.log("no se leyó 2");
              }

          );
       },
       (err1)=>{ //no existe el directorio
         console.log("no se leyo 1");
       });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left"><BackButton>Regresar</BackButton></div>
        <div className="center">Seleccione...</div>
      </Toolbar>
    );
  }

  updateFileList(){
    window.resolveLocalFileSystemURL(
      cordova.file.externalRootDirectory,
      (fileSystem) => { //exito
        var dataDir = fileSystem.getDirectory("Léxico",
          {create: true, exclusive: false},
          (dir) => {
            var reader = dir.createReader();
            reader.readEntries(
              (entrs) =>{
                  var lista = []
                  for (var entrada of entrs) {
                    if(entrada.isFile){lista.push(entrada.name);}
                  }
                  if(lista.length == 0){
                      lista.push("Directorio vacío");
                  }
                  this.setState({ficheros: lista});
              },
              (err3)=>console.log("Error leyendo entradas del directorio"));
          },
          (err2) =>console.log("Error creando el directorio"));
       },
       (err1)=>console.log("Error leyendo el sistema de archivos externo"));
    }

    actualizarFichero(elem){
        if("Directorio vacío" != elem){
            this.setState({nomFich: elem})
        }
    }

    renderRow(elem, indice){
        return(
            <ListItem key={indice} onClick={() => this.actualizarFichero(elem)} material tappable>
                <div className="left"><Icon icon="md-file-text" /></div><div className="center">{elem}</div>
            </ListItem>
        );
    }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar} renderFixed={this.fixed}>
            <Row style={{ height: "91%"}}>
                <List style={{overflow: 'scroll', height: "auto", width: "100%" }}
                    dataSource={this.state.ficheros}
                    renderRow={this.renderRow.bind(this)}
                />
            </Row>
            <Row verticalAlign="bottom" >
                <Col width="70%" horizontalAlign="bottom">
                    <Input
                        style={{width: "90%"}}
                        modifier="underbar"
                        value={this.state.nomFich}
                        disabled={this.props.leerFichero}
                        onChange={this.handleNomFichChange.bind(this)}
                        float placeholder='Fichero' />
                </Col>
                <Col width="28%">
                    <Button  modifier='large' onClick={this.revisarValidez.bind(this)}>Aceptar</Button>
                </Col>
            </Row>
      </Page>
    );
  }
}
