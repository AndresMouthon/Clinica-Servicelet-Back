const ruta = require("express").Router();
const { getTodasLasEncuestas } = require("../../controllers/cuestionario/encuesta.controller");

ruta.get("/todas-las-encuestas",
    async (req, res) => {
        getTodasLasEncuestas()
            .then((getTodasLasEncuestas) => {
                res.status(200).json(getTodasLasEncuestas);
            })
            .catch((error) => {
                res.status(400).json({ mensaje: "La peticion fallo", error });
            });
    }
);

module.exports = {
    indice: "/encuestas",
    ruta,
};