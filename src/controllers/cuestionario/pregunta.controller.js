const { limpiarDatosSensibles } = require("../../middleware/control-flujo-data.middleware");
const { Pregunta } = require("../../models/cuestionario/Pregunta.model");
const { OpcionPregunta } = require("../../models/cuestionario/OpcionPregunta.model");

const getTodasPreguntas = async () => {
    const preguntas = await Pregunta.findAll({
        include: [
            {
                model: OpcionPregunta,
                required: false,
                attributes: ["pregunta_id", "opcion"],
            }
        ]
    });
    const camposLimpiar = ["encuesta_id", "created_at", "update_at"];
    const preguntasLimpias = limpiarDatosSensibles(preguntas, camposLimpiar);
    return preguntasLimpias;
};

module.exports = { getTodasPreguntas };