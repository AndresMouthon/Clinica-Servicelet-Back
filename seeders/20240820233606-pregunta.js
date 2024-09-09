'use strict';
const { tipo_pregunta } = require('../src/utils/constants.util');
const {
  INFORMACION_BASICA,
  INFORMACION_UBICACION,
  INFORMACION_ACADEMICA,
  INFORMACION_ASISTENCIAL,
  CONTACTO_EMERGENCIA,
  INFORMACION_REGISTRO
} = tipo_pregunta;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preguntas', [
      {
        encuesta_id: 1,
        pregunta: "¿Etnia?",
        tipo_pregunta: INFORMACION_BASICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Estrato?",
        tipo_pregunta: INFORMACION_BASICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Numero de hijos?",
        tipo_pregunta: INFORMACION_BASICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Estado civil?",
        tipo_pregunta: INFORMACION_BASICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Tipo de sangre?",
        tipo_pregunta: INFORMACION_BASICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Barrio?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Dirección?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Dirección de residencia?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Tipo de vivienda?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Telefono fijo?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Telefono de domicilio?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Email?",
        tipo_pregunta: INFORMACION_UBICACION,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Escolaridad?",
        tipo_pregunta: INFORMACION_ACADEMICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Estado academico?",
        tipo_pregunta: INFORMACION_ACADEMICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Profesion u oficio?",
        tipo_pregunta: INFORMACION_ACADEMICA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Persona con discapacidad?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Tipo de regimen?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Nombre de la EPS?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Nombre de la ARL?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Fondo de pension?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Caja de compensacion?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Tarifa de caja de compensacion?",
        tipo_pregunta: INFORMACION_ASISTENCIAL,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Nombres del responsable?",
        tipo_pregunta: CONTACTO_EMERGENCIA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Apellidos del responsable?",
        tipo_pregunta: CONTACTO_EMERGENCIA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Contacto del responsable?",
        tipo_pregunta: CONTACTO_EMERGENCIA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Parentesco?",
        tipo_pregunta: CONTACTO_EMERGENCIA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Prepagada?",
        tipo_pregunta: CONTACTO_EMERGENCIA,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Referencia de solicitud?",
        tipo_pregunta: INFORMACION_REGISTRO,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Usuario creador?",
        tipo_pregunta: INFORMACION_REGISTRO,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Fecha de creacion?",
        tipo_pregunta: INFORMACION_REGISTRO,
      },
      {
        encuesta_id: 1,
        pregunta: "¿Observaciones?",
        tipo_pregunta: INFORMACION_REGISTRO,
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
