'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('opciones-preguntas', [
      {
        pregunta_id: 1,
        opcion: "Indigena"
      },
      {
        pregunta_id: 1,
        opcion: "Negro"
      },
      {
        pregunta_id: 1,
        opcion: "Cobrizo"
      },
      {
        pregunta_id: 1,
        opcion: "Mestizo"
      },
      {
        pregunta_id: 1,
        opcion: "Otro"
      },
      {
        pregunta_id: 2,
        opcion: "1"
      },
      {
        pregunta_id: 2,
        opcion: "2"
      },
      {
        pregunta_id: 2,
        opcion: "3"
      },
      {
        pregunta_id: 2,
        opcion: "4"
      },
      {
        pregunta_id: 2,
        opcion: "5"
      },
      {
        pregunta_id: 2,
        opcion: "6"
      },
      {
        pregunta_id: 3,
        opcion: "Ninguno"
      },
      {
        pregunta_id: 3,
        opcion: "1"
      },
      {
        pregunta_id: 3,
        opcion: "2"
      },
      {
        pregunta_id: 3,
        opcion: "3"
      },
      {
        pregunta_id: 3,
        opcion: "4"
      },
      {
        pregunta_id: 3,
        opcion: "Más de 4"
      },
      {
        pregunta_id: 4,
        opcion: "Casado/a"
      },
      {
        pregunta_id: 4,
        opcion: "Soltero/a"
      },
      {
        pregunta_id: 4,
        opcion: "Separado/a"
      },
      {
        pregunta_id: 4,
        opcion: "Divorciado/a"
      },
      {
        pregunta_id: 4,
        opcion: "Viudo/a"
      },
      {
        pregunta_id: 5,
        opcion: "A-"
      },
      {
        pregunta_id: 5,
        opcion: "A+"
      },
      {
        pregunta_id: 5,
        opcion: "B-"
      },
      {
        pregunta_id: 5,
        opcion: "B+"
      },
      {
        pregunta_id: 5,
        opcion: "O-"
      },
      {
        pregunta_id: 5,
        opcion: "O+"
      },
      {
        pregunta_id: 5,
        opcion: "AB-"
      },
      {
        pregunta_id: 5,
        opcion: "AB+"
      },
      {
        pregunta_id: 8,
        opcion: "Propia"
      },
      {
        pregunta_id: 8,
        opcion: "Arrendada"
      },
      {
        pregunta_id: 8,
        opcion: "Familiar"
      },
      {
        pregunta_id: 8,
        opcion: "Otra"
      },
      {
        pregunta_id: 12,
        opcion: "Sin estudios"
      },
      {
        pregunta_id: 12,
        opcion: "Primaria"
      },
      {
        pregunta_id: 12,
        opcion: "Bachillerato"
      },
      {
        pregunta_id: 12,
        opcion: "Universitario"
      },
      {
        pregunta_id: 12,
        opcion: "Especializacion"
      },
      {
        pregunta_id: 12,
        opcion: "Maestria"
      },
      {
        pregunta_id: 13,
        opcion: "Completa"
      },
      {
        pregunta_id: 13,
        opcion: "Incompleta"
      },
      {
        pregunta_id: 15,
        opcion: "Si"
      },
      {
        pregunta_id: 15,
        opcion: "No"
      },
      {
        pregunta_id: 17,
        opcion: "Contributivo"
      },
      {
        pregunta_id: 17,
        opcion: "Subcidiado"
      },
      {
        pregunta_id: 17,
        opcion: "Especial"
      },
      {
        pregunta_id: 18,
        opcion: "Sanitas"
      },
      {
        pregunta_id: 18,
        opcion: "Sura"
      },
      {
        pregunta_id: 18,
        opcion: "Compensar"
      },
      {
        pregunta_id: 18,
        opcion: "Coomeva"
      },
      {
        pregunta_id: 18,
        opcion: "Salud Total"
      },
      {
        pregunta_id: 18,
        opcion: "EPS Famisanar"
      },
      {
        pregunta_id: 18,
        opcion: "Nueva EPS"
      },
      {
        pregunta_id: 18,
        opcion: "Medimás"
      },
      {
        pregunta_id: 18,
        opcion: "Asmet Salud"
      },
      {
        pregunta_id: 19,
        opcion: "SURA"
      },
      {
        pregunta_id: 19,
        opcion: "Colpatria"
      },
      {
        pregunta_id: 19,
        opcion: "MAPFRE"
      },
      {
        pregunta_id: 19,
        opcion: "Positiva"
      },
      {
        pregunta_id: 19,
        opcion: "ARL Helm"
      },
      {
        pregunta_id: 19,
        opcion: "ARL Bolívar"
      },
      {
        pregunta_id: 19,
        opcion: "ARL Sanitas"
      },
      {
        pregunta_id: 19,
        opcion: "ARL Equidad"
      },
      {
        pregunta_id: 19,
        opcion: "ARL Aliansalud"
      },
    ]);
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
