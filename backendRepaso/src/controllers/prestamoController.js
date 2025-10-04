const prestamoRepository = require('../repositories/prestamoRepository');

async function crearPrestamo(req, res) {
    try {
        const { usuarioId, libroId } = req.body;
        
        const prestamo = await prestamoRepository.crearPrestamo(usuarioId, libroId);
        
        res.json(prestamo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function devolverLibro(req, res) {
    try {
        const { usuarioId, libroId } = req.body;
        
        const devolucion = await prestamoRepository.devolverLibro(usuarioId, libroId);
        
        res.json({ message: 'Libro devuelto exitosamente', devolucion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    crearPrestamo,
    devolverLibro
}