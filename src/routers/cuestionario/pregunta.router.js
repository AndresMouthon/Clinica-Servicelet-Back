const ruta = require("express").Router();
const { getTodasPreguntas } = require("../../controllers/cuestionario/pregunta.controller");

ruta.get("/todas-las-preguntas",
    async (req, res) => {
        getTodasPreguntas()
            .then((getTodasPreguntas) => {
                res.status(200).json(getTodasPreguntas);
            })
            .catch((error) => {
                res.status(400).json({ mensaje: "La peticion fallo", error });
            });
    }
);

module.exports = {
    indice: "/preguntas",
    ruta,
};