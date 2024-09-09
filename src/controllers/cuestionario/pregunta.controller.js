const { limpiarDatosSensibles } = require("../../middleware/control-flujo-data.middleware");
const { Pregunta } = require("../../models/pregunta/Pregunta.model");

const getTodasPreguntas = async () => {
    const preguntas = await Pregunta.findAll();
    const camposLimpiar = ["encuesta_id", "created_at", "update_at"];
    const preguntasLimpias = limpiarDatosSensibles(preguntas, camposLimpiar);
    return preguntasLimpias;
};

module.exports = { getTodasPreguntas };