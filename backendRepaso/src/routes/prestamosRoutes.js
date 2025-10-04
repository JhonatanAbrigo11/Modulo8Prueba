const express= require ('express')
const router = express.Router();
const prestamosController = require('../controllers/prestamoController');



router.post("/prestamos", prestamosController.crearPrestamo);
router.post("/devolver", prestamosController.devolverLibro);

module.exports  = router
