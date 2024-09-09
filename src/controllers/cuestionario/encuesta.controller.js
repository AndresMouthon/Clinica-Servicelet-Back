const { Encuesta } = require("../../models/encuesta/Encuesta.model");
const { Pregunta } = require("../../models/pregunta/Pregunta.model");

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