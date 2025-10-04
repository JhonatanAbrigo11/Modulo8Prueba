const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

//Crear Libro
async function crearLibro(data) {
    return await prisma.libro.create({
        data:{
            titulo: data.titulo,
            autor: data.autor,
            categoria: data.categoria,
            disponible: data.disponible
        }
    })
}

async function verPorTitulo(titulo) {
    return await prisma.libro.findUnique({where:{titulo}})
}

//Obtener todos los libros 
async function obtenerLibros() {
    return await prisma.libro.findMany();
}

//Editar libro
async function editarLibro(id,nuevosDatos) {
    return await prisma.libro.update({
        where: {id},
        data: nuevosDatos
    })
}

async function obtenerLibroPorId(id) {
  return await prisma.libro.findUnique({
    where: { id: id }
  });
}

//eliminar libro 
async function eliminarLibro(id) {
    return await prisma.libro.delete({
        where:{id:id}
    })
}
module.exports = {
    crearLibro,
    verPorTitulo,
    obtenerLibros,
    editarLibro,
    eliminarLibro,
    obtenerLibroPorId
}