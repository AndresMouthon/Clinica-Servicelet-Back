const ruta = require("express").Router();
const { postCrearRespuesta, putActualizarRespuesta, getRespuestasByPaciente } = require("../../controllers/cuestionario/respuesta.controller");

ruta.post("/guardar-respuesta",
    async (req, res) => {
        try {
            const buscarRespuestas = await getRespuestasByPaciente(req.body[0].paciente_id);
            let response;
            if (buscarRespuestas.length > 0) {
                response = await putActualizarRespuesta(req.body[0].paciente_id, req.body);
            } else {
                response = await postCrearRespuesta(req.body);
            }
            res.status(200).json({ mensaje: response });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

module.exports = {
    indice: "/respuestas",
    ruta,
}