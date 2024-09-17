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
    return "Respuestas registradas";
};

const putActualizarRespuesta = async (id = "", respuestas = []) => {
    for (const response of respuestas) {
        if (Number(id) === response.paciente_id) {
            const { respuesta, pregunta_id } = response;
            await Respuesta.update(
                { respuesta },
                {
                    where: {
                        paciente_id: id,
                        pregunta_id
                    }
                }
            );
        }
    }
    return "Actualizacion correcta";
};

module.exports = {
    getRespuestasByPaciente,
    postCrearRespuesta,
    putActualizarRespuesta,
}