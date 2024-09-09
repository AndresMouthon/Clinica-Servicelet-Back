'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('administrativos', [
      {
        usuario_id: 1,
        nombres: 'Andres Domingo',
        apellidos: 'Mouthon',
        fecha_nacimiento: "29/02/2002",
      }
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
