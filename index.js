require("dotenv").config({ path: "./.env" });
require("./src/utils/functions.util").init();
require("./src/models/index.model");

const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./config/sequelize.config");

(async () => {
    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors());

app.use(express.json({ limit: "10mb" }));

const rutaPrincipal = express.Router();
const rutaLogin = require("./src/routers/auth/login.router");
const rutaEncuesta = require("./src/routers/cuestionario/encuesta.router");
const rutaPreguntas = require("./src/routers/cuestionario/pregunta.router");
const rutaRespuesta = require("./src/routers/cuestionario/respuesta.router");
const rutaPaciente = require("./src/routers/persona/paciente.router");

const { jwtVerifyTimeToken } = require("./src/utils/jwt.util");

app.get("/", function (req, res, next) {
    res.send("Hola mundo!");
});

rutaPrincipal.use(rutaLogin.indice, rutaLogin.ruta);
rutaPrincipal.use(rutaEncuesta.indice, rutaEncuesta.ruta);
rutaPrincipal.use(rutaPreguntas.indice, rutaPreguntas.ruta);
rutaPrincipal.use(rutaPaciente.indice, rutaPaciente.ruta);
rutaPrincipal.use(rutaRespuesta.indice, rutaRespuesta.ruta);

app.use(jwtVerifyTimeToken);
app.use("/api", rutaPrincipal);

app.listen(9001, () => {
    console.log('Servidor corriendo en el puerto 9001');
});