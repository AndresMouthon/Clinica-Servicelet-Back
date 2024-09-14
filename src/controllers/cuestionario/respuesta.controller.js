const { Respuesta } = require("../../models/respuesta/Respuesta.model");

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
        if (id === response.paciente_id) {
            console.log(response);
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