const prestamoRepository = require('../repositories/prestamoRepository')

async function crearPrestamo(usuarioId, libroId) {
  // Aquí podrías añadir validaciones adicionales si lo deseas
  return await prestamoRepository.crearPrestamo(usuarioId, libroId)
}

async function devolverLibro(usuarioId, libroId) {
  return await prestamoRepository.devolverLibro(usuarioId, libroId)
}

module.exports = {
  crearPrestamo,
  devolverLibro
}
