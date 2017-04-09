# Lexico para Android

[![Build Status](https://travis-ci.org/raven920/Lexico.svg?branch=master)](https://travis-ci.org/raven920/Lexico) [![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://github.com/raven920/Lexico/blob/master/LICENSE)

*Lexico para Android* es la implementación de un editor e intérprete del lenguaje de programación [LEXICO] en dispositivos móviles con sistema operativo Android. Lexico significa **L**enguaje **ex**perimental **i**ntroductorio a la **c**omputación con **o**bjetos, es un lenguaje de programación didáctico en español que facilita el aprendizaje y la enseñanza de la programación. 

###  Acerca del desarrollo

En la actualidad, el proyecto está en una etapa temprana de desarrollo y está siendo activamente desarrollado. Para la primera versión se prevee tener la posibilidad de desarrollar algoritmos usando tipos de datos primitivos y estructuras de control básicas. A futuro se planea agregar el soporte de clases y diseño de interfaces gráficas.

#### Tecnologías externas

| Nombre | Descripción | Licencia |
| ------ | --------- | -------- |
| [Cordova] | Framework de desarrollo, permite escalabilidad a diferentes plataformas móviles | [Apache 2][CordovaL] |
| [ReactJS] | Diseño de interfaces gráficas de modo declarativo y basado en componentes.  | [Facebook BSD][ReactJSL]+[Patents][ReactJSLP] |
| [ OnsenUI ] | Integra ReactJS con Cordova y provee elementos de la interfaz que siguen los patrones de [Material Design](https://material.io/guidelines/) | [Apache 2][OnsenUIL] | 
| [ React-CodeMirror] | Integra el editor [CodeMirror](https://codemirror.net/) con ReactJS. | [MIT][React-CodeMirrorL] |
| [ANTLR4] | Generador de analizadores lexicograficos y sintácticos. | [BSD-new][Antlr4L] |

### Empaquetados / Ejecutables

Debido al estado actual del desarrollo no se cuenta con una versión estable. Si se considera un *[aventurero](http://i.imgur.com/kTXI282.png)*, puede probar las versiones alpha que se construyen automáticamente a partir de este código fuente. Puede descargar la versión alpha desde la pestaña [*Releases*](https://github.com/raven920/Lexico/releases/latest).

Si desea construir usted mismo el proyecto o probarlo en una computadora puede seguir las instrucciones a continuación.

##### Configuración del entorno de desarrollo

Se asume que cuenta con un entorno donde se encuentra instalado [Git](https://git-scm.com/downloads), [NodeJS con NPM](https://nodejs.org/es/download/package-manager/) y [Apache Cordova](https://cordova.apache.org/#getstarted) con las [dependencias necesarias para desarrollar para Android](https://cordova.apache.org/docs/es/latest/guide/platforms/android/index.html). En resumen, asegúrese de que puede construir un proyecto creado usando Apache Cordova.

Por facilidad, se usa [Monaca CLI](https://monaca.io/cli.html) como herramienta de desarrollo, pruebas y construcción de *Lexico para Android*. Las siguientes instrucciones han sido probadas bajo la distribución ArchLinux, sin embargo deberían funcionar de manera similar en otras distribuciones de Linux e incluso entornos Windows o Mac. Los comandos que se encuentran consignados en esta guía deben ser ejecutados en una shell (Terminal en Linux o [MinGW/MSYS](https://sourceforge.net/projects/mingw/files/Installer/) en Windows). Para instalar Monaca CLI ejecute el siguiente comando:

```sh
$ npm -g install monaca
```

El siguiente paso es descargar el código fuente de *Lexico para Android*.

```sh
$ git clone https://github.com/raven920/Lexico.git
$ cd ./Lexico
```

Se hace necesario instalar las dependencias y aplicar una serie de parches que permitirán adaptar el editor CodeMirror para ser usado en móviles, agregar las definiciones del lenguaje Lexico al editor *CodeMirror* y transpilar el código del proyecto. Para esto, se incluye entre el código fuente un script que se encarga de hacer todo esto por usted.  Para ejecutarlo use la siguiente instrucción:

```sh
$ sh ./configurar.sh
```
Este script de configuración solo ha de ser ejecutado una vez luego de descargado el código fuente. 

##### Probar el proyecto

Para probar el editor e intérprete de manera local en el navegador, debe ejecutar el siguiente comando en la shell:

```sh
$ monaca preview
```

Podrá acceder a la aplicación usando la URL http://127.0.0.1:8000 en su navegador favorito.
También es posible probar el proyecto en un emulador, smartphone o tableta usando [Monaca Debugger](https://docs.monaca.io/en/quick_start/cli/testing_debugging/).

Tenga en cuenta que esta manera de probar el proyecto tiene limitaciones como la imposibilidad de acceder al sistema de archivos de la máquina. Para probarlo en todo su esplendor, instalelo en un dispositivo Android.

##### Construir el proyecto

Si desea construir el proyecto para Android, primero se sugiere ejecutar el [transcompilador](https://onsen.io/blog/monaca-cli-transpile/) que se encarga de transformar el código del intérprete de Lexico en un código que Cordova pueda ejecutar. Normalmente esta operación debería ser llevada a cabo automáticamente por *Monaca* al construir el proyecto, pero se sugiere hacerlo de manera manual usando la siguiente instrucción:
```sh
$ monaca transpile
```

El siguiente paso es construir el instalador para Android ejecutando:
```sh
$ monaca build android
```

Una vez se construya el proyecto, encontrará el APK en la ruta:
```
Lexico/platforms/android/build/outputs/apk
```
Este APK puede ser copiado a la memoria de su teléfono para posteriormente ser [instalado](https://www.elandroidelibre.com/2016/04/como-instalar-aplicaciones-apk-android.html).


Este proyecto forma parte del trabajo de grado llevado a cabo por Christian Delany y dirigido por el Profesor de la Universidad de Antioquia Fabián Ríos C., quien ideó y ha estado a la cabeza de la implementación de Lexico desde sus orígenes en los años ochenta. Si desea colaborar o saber más del proyecto no dude en contactarnos.

El código de este proyecto está cobijado por la licencia Apache-2.0.

   [LEXICO]: <http://lexico.mobi/>
   [Cordova]: <https://cordova.apache.org/>
   [OnsenUI]: <https://onsen.io/>
   [ReactJS]: <https://facebook.github.io/react/>
   [React-CodeMirror]: <https://github.com/attaboy/react-codemirror>
   [ANTLR4]: <http://www.antlr.org/index.html>
   

   [CordovaL]: <http://www.apache.org/licenses/LICENSE-2.0>
   [OnsenUIL]: <https://github.com/OnsenUI/OnsenUI/blob/master/LICENSE>
   [ReactJSL]: <https://github.com/facebook/react/blob/master/LICENSE>
   [ReactJSLP]: <https://github.com/facebook/react/blob/master/PATENTS>
   [Antlr4L]: <http://www.antlr.org/license.html>
   [React-CodeMirrorL]: <https://github.com/attaboy/react-codemirror/blob/master/LICENSE>