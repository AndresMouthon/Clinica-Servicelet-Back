const { param, body } = require("express-validator");

const validarBodyPaciente = [
    body("tipo_documento_id")
        .exists()
        .withMessage("El tipo de documento es requerido")
        .isInt()
        .withMessage("El tipo de documento debe ser de tipo entero")
        .isLength({ min: 1 })
        .withMessage("El tipo de documento debe ser de al menos 1 digito")
        .isLength({ max: 3 })
        .withMessage("El tipo de documento debe ser de maximo 3 digitos"),
    body("documento")
        .exists()
        .withMessage("El documento es requerido")
        .isInt()
        .withMessage("El documento debe ser de tipo entero")
        .isLength({ min: 5 })
        .withMessage("El documento debe ser de al menos 5 digito"),
    body("nombres")
        .exists()
        .withMessage("El nombre es requerido")
        .isString()
        .withMessage("El nombre debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El nombre debe tener como maximo 50 caracteres"),
    body("apellidos")
        .exists()
        .withMessage("El apellido es requerido")
        .isString()
        .withMessage("El apellido debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El apellido debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El apellido debe tener como maximo 50 caracteres"),
    body("genero")
        .exists()
        .withMessage("El genero es requerido")
        .isIn(["Masculino", "Femenino"])
        .withMessage("La opción de género no se encuentra en el sistema"),
    body("fecha_nacimiento")
        .exists()
        .withMessage("La fecha de nacimiento es requerida"),
    body("pais")
        .exists()
        .withMessage("El pais es requerido")
        .isString()
        .withMessage("El pais debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El pais debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El pais debe tener como maximo 50 caracteres"),
    body("departamento")
        .exists()
        .withMessage("El departamento es requerido")
        .isString()
        .withMessage("El departamento debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("El departamento debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("El departamento debe tener como maximo 50 caracteres"),
    body("ciudad")
        .exists()
        .withMessage("La ciudad es requerida")
        .isString()
        .withMessage("La ciudad debe ser de tipo texto")
        .isLength({ min: 3 })
        .withMessage("La ciudad debe tener al menos 3 caracteres")
        .isLength({ max: 50 })
        .withMessage("La ciudad debe tener como maximo 50 caracteres"),
];

module.exports = { validarBodyPaciente };