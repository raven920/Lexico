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
import "babel-polyfill";
import {
    platform,
    notification
} from 'onsenui';
import {
    Page,
    Splitter,
    SplitterSide,
    SplitterContent,
    ListItem,
    List,
    Icon,
    Toolbar,
    ToolbarButton
} from 'react-onsenui';
import TabsEditor from './TabsEditor';
import SelecArchivo from './SelecArchivo';
import Archivo from './runtime/archivos.js';
var InterpreteLexico = require('gram/InterpreteLexico.js').InterpreteLexico;
var Babel = require('babel-standalone');

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuAbierto: false,
            tabs: [{
                nombre: "Sin nombre",
                actualIndex: 0,
                texto: "",
                salvado: false,
                anotaciones: [],
                marcadores: []
            }],
            tabIndex: 0,
            actualIndex: 1
        };
    }

    cargarArchivo() {
        if (!platform.isAndroid()) {
            notification.alert({
                message: "Lo sentimos, no se soporta almacenaje en esta plataforma.",
                title: "Error"
            })
            return;
        }

        var t = this.state.tabs.slice();
        if ("Sin nombre" != t[this.state.tabIndex]["nombre"].trim() || "" != t[this.state.tabIndex]["texto"].trim()) {
            this.nuevaPestaña();
        } else {
            this.setState({
                menuAbierto: false
            });
        }

        this.props.navigator.pushPage({
            component: SelecArchivo,
            props: {
                leerFichero: true,
                onFileRead: this.onFileRead.bind(this)
            }
        });
    }


    guardarComo() {
        this.setState({
            menuAbierto: false
        });
        this.props.navigator.pushPage({
            component: SelecArchivo,
            props: {
                leerFichero: false,
                onFileSelected: this.onFileSelected.bind(this)
            }
        });
    }

    onFileSelected(nombre) {
        var t = this.state.tabs.slice();
        t[this.state.tabIndex]["nombre"] = nombre;
        this.guardarArchivo(t, this.state.tabIndex);
    }

    guardarArchivo(t, indice) {
        window.resolveLocalFileSystemURL(
            cordova.file.externalRootDirectory + "Lexico",
            (dir) =>
            dir.getFile(
                t[indice]["nombre"], {
                    create: true,
                    exclusive: false
                },
                (file) =>
                file.createWriter(
                    (fileWriter) => {
                        fileWriter.write(t[indice]["texto"])
                        fileWriter.onwriteend = (evt) => this.propagarCambios(t, indice);

                    },
                    (e) => console.log(e))),
            (e) => console.log(e));
    }

    propagarCambios(t, indice) {
        var nombre = t[indice]["nombre"];
        for (var i = 0; i < t.length; i++) {
            if (nombre == t[i]["nombre"]) {
                t[i]["texto"] = t[indice]["texto"];
                t[i]["salvado"] = true;
            }
        }
        this.setState({
            tabs: t
        });
    }


    guardarArchivoHandler() {
        var indice = this.state.tabIndex;
        var t;
        if (this.state.tabs[indice]["salvado"]) {
            return;
        }
        if ("Sin nombre" == this.state.tabs[indice]["nombre"]) {
            this.guardarComo();
            return;
        }
        t = this.state.tabs.slice();
        this.guardarArchivo(t, indice);
        this.setState({
            menuAbierto: false
        });
    }

    nuevaPestaña() {
        var t = this.state.tabs.slice();
        t.splice(this.state.tabIndex, 0, {
            nombre: "Sin nombre",
            texto: "",
            salvado: false,
            actualIndex: this.state.actualIndex,
            anotaciones: [],
            marcadores: []
        });
        this.setState({
            tabs: t,
            actualIndex: this.state.actualIndex + 1,
            menuAbierto: false
        });
        return t;
    }

    onFileRead(texto, nombre) {
        var t = this.state.tabs.slice();
        t[this.state.tabIndex]["texto"] = texto;
        t[this.state.tabIndex]["nombre"] = nombre;
        t[this.state.tabIndex]["salvado"] = true;
        this.setState({
            tabs: t
        });
    }

    cerrarTab(indice) {
        var indAct = this.state.tabIndex;
        if (indice < indAct) {
            indAct--;
        }

        var t = this.state.tabs.slice();
        if (t.length == 1) {
            t = this.nuevaPestaña();
            t.splice(1, 1);
        } else {
            t.splice(indice, 1);
        }
        this.setState({
            tabs: t,
            tabIndex: indAct,
            menuAbierto: false
        });
    }

    cambiarPestaña(indice) {
        this.setState({
            tabIndex: indice,
            menuAbierto: false
        });

    }

    mostrarMenu() {
        this.setState({
            menuAbierto: true
        });
    }

    ejecutar() {
        var interprete = new InterpreteLexico();
        interprete.construirAnalizador(this.state.tabs[this.state.tabIndex]["texto"]);
        if (!interprete.analizarSintaxis()
            || !interprete.analizarSemantica()
            || !interprete.transformar()
            || !interprete.ejecutar()
        ) {
            this.mostrarErrores(interprete.errors);
        }
    }

    mostrarErrores(errors) {
        var t = this.state.tabs.slice();
        var indice = this.state.tabIndex;
        var erroresLineaEd = [];
        var erroresResaltadoEd = [];
        for (var err of errors) {
            if (err['problema'] == "EJ") {
                notification.alert({
                    title: "Error de ejecución",
                    message: err['recomendacion']
                });
            } else {
                erroresResaltadoEd.push({
                    startRow: err['simbolo'].line - 1,
                    startCol: err['simbolo'].column,
                    endRow: err['simbolo'].line - 1,
                    endCol: err['simbolo'].column + err['simbolo'].text.length,
                    className: 'ace_highlight-marker',
                    type: 'text'
                });
            }
            erroresLineaEd.push({
                row: err['linea'] - 1,
                column: err['columna'],
                type: 'error',
                text: err['problema'] + ": " + err['recomendacion']
            });

        }
        t[indice]["anotaciones"] = erroresLineaEd;
        t[indice]["marcadores"] = erroresResaltadoEd;
        this.setState({
            tabs: t
        });
    }
    onCodeChange(codigo, indice) {
        var t = this.state.tabs.slice();
        t[indice]["texto"] = codigo;
        t[indice]["salvado"] = false;
        this.setState({
            tabs: t
        });
    }


    renderToolbar() {
        return (
          <Toolbar>
            <div className='left'>
              <ToolbarButton onClick={() => this.mostrarMenu()}>
                <Icon icon='ion-navicon, material:md-menu' />
              </ToolbarButton>
            </div>
            <div className='center'>{this.state.tabs[this.state.tabIndex]["nombre"]}</div>
            <div className='right'>
                <ToolbarButton onClick={this.ejecutar.bind(this)} >
                    Correr <Icon icon='ion-play, material:md-play'></Icon>
                </ToolbarButton>
            </div>
          </Toolbar>
        );
    }


    renderMenuItem(item, indice){
        var icono = item["salvado"] ? "md-check-circle" : "md-alert-polygon";
        return(
            <ListItem key={item["actualIndex"]} material nodivider tappable>
                <div className="left" onClick={()=> this.cambiarPestaña(indice)}>
                    <Icon icon={icono} />
                </div>
                <div className="center" onClick={()=> this.cambiarPestaña(indice)}>
                    {item["nombre"]}
                </div>
                <div className="right" onClick={()=> this.cerrarTab(indice)}>
                    <Icon icon='md-close' />
                </div>
            </ListItem>
         );
    }

    renderAndroidMenu(){
        return( [
            <ListItem material nodivider onClick={this.cargarArchivo.bind(this)}>
                <div className="left">
                    <Icon icon='md-folder' />
                </div>
                <div className="center">
                    Abrir
                </div>
            </ListItem>,
            <ListItem material nodivider onClick={this.guardarArchivoHandler.bind(this)}>
                <div className="left">
                    <Icon icon='md-floppy' />
                </div>
                <div className="center">
                    Guardar
                </div>
            </ListItem>,
            <ListItem material nodivider onClick={this.guardarComo.bind(this)}>
                <div className="left">
                    <Icon icon='md-card-sd' />
                </div>
                <div className="center">
                    Guardar Como
                </div>
            </ListItem>]);
    }

    preferencias(){
    }



    render() {
        return (
            <Page>
                <Splitter>
                    <SplitterSide
                      style={{
                          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                      }}
                      side='left'
                      width={ platform.isAndroid() ? "85%" :"300px"}
                      collapse={true}
                      isOpen={this.state.menuAbierto}
                      onClose={()=>this.setState({menuAbierto: false})}
                      onOpen={()=>this.setState({menuAbierto: true})}
                      isSwipeable>
                      <Page>
                        <div style={{textAlign: 'center', margin: "1em"}}>
                            <img style={{width: '50%'}} src="imagenes/logo/xxxhdpi.png"  />
                            <p>LEXICO</p>
                        </div>
                        <hr/>
                        <List noborder>
                            <ListItem material nodivider onClick={this.nuevaPestaña.bind(this)}>
                                <div className="left">
                                    <Icon icon='md-plus' />
                                </div>
                                <div className="center">
                                    Nuevo
                                </div>
                            </ListItem>
                            {platform.isAndroid() && this.renderAndroidMenu()}
                            <ListItem material nodivider onClick={this.preferencias.bind(this)}>
                                <div className="left">
                                    <Icon icon='md-settings' />
                                </div>
                                <div className="center">
                                    Preferencias
                                </div>
                            </ListItem>
                        </List>
                          <hr/>
                        <List
                          noborder
                          dataSource={this.state.tabs}
                          renderRow={(item, indice) => this.renderMenuItem(item, indice)}
                        />
                      </Page>
                    </SplitterSide>
                    <SplitterContent>
                        <Page renderToolbar={this.renderToolbar.bind(this)}>
                              <TabsEditor
                              onCodeChange={this.onCodeChange.bind(this)}
                              tabs={this.state.tabs}
                              cerrarHandler={(indice) => this.cerrarTab(indice)}
                              tabIndex={this.state.tabIndex}
                              cambiarTabIndex={(indice) => {this.cambiarPestaña(indice)}}
                              />
                        </Page>
                    </SplitterContent>
                </Splitter>
            </Page>
        );
    }
}
