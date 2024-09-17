const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Pregunta } = require("./Pregunta.model");
const { Paciente } = require("../persona/Paciente.model");

class Respuesta extends Model { };

Respuesta.init({
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
            key: 'id'
        }
    },
    respuesta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'id'
        }
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
    modelName: "Respuesta",
    tableName: "respuestas",
    timestamps: false,
});

Pregunta.hasMany(Respuesta, { foreignKey: 'pregunta_id' });
Respuesta.belongsTo(Pregunta, { foreignKey: 'pregunta_id' });

Paciente.hasMany(Respuesta, { foreignKey: 'paciente_id' });
Respuesta.belongsTo(Paciente, { foreignKey: 'paciente_id' });

module.exports = { Respuesta };