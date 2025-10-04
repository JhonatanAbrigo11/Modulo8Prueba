const historialRepository = require('../repositories/historialRepository')

// Obtener todo el historial
async function obtenerHistorial(req, res) {
    try {
        const historial = await historialRepository.obtenerHistorial();
        res.json(historial);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Obtener historial de un usuario específico
async function obtenerHistorialPorUsuario(req, res) {
    try {
        const { usuarioId } = req.params;
        const historial = await historialRepository.verHistorialPorUsuario(parseInt(usuarioId));
        res.json(historial);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    obtenerHistorial,
    obtenerHistorialPorUsuario
}