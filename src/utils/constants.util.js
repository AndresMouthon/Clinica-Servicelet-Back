const ROLES = new Map();
const listaNegra = new Array(100).fill(null);

const roles = Object.freeze({
    SECRETARIA: 1,
});

const tipo_pregunta = Object.freeze({
    INFORMACION_BASICA: 1,
    INFORMACION_UBICACION: 2,
    INFORMACION_ACADEMICA: 3,
    INFORMACION_ASISTENCIAL: 4,
    CONTACTO_EMERGENCIA: 5,
    INFORMACION_REGISTRO: 6,
});

module.exports = {
    ROLES,
    listaNegra,
    roles,
    tipo_pregunta,
};