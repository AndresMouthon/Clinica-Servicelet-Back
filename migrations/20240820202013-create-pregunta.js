'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preguntas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      encuesta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pregunta: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_pregunta: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    }, {
      timestamps: false,
      modelName: "Preguntas",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preguntas');
  }
};