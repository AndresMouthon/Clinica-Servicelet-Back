const { Respuesta } = require("../../models/respuesta/Respuesta.model");

const getRespuestasByPaciente = async (documento = "") => {
    const respuestas = await Respuesta.findAll({
        where: {
            paciente_documento: documento
        }
    });
    return respuestas;
};

const postCrearRespuesta = async (respuestas = []) => {
    for (const response of respuestas) {
        const { paciente_documento, pregunta_id, respuesta } = response;
        await Respuesta.create({
            paciente_documento,
            pregunta_id,
            respuesta,
        });
    }
    return "Respuestas registradas";
};

const putActualizarRespuesta = async (documento = "", respuestas = []) => {
    for (const response of respuestas) {
        if (documento === response.paciente_documento) {
            console.log(response);
            const { respuesta, pregunta_id } = response;
            await Respuesta.update(
                { respuesta },
                {
                    where: {
                        paciente_documento: documento,
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