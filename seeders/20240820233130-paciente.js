'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pacientes', [
      {
        tipo_documento_id: 1,
        documento: '1032423123',
        nombres: 'Carlos Mario',
        apellidos: 'Tirado',
        genero: 'Masculino',
        fecha_nacimiento: "22/08/2001",
        departamento: 'Cordoba',
        ciudad: 'Monteria',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
