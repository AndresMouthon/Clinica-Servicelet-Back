const { Paciente } = require("../../models/paciente/Paciente.model");
const { TipoDocumento } = require("../../models/paciente/TipoDocumento.model");
const { Respuesta } = require("../../models/respuesta/Respuesta.model");

const getPacienteByCedula = async (documento = "") => {
    const paciente = await Paciente.findOne({
        where: {
            documento
        },
        include: [
            {
                model: Respuesta,
                required: false,
                attributes: ["id", "pregunta_id", "respuesta", "paciente_documento"],
            },
            {
                model: TipoDocumento,
                required: false,
                attributes: ["id", "tipo_documento"],
            }
        ]
    });
    if (!paciente) return [];
    return [paciente];
};

const getPacientes = async () => {
    const paciente = await Paciente.findAll({
        include: [
            {
                model: Respuesta,
                required: false,
                attributes: ["pregunta_id", "respuesta", "paciente_documento"],
            }
        ]
    });
    return paciente;
};

const postCrearPaciente = async (paciente = {}) => {
    const { tipo_documento_id, documento, nombres, apellidos, genero, fecha_nacimiento, pais, departamento, ciudad } = paciente;
    await Paciente.create({
        tipo_documento_id,
        documento,
        nombres,
        apellidos,
        genero,
        fecha_nacimiento,
        pais,
        departamento,
        ciudad
    });
    return "Paciente creado";
};

const putActualizarPaciente = async (documento = "", paciente = {}) => {
    const { tipo_documento_id, nombres, apellidos, genero, fecha_nacimiento, pais, departamento, ciudad } = paciente;
    await Paciente.update({
        tipo_documento_id,
        nombres,
        apellidos,
        genero,
        fecha_nacimiento,
        pais,
        departamento,
        ciudad
    }, {
        where: {
            documento
        }
    });
    return "Paciente actualizado";
};

const deleteEliminarPaciente = async (documento = "") => {
    await Paciente.destroy({
        where: {
            documento
        }
    });
    return "Paciente eliminado";
};

module.exports = {
    getPacienteByCedula,
    getPacientes,
    postCrearPaciente,
    putActualizarPaciente,
    deleteEliminarPaciente,
};