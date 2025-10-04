const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

// Ver historial de un usuario específico
async function verHistorialPorUsuario(usuarioId) {
    return await prisma.historial.findMany({
        where: { usuarioId },
        include: {
            libro: true
        },
        orderBy: {
            fechaPrestamo: 'desc'
        }
    })
}

// Ver todo el historial
async function obtenerHistorial() {
    return await prisma.historial.findMany({
        include: {
            libro: true,
            usuario: true
        },
        orderBy: {
            fechaPrestamo: 'desc'
        }
    });
}

module.exports = {
    verHistorialPorUsuario,
    obtenerHistorial
}