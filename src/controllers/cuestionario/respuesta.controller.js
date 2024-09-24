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
    const transaccion = await Respuesta.sequelize.transaction();
    try {
        for (const response of respuestas) {
            const { paciente_id, pregunta_id, respuesta } = response;
            await Respuesta.create(
                {
                    paciente_id,
                    pregunta_id,
                    respuesta,
                },
                {
                    transaction: transaccion
                }
            );
        }
        await transaccion.commit();
        return "Respuestas guardadas";
    } catch (error) {
        return "Error al guardar las respuestas";
    }
};

const putActualizarRespuesta = async (paciente_id = "", respuestas = []) => {
    const transaccion = await Respuesta.sequelize.transaction();
    try {
        for (const response of respuestas) {
            const { respuesta, pregunta_id } = response;
            await Respuesta.update(
                { respuesta },
                {
                    where: {
                        paciente_id,
                        pregunta_id
                    },
                    transaction: transaccion
                }
            );
        }
        await transaccion.commit();
        return "Respuestas guardadas";
    } catch (error) {
        return "Error al guardar las respuestas";
    }
};

module.exports = {
    getRespuestasByPaciente,
    postCrearRespuesta,
    putActualizarRespuesta,
}