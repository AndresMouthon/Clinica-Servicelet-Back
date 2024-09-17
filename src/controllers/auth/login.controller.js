const { createToken } = require("../../utils/jwt.util");
const { comparePassword } = require("../../utils/functions.util");
const { encriptacion, LLAVE_SEGUNDA } = require("../../utils/crypto.util");
const { Usuario } = require("../../models/persona/Usuario.model");

const login = async (cedula = "", passwordParam = "") => {
    try {
        const usuario = await Usuario.findOne({
            where: { cedula },
        });
        if (usuario) {
            const { password, rol_id } = usuario.dataValues;
            const comparacion = await comparePassword(password, passwordParam);
            if (!comparacion) {
                return Promise.reject({
                    message: "¡Clave incorrecta!",
                });
            }
            const jwtData = {
                cedula,
                rolId: rol_id,
            };
            const datosEncriptados = encriptacion(JSON.stringify(jwtData));
            const token = createToken(
                { datos: datosEncriptados, llave: LLAVE_SEGUNDA },
                process.env.JWT_SECRETO,
                { expiresIn: "24h" }
            );
            const data = {
                token,
                rol_id,
            };
            return data;
        };
        return Promise.reject({ message: "¡Usuario no encontrado!" });
    } catch (error) {
        console.log(error);
        return Promise.reject({
            mensaje: "Error en el servidor",
        });
    }
};

module.exports = { login };
