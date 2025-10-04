const express= require ('express')
const router = express.Router();
const prestamosController = require('../controllers/prestamoController');
const { validarToken } = require('../middleware/validarToken')


router.post("/prestamos",validarToken, prestamosController.crearPrestamo);
router.post("/devolver",validarToken, prestamosController.devolverLibro);

module.exports  = router
