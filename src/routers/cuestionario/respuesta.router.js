const ruta = require("express").Router();
const { postCrearRespuesta, putActualizarRespuesta } = require("../../controllers/cuestionario/respuesta.controller");

ruta.post("/crear-respuesta",
    async (req, res) => {
        try {
            const response = await postCrearRespuesta(req.body);
            res.status(200).json({ mensaje: response });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

ruta.put("/actualizar-respuesta/:documento",
    async (req, res) => {
        try {
            if (req.body.length === 0) {
                res.status(200).json({ mensaje: "Actualizacion correcta" });
            } else {
                const response = await putActualizarRespuesta(req.params.documento, req.body);
                res.status(200).json({ mensaje: response });
            }
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

module.exports = {
    indice: "/respuestas",
    ruta,
}