'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pacientes', {
      tipo_documento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      documento: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.ENUM('Masculino', 'Femenino'),
        allowNull: false,
      },
      fecha_nacimiento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // pais_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      // departamento_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      // ciudad_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
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
      modelName: "Pacientes",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pacientes');
  }
};