const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Encuesta } = require("../encuesta/Encuesta.model");

class Pregunta extends Model { };

Pregunta.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    encuesta_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Encuesta,
            key: 'id'
        }
    },
    pregunta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    modelName: "Preguntas",
    tableName: "preguntas",
    timestamps: false,
});

Encuesta.hasOne(Pregunta, { foreignKey: 'encuesta_id' });
Pregunta.belongsTo(Encuesta, { foreignKey: 'encuesta_id' });

module.exports = { Pregunta };