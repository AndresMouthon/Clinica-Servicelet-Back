const { Paciente } = require("../../models/persona/Paciente.model");
const { Respuesta } = require("../../models/cuestionario/Respuesta.model");

const getPacienteByCedula = async (documento = "") => {
    const paciente = await Paciente.findOne({
        where: {
            documento
        },
        include: [
            {
                model: Respuesta,
                required: false,
                attributes: ["id", "pregunta_id", "respuesta", "paciente_id"],
            },
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
                attributes: ["pregunta_id", "respuesta", "paciente_id"],
            }
        ]
    });
    return paciente;
};

const getPacienteByDocumentacion = async (paciente = {}) => {
    const { tipo_documento_id, documento } = paciente;
    const pacienteByDocumentacion = await Paciente.findOne({
        where: {
            tipo_documento_id,
            documento,
        },
        include: [
            {
                model: Respuesta,
                required: false,
                attributes: ["pregunta_id", "respuesta", "paciente_id"],
            }
        ]
    });
    if (!pacienteByDocumentacion) return [];
    return [pacienteByDocumentacion];
};

const postCrearPaciente = async (paciente = {}) => {
    const { tipo_documento, documento, nombres, apellidos, genero, fecha_nacimiento, departamento, ciudad } = paciente;
    const nuevoPaciente = await Paciente.create({
        tipo_documento,
        documento,
        nombres,
        apellidos,
        genero,
        fecha_nacimiento,
        departamento,
        ciudad
    });
    return nuevoPaciente;
};

const putActualizarPaciente = async (id = "", paciente = {}) => {
    const { tipo_documento, documento, nombres, apellidos, genero, fecha_nacimiento, departamento, ciudad } = paciente;
    await Paciente.update({
        tipo_documento,
        documento,
        nombres,
        apellidos,
        genero,
        fecha_nacimiento,
        departamento,
        ciudad
    }, {
        where: {
            id
        }
    });
    return "Paciente actualizado";
};

const putActualizarPacienteHome = async (id = "", paciente = {}) => {
    const { tipo_documento_id, documento, nombres, apellidos, genero, fecha_nacimiento, pais, departamento, ciudad } = paciente;
    await Paciente.update({
        nombres,
        apellidos,
        genero,
        fecha_nacimiento,
        pais,
        departamento,
        ciudad,
        documento,
        tipo_documento_id,
    }, {
        where: {
            id
        }
    });
    return paciente;
};

const deleteEliminarPaciente = async (id = "") => {
    await Paciente.destroy({
        where: {
            id
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
    putActualizarPacienteHome,
    getPacienteByDocumentacion,
};