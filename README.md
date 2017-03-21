#   Léxico para Android

*Léxico para Android* es la implementación de un intérprete del lenguaje de programación [Léxico] en dispositivos móviles con sistema operativo Android. Léxico es un lenguaje de programación didáctico en español que facilita el aprendizaje y la enseñanza de la programación. 

Este proyecto forma parte del trabajo de grado llevado a cabo por Christian Delany y dirigido por el Profesor de la Universidad de Antioquia Fabián Ríos C., quien ideó y estuvo en cabeza de la implementación de Léxico desde sus orígenes en los años ochenta.

###  Acerca del desarrollo

En la actualidad, el proyecto está en una etapa temprana de desarrollo y está siendo activamente desarrollado. Para la primera versión se prevee tener la posibilidad de desarrollar algoritmos usando tipos de datos primitivos y estructuras de control básicas. A futuro se planea agregar el soporte de clases y diseño de interfaces gráficas.

#### Tecnologías externas

| Nombre | Descripción | Licencia |
| ------ | --------- | -------- |
| [Cordova] | Framework de desarrollo, permite escalabilidad a diferentes plataformas móviles | [Apache 2][CordovaL] |
| [ReactJS] | Diseño de interfaces gráficas de modo declarativo y basado en componentes.  | [Facebook BSD][ReactJSL]+[Patents][ReactJSLP] |
| [ OnsenUI ] | Integra ReactJS con Cordova y provee elementos de la interfaz que siguen los patrones de [Material Design](https://material.io/guidelines/) | [Apache 2][OnsenUIL] | 
| [ React-Ace] | Integra el editor [Ace](https://ace.c9.io/) con ReactJS. | [MIT][React-AceL] |
| [ANTLR4] | Generador de analizadores léxicograficos y sintácticos. | [BSD-new][Antlr4L] |

### Empaquetados / Ejecutables

Debido al estado actual del desarrollo no se cuenta con una versión estable. Si se considera un *[aventurero](http://i.imgur.com/nJi4cyO.jpg)*, puede seguir las instrucciones a continuación para construir usted mismo el software.

### Construcción de la aplicación

Se asume que cuenta con un entorno donde se encuentra instalado [NodeJS con NPM](https://nodejs.org/es/download/package-manager/) y [Apache Cordova](https://cordova.apache.org/#getstarted) con las [dependencias necesarias para desarrollar para Android](https://cordova.apache.org/docs/es/latest/guide/platforms/android/index.html). En resumen, asegúrese de que puede construir un proyecto creado usando Apache Cordova.

Por facilidad, se usa [Monaca CLI](https://monaca.io/cli.html) como herramienta de desarrollo, pruebas y construcción de *Léxico para Android*. Las siguientes instrucciones han sido probadas bajo la distribución ArchLinux, sin embargo deberían funcionar de manera similar en otras distribuciones de Linux e incluso entornos Windows o Mac. Los comandos que se encuentran consignados en esta guía deben ser ejecutados en una shell (Terminal en Linux o PowerShell en Windows). Para instalar Monaca CLI ejecute el siguiente comando:

```sh
$ npm -g install monaca
```

El siguiente paso es descargar el código fuente de *Léxico para Android* e instalar las dependencias del proyecto
```sh
$ git clone https://github.com/raven920/Lexico.git
$ cd Lexico
$ npm install
```

Ya está todo listo para probar el proyecto. Puede hacerlo en el navegador ejecutando
```sh
$ monaca preview
```
Podrá acceder a la aplicación usando la URL http://127.0.0.1:8000 en su navegador favorito.
También es posible probar el proyecto en un emulador, smartphone o tableta usando [Monaca Debugger](https://docs.monaca.io/en/quick_start/cli/testing_debugging/).

##### Construir el proyecto

Si desea construir el proyecto para Android, debe ejecutar
```sh
$ monaca build
```
Una vez se construya el proyecto, encontrará el APK en la ruta:
```
Lexico/platforms/android/build/outputs/apk
```
Este APK puede ser copiado a la memoria de su teléfono para posteriormente ser [instalado](https://www.elandroidelibre.com/2016/04/como-instalar-aplicaciones-apk-android.html).

   [Léxico]: <http://lexico.mobi/>
   [Cordova]: <https://cordova.apache.org/>
   [OnsenUI]: <https://onsen.io/>
   [ReactJS]: <https://facebook.github.io/react/>
   [React-Ace]: <https://github.com/securingsincity/react-ace>
   [ANTLR4]: <http://www.antlr.org/index.html>
   

   [CordovaL]: <http://www.apache.org/licenses/LICENSE-2.0>
   [OnsenUIL]: <https://github.com/OnsenUI/OnsenUI/blob/master/LICENSE>
   [ReactJSL]: <https://github.com/facebook/react/blob/master/LICENSE>
   [ReactJSLP]: <https://github.com/facebook/react/blob/master/PATENTS>
   [Antlr4L]: <http://www.antlr.org/license.html>
   [React-AceL]: <https://github.com/securingsincity/react-ace/blob/master/LICENSE>