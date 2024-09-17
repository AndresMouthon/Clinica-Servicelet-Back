const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Pregunta } = require("./Pregunta.model");

class OpcionPregunta extends Model { };

OpcionPregunta.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    pregunta_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pregunta,
            key: "id"
        }
    },
    opcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    update_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "OpcionPregunta",
    tableName: "opciones-preguntas",
    timestamps: false,
});

Pregunta.hasOne(OpcionPregunta, { foreignKey: 'pregunta_id' });
OpcionPregunta.belongsTo(Pregunta, { foreignKey: 'pregunta_id' });

module.exports = { Encuesta };