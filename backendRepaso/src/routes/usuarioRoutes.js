const express= require ('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


//Registrar Usuario
router.post('/registrar',usuarioController.registrarUsuario);
router.post('/login',usuarioController.loginUsuario);
router.post("/logout", usuarioController.logout)


module.exports  = router