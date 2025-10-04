const bcrypt= require('bcrypt')
const usuarioRepository  = require('../repositories/usuarioRepository')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET
const secret_key = jwtSecret;

//Registrar Usuario 
async function registrarUsuario(data) {
    const userExiste = await usuarioRepository.obtenerPorEmail(data.email);

    if(userExiste) {throw new Error('El usuario ya existe')}

    const hashedPassword = await bcrypt.hash(data.password,saltRounds);

    const user = await usuarioRepository.crearUsuario({
        ...data,
        email:data.email,
        password:hashedPassword
    })
    return user;
}


async function loginUsuario(data) {
    const usuario = await usuarioRepository.obtenerPorEmail(data.email);
    if(!usuario) throw new Error ('Usuario no encontrado')

    const passwordCorrecto = await bcrypt.compare(data.password, usuario.password);

    const payload = {
        userId:usuario.id,
        email: usuario.email,
        rol: usuario.rol 
    }

    const token = jwt.sign(payload,secret_key,{expiresIn:'1h'})
    return token;
}


module.exports = {
    registrarUsuario,
    loginUsuario
}