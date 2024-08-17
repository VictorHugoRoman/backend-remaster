# Ideas Compartidas

backend para un sistema q permita a usuarios compartir sus ideas innovadoras
con una comunidad q servira como juez para ponerla en marcha.
Cada idea recibira comentarios, votos positivos y negativos.
Un usuario debe estar autenticado para poder publica o votar una idea.

## Dependencias

- [Instalación]
pnpm install

dev
- [jest: unit test](https://jestjs.io/docs/getting-started)
- [mockingoose: mocking models](https://www.npmjs.com/package/mockingoose)
- [nodemon: automatically restarting app](https://www.npmjs.com/package/nodemon)
    
prod
- [awilix: Dependency Injection](https://www.npmjs.com/package/awilix)
- [express: http server](https://www.npmjs.com/package/express)
- [mongoose: mongo data base](https://mongoosejs.com/docs/typescript.html)
- [swagger-ui-express: generated API docs](https://www.npmjs.com/package/swagger-ui-express)
- [bcryptjs: crypt password](https://www.npmjs.com/package/bcryptjs)
- [bcryptjs: crypt password](https://www.npmjs.com/package/bcryptjs)
- [compression:  compression http request](https://www.npmjs.com/package/compression)
- [cors: enable CORS with various options](https://www.npmjs.com/package/cors)
- [helmet: add security headers to HTTP responses](https://www.npmjs.com/package/helmet)
- [jsonwebtoken: generates and verifies JWT tokens](https://www.npmjs.com/package/jsonwebtoken)
- [memory-cache: stores data in server memory so as not to recalculate](https://www.npmjs.com/package/memory-cache)

run debug:

start-dev: "nodemon  --inspect --watch 'src/**/*' -e ts --exec node -r ts-node/register -r dotenv/config ./index.ts",
    ejecuta la app en modo debug, podemos acceder desde chrome con el link que proporciona nodemon
    en la terminal, o en chrome ejecutando la herramienta chrome://inspect/#devices, para vsCode
    podemos configurar un launch.json. Para reiniciar la aplicacion tenemos que escribir 'rs' en 
    la terminal.


git clone https://github.com/usuario/repo.git
cd repo
pnpm install
