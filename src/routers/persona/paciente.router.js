const ruta = require("express").Router();
const { roles } = require("../../utils/constants.util");
const { SECRETARIA } = roles;
const { validarBodyPaciente } = require("../../schemas/persona/paciente.schema");
const {
    getPacienteByCedula,
    getPacientes,
    postCrearPaciente,
    putActualizarPaciente,
    deleteEliminarPaciente,
    putActualizarPacienteHome,
    getPacienteByDocumentacion,
} = require("../../controllers/persona/pacinte.controller");
const { jwtMiddleware } = require("../../middleware/auth/jwt.middleware");
const { validacionDeParametros } = require("../../middleware/validaciones.middleware");
const { verificarDocumento, verificarAfiliacion } = require("../../middleware/persona/paciente.middleware");

ruta.get("/todos-los-pacientes",
    jwtMiddleware([SECRETARIA]),
    async (req, res) => {
        getPacientes()
            .then((getPacientes) => {
                res.status(200).json(getPacientes);
            })
            .catch((error) => {
                res.status(400).json({ mensaje: "La peticion fallo", error });
            });
    }
);

ruta.get("/paciente-por-cedula/:documento",
    async (req, res) => {
        getPacienteByCedula(req.params.documento)
            .then((getPacienteByCedula) => {
                res.status(200).json(getPacienteByCedula);
            })
            .catch((error) => {
                res.status(400).json({ mensaje: "La peticion fallo", error });
            });
    }
);

ruta.post("/buscar-paciente-por-documento",
    async (req, res) => {
        getPacienteByDocumentacion(req.body)
            .then((getPacienteByCedula) => {
                res.status(200).json(getPacienteByCedula);
            })
            .catch((error) => {
                res.status(400).json({ mensaje: "La peticion fallo", error });
            });
    }
)

ruta.post("/crear-paciente",
    jwtMiddleware([SECRETARIA]),
    validarBodyPaciente,
    validacionDeParametros,
    verificarDocumento,
    async (req, res) => {
        try {
            const response = await postCrearPaciente(req.body);
            res.status(200).json({
                status: true, 
                mensaje: response,
             });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

ruta.put("/actualizar-paciente/:id",
    jwtMiddleware([SECRETARIA]),
    validarBodyPaciente,
    validacionDeParametros,
    async (req, res) => {
        try {
            const response = await putActualizarPaciente(req.params.id, req.body);
            res.status(200).json({ mensaje: response });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

ruta.delete("/eliminar-paciente/:id",
    jwtMiddleware([SECRETARIA]),
    validacionDeParametros,
    verificarAfiliacion,
    async (req, res) => {
        try {
            const response = await deleteEliminarPaciente(req.params.id);
            res.status(200).json({ mensaje: response });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

ruta.post("/guardar-paciente",
    validarBodyPaciente,
    validacionDeParametros,
    async (req, res) => {
        let response;
        try {
            if (req.body.id) {
                response = await putActualizarPacienteHome(req.body.id, req.body);
            } else {
                response = await postCrearPaciente(req.body);
            }
            res.status(200).json({ 
                mensaje: response,
                status: true,
            });
        } catch (error) {
            res.status(400).json({ mensaje: "La peticion fallo", error });
        }
    }
);

module.exports = {
    indice: "/pacientes",
    ruta,
};