# Chat En Tiempo Real 

Hola! Este repositorio aloja el código de frontend y backend para la prueba técnica para la vacante de desarrollador Full Stack **Javascript**. Esta prueba técnica tiene como objetivo la creación de un chat en tiempo real que se visualiza mientras los estudiantes tienen la clase en vivo.
![Imagen test del chat en tiempo real](/ReadmeImages/Initial%20Image.png)
# Para poder Iniciar el Proyecto
Desde la consola se debe acceder a la carpeta **server** para poder acceder al servidor. Para poder iniciarlo debería iniciar el proyecto escribiendo el comando: **npm run start**

    cd .\server\
    npm run start
    
De manera simultanea ingresaremos en otra terminal al **frontend** ingresando a **client** de esa manera iniciaremos el servicio de **React**, para ello usaremos el comando: **npm run start** 

    cd .\client\
    npm run start
Luego de  esto para verificar en el navegador se debe ingresar al siguiente link:

    localhost:3000

# Carpetas

## Client

Esta carpeta tiene una estructura básica de un proyecto realizado con **React** que utiliza **TailwindCSS** y **SocketIO Client** para estructurar el diseño, la funcionalidad, la recepción en tiempo real usando **Web Tokens** de mensajes. 

## Server

Esta carpeta está organizada para tener la subdivisión de :
 - ### MiddleWares
 - ### Models
 - ### Routes
 - ### Archivos de servidor
	 - Index: Donde el servidor está iniciando.

## Tipos de Commit

 - **feat:** Se utiliza cuando se añade una nueva característica al proyecto.
 - **fix:** Se utiliza para correcciones de errores.
 - **docs:** Se utiliza para cambios o adiciones en la documentación.
 - **style:** Se utiliza para cambios que no afectan la lógica del código (por ejemplo, cambios de formato).
 - **refactor:** Se utiliza para modificaciones que no corrigen errores ni añaden nuevas características, pero mejoran la estructura del código.
 - **test:** Se utiliza para añadir o modificar pruebas.
 - **chore:** Se utiliza para tareas de mantenimiento del proyecto o tareas generales.
