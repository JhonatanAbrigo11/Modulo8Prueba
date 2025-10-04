const express = require('express')
const router = express.Router();
const historialController = require('../controllers/historialControllers');

router.get("/historial", historialController.obtenerHistorial);
router.get("/:usuarioId", historialController.obtenerHistorialPorUsuario);

module.exports = router