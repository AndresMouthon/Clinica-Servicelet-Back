'use strict';
const { seccion_pregunta } = require('../src/utils/constants.util');
const {
  INFORMACION_BASICA,
  INFORMACION_UBICACION,
  INFORMACION_ACADEMICA,
  INFORMACION_ASISTENCIAL,
  CONTACTO_EMERGENCIA,
} = seccion_pregunta;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preguntas', [
      {
        encuesta_id: 1,
        pregunta: "Etnia",
        seccion_pregunta: INFORMACION_BASICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Estrato",
        seccion_pregunta: INFORMACION_BASICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Numero de hijos",
        seccion_pregunta: INFORMACION_BASICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Estado civil",
        seccion_pregunta: INFORMACION_BASICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Tipo de sangre",
        seccion_pregunta: INFORMACION_BASICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Barrio",
        seccion_pregunta: INFORMACION_UBICACION,
        tipo_pregunta: "text",
      },
      {
        encuesta_id: 1,
        pregunta: "Dirección",
        seccion_pregunta: INFORMACION_UBICACION,
        tipo_pregunta: "text",
      },
      {
        encuesta_id: 1,
        pregunta: "Tipo de vivienda",
        seccion_pregunta: INFORMACION_UBICACION,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Telefono movil",
        seccion_pregunta: INFORMACION_UBICACION,
        tipo_pregunta: "number",
      },
      {
        encuesta_id: 1,
        pregunta: "Telefono de domicilio",
        seccion_pregunta: INFORMACION_UBICACION,
        tipo_pregunta: "number",
      },
      {
        encuesta_id: 1,
        pregunta: "Email",
        seccion_pregunta: INFORMACION_UBICACION,
        tipo_pregunta: "email",
      },
      {
        encuesta_id: 1,
        pregunta: "Escolaridad",
        seccion_pregunta: INFORMACION_ACADEMICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Estado academico",
        seccion_pregunta: INFORMACION_ACADEMICA,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Profesion u oficio",
        seccion_pregunta: INFORMACION_ACADEMICA,
        tipo_pregunta: "text",
      },
      {
        encuesta_id: 1,
        pregunta: "Persona con discapacidad",
        seccion_pregunta: INFORMACION_ASISTENCIAL,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Discapacidad",
        seccion_pregunta: INFORMACION_ASISTENCIAL,
        tipo_pregunta: "text",
      },
      {
        encuesta_id: 1,
        pregunta: "Tipo de regimen",
        seccion_pregunta: INFORMACION_ASISTENCIAL,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Nombre de la EPS",
        seccion_pregunta: INFORMACION_ASISTENCIAL,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Nombre de la ARL",
        seccion_pregunta: INFORMACION_ASISTENCIAL,
        tipo_pregunta: "options",
      },
      {
        encuesta_id: 1,
        pregunta: "Fondo de pension",
        seccion_pregunta: INFORMACION_ASISTENCIAL,
        tipo_pregunta: "text",
      },
      {
        encuesta_id: 1,
        pregunta: "Nombre completo del responsable",
        seccion_pregunta: CONTACTO_EMERGENCIA,
        tipo_pregunta: "text",
      },
      {
        encuesta_id: 1,
        pregunta: "Telefono del responsable",
        seccion_pregunta: CONTACTO_EMERGENCIA,
        tipo_pregunta: "number",
      },
      {
        encuesta_id: 1,
        pregunta: "Parentesco",
        seccion_pregunta: CONTACTO_EMERGENCIA,
        tipo_pregunta: "text",
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
