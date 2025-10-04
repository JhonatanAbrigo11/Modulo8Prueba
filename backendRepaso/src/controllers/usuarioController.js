const usuarioServices = require('../services/usuarioServices')
const blackListRepo = require('../repositories/blackListRepository')
//Registrar Usuario
async function registrarUsuario(req,res) {
    console.log(req.body)
    try{
        const usuario = await usuarioServices.registrarUsuario(req.body)
        res.status(201).json({message:'Usuario Registrado Correctamente',data:usuario})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

//Logear Usuario 

async function loginUsuario(req,res) {
   try{
    const token = await usuarioServices.loginUsuario(req.body)
    res.json({message:"Usuario logeado correctamente", data:token})
   }catch (error){
    res.status(500).json({message:error.message})
   } 
}


//Logout 
async function logout(req,res) {
    const authHeader = req.headers.authorization;
    if(!authHeader)  return res.status(401).json({message: "No se proporciono el token"})
    const token = authHeader.split(" ")[1];
    if(!token) {return res.status(401).json({message:"No se proporciono el token"})}
   try{
    await blackListRepo.agregarToken(token);   
    res.json({message:"Usuario deslogueado correctamente"})
   }catch (error){
    res.status(500).json({message:error.message})
   } 
}



module.exports =  {
    registrarUsuario,
    loginUsuario,
    logout
}