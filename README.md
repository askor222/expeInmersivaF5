<p align="center"> 
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/SomosF5%20Blanco.png?v=1694529394126" width="550" height="250">
</p>

---
# Aplicación web inmersiva

## Contenido del repositorio

* Introducción.
* Proyecto. Requisitos Stakeholder.
* Stacks Tecnológicos usados.
* Sobre la página.
* Instalación en caso de clonar repositorio.
* Equipo de trabajo.

---

## Introducción

Imagina adentrarte en una experiencia única que fusiona la tecnología y la pedagogía activa. Hemos diseñado y desarrollado el primer prototipo de experiencia inmersiva de Somos F5 y Factoría F5, desarrollada usando Symfony, React y A-Frame, esta propuesta inicial invita a explorar la sede de la organización en Madrid en primera persona, explorando e interactuando con los espacios. Ha sido pensada para que pueda ser ampliada o modificada a petición, con experiencias interactivas, espacios de formación, información o como ejercicio para otros paricipantes de los próximos bootcamps.

## Proyecto. Requisitos Stakeholder

* El backend debe ser hecho en Symfony (CRUD y API).
* Se debe de hacer un modelado de datos óptimo (esquema de la DDBB).
* El front debe ser hecho en React (Atomic design, componentes, estados).
* El acceso a determinadas zonas debe ser segura a través de roles, usuarios y/o token.
* Se debe hacer Testing del front y el back.
* Se debe integrar una experiencia inmersiva (A-Frame u otras plataformas). Aplicación web inmersiva del local de Somos F5 y Factoría F5 de Madrid / desplazarse e interactuar. La experiencia debe representar la realidad del espacio.
* Se debe tener en cuenta las Green Skills y auditar mediante el TEST.
* Debe de tener un formulario de contacto con validaciones en tiempo real.
* Registro de usuario y login para entrar a la experiencia inmersiva.
* Usar los colores corporativos de Somos F5.

## Stacks Tecnológicos usados

<p align="center"> 
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/symfony.svg?v=1694538686513" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/react.svg?v=1694538686887" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/javascript.svg?v=1694538686175" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/aframe.jpg?v=1694553661094" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/mysql.svg?v=1694538685831" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/bootstrap.svg?v=1694538687237" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/twigLogo%201.svg?v=1694538683585" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/blender.svg?v=1694538685176" width="50" height="50">
  <img src="https://cdn.glitch.global/075570ba-a0bd-49a0-a4fd-e003f0933441/b69f081bf20dceb8564f47d2a633dbe4f7fffe92.png?v=1694554210950" width="50" height="30">
  <img src="https://cdn.glitch.global/58932ba0-437c-499b-8b2d-346e8fe9a7f2/glitch-icon.svg?v=1694554530476" width="50" height="50">
  <img src="https://cdn.glitch.global/58932ba0-437c-499b-8b2d-346e8fe9a7f2/figma.svg?v=1694554660388" width="50" height="50">
  <img src="https://cdn.glitch.global/58932ba0-437c-499b-8b2d-346e8fe9a7f2/github-icon%20(1).svg?v=1694554673996" width="50" height="50">
  <img src="https://cdn.glitch.global/58932ba0-437c-499b-8b2d-346e8fe9a7f2/visual-studio-code.svg?v=1694554687276" width="50" height="50">
</p>

## Sobre la página

La propuesta funciona como un complemento de la página principal, una pestaña que puede llevar a dos experiencias una en VR y otra en AR. La experiencia VR, es una versión virtual del espacio que ocupa la sede de Factoria / Somos F5 en Madrid, esta experiencia puede ser ampliada para incorporar más objetos 3D, avatares de participantes, facilitadores o conectarla con otras experiencias que en el futuro puedan conectarse entre si, puede ser utilizada como un espacio para encuentros, conferencias, pildoras o masterclases. Esa ampliación dependerá de un nuevo host más robusto en términos de capacidad, que permita alojar diferentes tipos de assets, objetos 3D diseñados especificamente para el espacio, frameworks y librerías de trabajo como el THREE.js que se adapten mejor a este tipo de experiencias. Para disfrutar de esta experiencia es necesario registrarse en la página de manera segura y luego loggearse, esto permitirá dos cosas: la primera que se pueda entrar de manera segura al espacio virtual y la segunda captar nuevos participantes que tengan interés en la formación específica.

La segunda propuesta es una experiencia AR dividida en dos, una primera hecha a partir de imágenes 360 de espacios específicos que muestra la versión real del espacio como recorrido sin interación para este sprint, al igual que la versión VR esta propuesta puede ampliarse para incluir un vista desde las estaciones de metro cercanas o para incluir experiencias realizadas con ARCORE de Google. La segunda opción es una propuesta llamada "Tracking", que usa una imagen o texto como base para mostrar algo más, todo esto logrado con la librería MINDAR que contiene otras librerías con Javascript, en este caso es posible escanear con el móvil cuatro imágenes que forman parte del espacio de Factoria / Somos F5 y obtener una imagen adicional relacionada.

## Instalación en caso de clonar repositorio

El repositorio está hecho usando Symfony y REACT, en ambos casos es necesario seguir pasos para activarlos:

1. Para REACT:
* Es necesario ir al directorio especifico desde el terminal del ordenador o el terminal del editor de código y hacer un ** npm install ** una vez lista la instalación de las dependencias y todos los archivos necesarios para activar el proyecto se usa el comando ** npm start ** para ver el proyecto de forma local.

2. Para SYMFONY:
* Encender el XAMPP o la aplicación que active la conexión con una administrador de base de datos en local similar a PHP My Admin.
* En el directorio específico del proyecto dentro del terminal (del ordenador o el terminal del editor de código), hacer un composer update para que agregue los archivos necesarios y haga las conexiones con el servidor local pertinentes, es necesario hacer los cambios necesarios en el archivo .ENV para que pueda funcionar la conexión.

## Equipo de trabajo

<p align="center"> 
  <img src="https://cdn.glitch.global/58932ba0-437c-499b-8b2d-346e8fe9a7f2/IMG_6635.jpg?v=1694585388857" width="550" height="350">
</p>

* Greiskel Sánchez. Product Owner. (https://github.com/GreiskelS)
* Franci Sánchez. Scrum. (https://github.com/FranSSZZ)
* Marcela Romero. Developer. (https://github.com/Marcela3290)
* Kibria Ali Askor. Developer. (https://github.com/askor222)
* Chantell Gebauer. Stakeholder.

## Deploy: (https://expeinmersiva.vercel.app/Inmersive)
