# Nombre del Proyecto
Ideas Compartidas

## Table of Contents

- [Instalación]
    pnpm install

- [Uso]
    backend para un sistema q permita a usuarios compartir sus ideas innovadoras
    con una comunidad q servira como juez para ponerla en marcha.
    Cada idea recibira comentarios, votos positivos y negativos.
    Un usuario debe estar autenticado para poder publica o votar una idea.

- [Dependencias]
    desarrollo
        jest: unit test
        mockingoose: mockear metodos de mongoose
        nodemon: actualiza y corre los cambios automaticamente
    produccion:
        awilix: inyeccion de dependencias
        express: servidor http
        mongoose: base de datos mongo
        swagger-ui-express: documentacion metodos http
        bcryptjs: encripta, desencripta contraseña
        compression: comprime las peticiones http
        cors: controla el acceso a recursos de tu servidor desde otros dominio.
        helmet: añade cabeceras de seguridad a las respuestas HTTP.
        jsonwebtoken: genera y verifica tokens JWT (JSON Web Tokens).
        memory-cache: almacena datos en la memoria del servidor para no recalcular.
        mongoose: acilita el uso de MongoDB.

- [Comandos del Package.json](#)
    "start-ts": "ts-node index.ts"
        corre directamente la aplicacion con typescript
    "start-tsc": "tsc && node build/index.js"
        compila typescript y ejecuta el compilado javascript
    "start-js": "node build/index.js"
        inicia la aplicacion mediante una compilacion
    "start-dev2": "nodemon --exec ts-node index.ts"
        ejecuta la aplicacion con nodemon para auto actualizar el servidor con los nuevos cambios usando typescript
    "start-dev": "nodemon  --inspect --watch 'src/**/*' --ext ts --exec node --require ts-node/register 
                    --require dotenv/config ./index.ts",
        ejecuta la app en modo debug, podemos acceder desde chrome con el link que proporciona nodemon
        en la terminal, o en chrome ejecutando la herramienta chrome://inspect/#devices, para vsCode
        podemos configurar un launch.json. Para reiniciar la aplicacion tenemos que escribir 'rs' en 
        la terminal.
    "build": "tsc",
        compila la aplicacion
    "test": "jest",
        ejecuta las pruebas unitarias
    "test:watch": "jest --watch",
        ejecuta las pruebas y luego espera cambios en el codigo
    "test:coverage": "jest --coverage",
        genera un informe de cobertura, ayuda a identificar áreas del código que podrían no estar 
        suficientemente probadas
    "test:update": "jest --updateSnapshot"
        almacena el estado de los tests en un archivo de snapshot. almacenando la representación de 
        los datos que se espera que permanezcan constantes entre ejecuciones de pruebas.

## Instalación

Para instalar el proyecto, clona el repositorio y ejecuta el comando de instalación:

```bash
git clone https://github.com/usuario/repo.git
cd repo
pnpm install
