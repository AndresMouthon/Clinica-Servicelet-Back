const { Encuesta } = require("../../models/cuestionario/Encuesta.model");
const { Pregunta } = require("../../models/cuestionario/Pregunta.model");

const getTodasLasEncuestas = async () => {
    const encuestas = await Encuesta.findAll(
        {
            include: [
                {
                    model: Pregunta,
                    attributes: ['pregunta'],
                }
            ]
        }
    );
    return encuestas;
};

module.exports = {
    getTodasLasEncuestas,
};