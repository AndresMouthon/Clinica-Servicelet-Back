const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { Usuario } = require("../usuario/Usuario.model");

class Administrativo extends Model { };

Administrativo.init({
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.STRING,
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
    modelName: "Administrativo",
    tableName: "administrativos",
    timestamps: false,
});

Usuario.hasOne(Administrativo, { foreignKey: 'usuario_id' });
Administrativo.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = { Administrativo };