
# Proyecto Final React-47155
## Luchini Matias 

### IPTECNOLOGY 

### Introducción

Nuestro proyecto se centra en la venta de soluciones de seguridad en línea. Somos una empresa de tecnología con sede en Córdoba, Argentina, especializada en mejorar la seguridad y la eficiencia de organizaciones, empresas y hogares

  
### Tabla de Contenidos  

1. [Introducción](#introducción) 
2. [Requisitos previos](#requisitos-previos) 
3. [Instalación](#instalación) 
4. [Uso](#uso)
5. [Configuración](#configuración) 
6. [Contribución](#contribución) 
7. [Licencia](#licencia)
8. [Contacto](#contacto)

### Requisitos previos

Antes de comenzar a trabajar en este proyecto, asegúrate de tener configurado tu entorno de desarrollo con los siguientes requisitos previos:

  
1.  **Node.js y npm:** Asegúrate de tener Node.js instalado en tu sistema, ya que es necesario para ejecutar aplicaciones de React y para administrar paquetes de JavaScript con npm. Puedes descargar Node.js desde su sitio web oficial: [Descargar Node.js](https://nodejs.org/). 
2. **Editor de código:** Puedes usar cualquier editor de código de tu elección, pero en el curso utilizamos Visual Studio Code (VS Code) debido a su amplia comunidad y extensiones útiles. Puedes descargar VS Code desde: [Visual Studio Code](https://code.visualstudio.com/). 


### Instalación


**Clonar el repositorio:**  

1. Abre tu terminal o línea de comandos. 
2. Navega al directorio donde deseas clonar el repositorio. Por ejemplo: 

```bash 
cd carpeta/deseada
```
3. Clona el repositorio ejecutando el siguiente comando:

```bash 
git clone git@github.com:luchinimatias/proyectoFinalReact.git
```
Una vez que la clonación esté completa, puedes navegar al directorio del proyecto usando el siguiente comando:

```bash 
cd proyectoFinalReact
```
**configurar un proyecto Vite:**  

 1. Abre una terminal y navega al directorio del proyecto clonado:
 
 ```bash 
cd proyectoFinalReact
```

 2. Ejecuta el siguiente comando para crear un nuevo proyecto Vite:
 ```bash 
npm create vite@latest
```

 3.  Cuando se te pida, ingresa el nombre del proyecto (por ejemplo, "vite-project"). Puedes presionar Enter para aceptar el nombre por defecto si lo deseas.
    
 4.  No solicita el Framework, así que simplemente presiona Enter para continuar.
    
 5.  Cuando se te pregunte por la variante, selecciona JavaScript. Para hacerlo, debes usar la tecla de flecha arriba o abajo para navegar a través de las opciones y luego presionar Enter para seleccionar "JavaScript".
    
 6.  Después de que Vite haya generado el proyecto, debes cambiar al directorio del proyecto Vite recién creado:

 ```bash 
cd vite-project
```

 7. Ejecuta el siguiente comando para instalar las dependencias del
    proyecto:

 ```bash 
npm install
```

 8. Para iniciar el servidor de desarrollo Vite, ejecuta el siguiente
    comando:
    
 ```bash 
npm run dev
```

 9. Esto iniciará el servidor de desarrollo Vite y mostrará la URL en la
    que puedes ver tu aplicación en el navegador (por ejemplo,
    [http://localhost:XXXX/](http://localhost:XXXX/)).

### Instalación de Bootstrap 

Para instalar la biblioteca Bootstrap en tu proyecto, ejecuta el siguiente comando:

 ```bash 
 bash npm install bootstrap
 ```

Luego, para comenzar a usar Bootstrap en tu aplicación, asegúrate de importar el archivo CSS en tu archivo `main.jsx` de la siguiente manera:

```bash 
import  "bootstrap/dist/css/bootstrap.min.css";
 ```

### Instalación de Dependencias Adicionales

```bash 
npm i prop-types
 ```

### Configuración de Firebase

```bash 
npm install firebase
 ```
 
#### Inicializar Firebase

En tu archivo `main.jsx`, importa y configura Firebase de la siguiente manera:

```bash 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id",
};

// Inicializa Firebase
initializeApp(firebaseConfig);
 ```

Asegúrate de reemplazar los valores `"tu-api-key"`, `"tu-auth-domain"`, etc., con la configuración de Firebase específica de tu proyecto.

### Variables de Entorno para Firebase (Archivo .env)

En este proyecto, utilizamos variables de entorno para configurar la conexión con Firebase
A continuación, se muestran las variables de entorno utilizadas para la configuración de Firebase en este proyecto:

-   **VITE_FIRESTORE_API_KEY**: Esta variable almacena la clave de API de Firebase, que es necesaria para autenticar y autorizar las solicitudes a los servicios de Firebase.
-   **VITE_FIRESTORE_AUTH_DOMAIN**: Contiene el dominio de autenticación de Firebase, que se utiliza para autenticar a los usuarios de la aplicación.
-   **VITE_FIRESTORE_PROJECT_ID**: Representa el ID del proyecto de Firebase al que está vinculado este proyecto.
-   **VITE_FIRESTORE_STORAGE_BUCKET**: Almacena el nombre del bucket de almacenamiento en Firebase, que se utiliza para almacenar y recuperar datos y archivos.
-   **VITE_FIRESTORE_MESSAGING_SENDER_ID**: Identifica el remitente de mensajes de Firebase Cloud Messaging (FCM), que se utiliza para enviar notificaciones en tiempo real.
-   **VITE_FIRESTORE_APP_ID**: Es el ID de la aplicación de Firebase utilizada en este proyecto.