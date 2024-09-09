const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { TipoDocumento } = require("./TipoDocumento.model");

class Paciente extends Model { };

Paciente.init({
    tipo_documento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TipoDocumento,
            key: 'id'
        }
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino'),
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
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
    modelName: "Paciente",
    tableName: "pacientes",
    timestamps: false,
});

TipoDocumento.hasMany(Paciente, { foreignKey: 'tipo_documento_id' });
Paciente.belongsTo(TipoDocumento, { foreignKey: 'tipo_documento_id' });

module.exports = { Paciente };