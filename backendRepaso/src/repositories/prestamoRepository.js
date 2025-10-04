const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Crear un préstamo
async function crearPrestamo(usuarioId, libroId) {
    const libro = await prisma.libro.findUnique({ where: { id: libroId } })
    if (!libro) throw new Error("El libro no existe")
    if (!libro?.disponible) throw new Error("El libro no está disponible")

    // Crear el préstamo
    const prestamo = await prisma.prestamo.create({
        data: {
            usuarioId,
            libroId,
        },
    })

    // Registrar en el historial
    await prisma.historial.create({
        data: {
            usuarioId,
            libroId,
            fechaPrestamo: new Date()
        }
    })

    // Marcar libro como no disponible
    await prisma.libro.update({
        where: { id: libroId },
        data: { disponible: false },
    })

    return prestamo
}

// Devolver un libro
async function devolverLibro(usuarioId, libroId) {

    const prestamoActivo = await prisma.prestamo.findFirst({
        where: { usuarioId, libroId, fechaDevolucion: null },
    })

    if (!prestamoActivo) {
        throw new Error('El préstamo no existe')
    }

    // Actualizar la fecha de devolución del préstamo
    await prisma.prestamo.updateMany({
        where: { usuarioId, libroId, fechaDevolucion: null },
        data: { fechaDevolucion: new Date() },
    })

    // Actualizar el historial con la fecha de devolución
    await prisma.historial.updateMany({
        where: {
            usuarioId,
            libroId,
            fechaDevolucion: null
        },
        data: {
            fechaDevolucion: new Date()
        }
    })

    const libro = await prisma.libro.findUnique({ where: { id: libroId } })
    if (!libro) {
        throw new Error('El libro no existe')
    }

    // Marcar libro como disponible
    await prisma.libro.update({
        where: { id: libroId },
        data: { disponible: true },
    })

    return prestamoActivo
}

module.exports = {
    crearPrestamo,
    devolverLibro
}