const { getPacienteByCedula } = require("../../controllers/paciente/pacinte.controller");
const { getRespuestasByPaciente } = require("../../controllers/cuestionario/respuesta.controller");

const verificarDocumento = async (req, res, next) => {
    try {
        const documento = req.params.documento || req.body.documento;
        const pacienteExistente = await getPacienteByCedula(documento);
        if (pacienteExistente.length > 0 && req.path.includes('/crear-paciente')) {
            return res.json({ mensaje: "El paciente ya existe" });
        } else if (pacienteExistente.length === 0 && (req.path.includes('/actualizar-paciente') || req.path.includes('/eliminar-paciente'))) {
            return res.json({ mensaje: "El paciente no existe" });
        };
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar el documento", error });
    }
};

const verificarAfiliacion = async (req, res, next) => {
    try {
        const documento = req.params.documento || req.body.documento;
        const respuestas = await getRespuestasByPaciente(documento);
        if (respuestas.length > 0) {
            return res.json({ mensaje: "El paciente ya tiene una afiliacion, por lo que no puede ser eliminado" });
        }
        next();
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al verificar la afiliacion", error });
    }
};

module.exports = {
    verificarDocumento,
    verificarAfiliacion,
};