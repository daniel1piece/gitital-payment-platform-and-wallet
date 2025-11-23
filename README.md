## Request

| Command                        | Description                                                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| npm init -y                    | Crea un archivo package.json con la configuración básica:                                                                                     |
| npm install express cors       | express → crea el servidor web, cors → permite que tu frontend (por ejemplo, un HTML o React) haga peticiones al backend sin errores de CORS. |
| npm install --save-dev nodemon | Nodemon recarga automáticamente el servidor cuando guardas cambios (solo para desarrollo).                                                    |
| npm install mysql2             | Es para interactuar con bases de datos MySQL de manera eficiente                                                                              |
| npm install bcrypt             | bcrypt se utiliza para hash seguro de contraseñas                                                                                             |
| npm install dotenv             | Es para usar variables de entorno en el proyecto                                                                                              |

## Config

Configuración del package.json

```
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```
