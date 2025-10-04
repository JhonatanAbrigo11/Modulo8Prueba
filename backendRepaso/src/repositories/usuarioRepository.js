const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

//Crear Usuario
async function crearUsuario(data) {
    return await prisma.usuario.create({
        data:{
            email: data.email,
            password: data.password,
            rol: data.rol
        }
    })
}

async function obtenerPorEmail(email) {
    return await prisma.usuario.findUnique({where: {email}})
}

//logear usuario


module.exports =  {
    crearUsuario,
    obtenerPorEmail
}