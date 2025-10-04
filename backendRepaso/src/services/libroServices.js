const libroRepository = require('../repositories/libroRepository')

async function crearNuevoLibro(data) {
    const libroExiste = await libroRepository.verPorTitulo(data.titulo)
    if(libroExiste) {throw new Error('El libro ya existe')}

    const libro = await libroRepository.crearLibro({
        ...data,
        titulo : data.titulo,
        autor : data.autor,
        categoria : data.categoria,
        descripcion : data.descripcion,
    })

    return libro
}


module.exports =  {
    crearNuevoLibro
}