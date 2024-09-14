const ruta = require("express").Router();
const {
    getTodosLosTipoDocumentos,
} = require("../../controllers/paciente/tipo-documento.controller");
const { jwtMiddleware } = require("../../middleware/auth/jwt.middleware");
const { roles } = require("../../utils/constants.util");
const { SECRETARIA } = roles;

ruta.get("/todos-los-tipos-documento", (req, res) => {
        getTodosLosTipoDocumentos()
            .then((todosLosTipoDocumentos) => {
                res.status(200).json(todosLosTipoDocumentos);
            })
            .catch((error) => {
                res.status(400).json({ mensaje: "La peticion fallo", error });
            });
});

module.exports = {
    indice: "/tipos-documento",
    ruta,
};