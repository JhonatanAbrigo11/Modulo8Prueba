const librosRepository = require('../repositories/libroRepository')
const librosServices = require('../services/libroServices')
//COntrolar respuestas
async function obtenerLibros(req, res) {
    try {
        const libros = await librosRepository.obtenerLibros();
        res.json(libros);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//Controllar respuestas de crear libros

async function crearLibro(req, res) {
    try {
        const libro = await librosServices.crearNuevoLibro(req.body)
        res.status(201).json({ message: 'Libro creado correctamente ', data: libro })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//Controllar respuestas de editar libros
async function editarLibro(req, res) {
  try {
    const id = Number(req.params.id);
    const nuevosDatos = req.body;
    const libroExistente = await librosRepository.obtenerLibroPorId(id);
    if (!libroExistente) {
      return res.status(404).json({ error: 'El libro no existe' });
    }
    const libroEditado = await librosRepository.editarLibro(id, nuevosDatos);
    res.status(200).json({ message: 'Libro editado correctamente', data: libroEditado });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// Eliminar libros
async function eliminarLibros(req, res) {
    try {
        const id = Number(req.params.id);
        const libroExistente = await librosRepository.obtenerLibroPorId(id);
        if (!libroExistente) {
            return res.status(404).json({ message: 'El libro ya fue eliminado o no existe' });
        }
        await librosRepository.eliminarLibro(id);

        res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    obtenerLibros,
    crearLibro,
    editarLibro,
    eliminarLibros
}