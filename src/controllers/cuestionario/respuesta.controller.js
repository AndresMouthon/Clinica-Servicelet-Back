const { Respuesta } = require("../../models/cuestionario/Respuesta.model");

const getRespuestasByPaciente = async (id = "") => {
    const respuestas = await Respuesta.findAll({
        where: {
            paciente_id: id
        }
    });
    return respuestas;
};

const postCrearRespuesta = async (respuestas = []) => {
    for (const response of respuestas) {
        const { paciente_id, pregunta_id, respuesta } = response;
        await Respuesta.create({
            paciente_id,
            pregunta_id,
            respuesta,
        });
    }
    return "Respuestas guardadas";
};

const putActualizarRespuesta = async (paciente_id = "", respuestas = []) => {
    for (const response of respuestas) {
        const { respuesta, pregunta_id } = response;
        await Respuesta.update(
            { respuesta },
            {
                where: {
                    paciente_id,
                    pregunta_id
                }
            }
        );
    }
    return "Respuestas guardadas";
};

module.exports = {
    getRespuestasByPaciente,
    postCrearRespuesta,
    putActualizarRespuesta,
}