const { TipoDocumento } = require("../../models/paciente/TipoDocumento.model");
const { limpiarDatosSensibles } = require("../../middleware/control-flujo-data.middleware");

const getTodosLosTipoDocumentos = async () => {
    const tiposDocumento = await TipoDocumento.findAll();
    const camposLimpiar = [
        "update_at",
        "created_at",
    ];
    const tiposDocumentoLimpiar = limpiarDatosSensibles(tiposDocumento, camposLimpiar);
    return tiposDocumentoLimpiar;
};

module.exports = { getTodosLosTipoDocumentos };