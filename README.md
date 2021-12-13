<p align="center">
  <img src="https://www.ign.es/resources/viewer/images/logoApiCnig0.5.png" height="152" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/270px-React.svg.png
" height="152" />
</p>
<h1 align="center"><strong>APICNIG</strong> - <small>Arquetipo React</small></h1>

<p align="center">
  <a title="MIT License" href="LICENSE.md">
    <img src="https://img.shields.io/badge/license-EUPL-blue.svg">
  </a>
  <a title="Node version" href="#">
    <img src="https://img.shields.io/badge/node-v14.16-blue">
  </a>  
  <a title="NPM version" href="#">
    <img src="https://img.shields.io/badge/npm-v6.14-blue">
  </a>
  <a title="Language" href="https://www.w3schools.com/html/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Lang&message=HTML&color=maroon">
  </a>  
  <a title="Language" href="https://www.w3schools.com/js/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Lang&message=Javascript&color=maroon">
  </a>
  <a title="Language" href="https://www.w3schools.com/css/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Lang&message=CSS3&color=maroon">
  </a> 

  <br />
  <br />
</p>

## Descripción 👷

El objeto de este proyecto es disponer de una single-page application (SPA), o aplicación de página única, muy básica, que haga uso de los componentes de la API-CNIG y sitva como base a waplicaciones más complejas.

El propósito de una SPA es la de disponer de una aplicación web o sitio web que quepa en una sola página con el propósito de dar una experiencia más fluida a los usuarios, como si fuera una aplicación de escritorio. En una SPA todos los códigos de HTML, JavaScript, y CSS se cargan una sola vez​ o los recursos necesarios se cargan dinámicamente cuando lo requiera la página, normalmente como respuesta a las acciones del usuario.

## ⚛️ React

Como *framework* para el desarrollo de este arquetipo se ha utilizado **React**. Se trata de una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.

Se ha utilizado la última versión publcada de React 17.

Vamos a realizar una alicación muy básica en React. Se trata de una lista de tareas en la que podemos añadir y borrar elementos y marcarlos como completados. Es la típica App de Hola mundo para aprender cómo funciona el flujo de una App de React.

### Creación del proyecto.

Este proyecto se ha creado usando el comando npx del gestor de paquetes de Node.JS

```bash
$ npx create-react-app
```

Toda la estructura, incluido el repo por defecto o el package.json, se crea automáticamente sin hacer más. Para más información sobre esto ver los [Apuntes de desarrollo](develnotes.md).


### Available Scripts

El package.json viene con los siguientes scripts:

### `npm start`

Lanza la App en modo de desarrollo en un servidor propio con autoreload cuando varían cosas.\
Podemos verlo en [http://localhost:3000](http://localhost:3000) con el *browser*.

La página se recarga con los cambios.\
Podemos comprobar los errores por consola.

### `npm run build`

Realiza un *build* de la App para producción en la carpeta `build` folder.\
Para más información, consultar [deployment](https://facebook.github.io/create-react-app/docs/deployment).


## Fuentes

* [Extensiones de Visual Studio Code para trabajar con React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)

### `npm run eject`

create-react-app encapsula todos los módulos npm que está usando internamente, por lo que su package.json será muy limpio y simple sin que tenga que preocuparse por ello.

Sin embargo, si desea comenzar a hacer cosas más complejas e instalar módulos que puedan interactuar con los módulos que create-react-app está usando bajo el capó, esos nuevos módulos necesitan saber qué está disponible y qué no, lo que significa que debe tener create-react -app anular el resumen de ellos.

Eso, en esencia, es lo que react-scripts ejecthace. Dejará de ocultar lo que tiene instalado debajo del capó y en su lugar expulsará esas cosas en el package.json de su proyecto para que todos lo vean.

## ⛲️ Referencias

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
