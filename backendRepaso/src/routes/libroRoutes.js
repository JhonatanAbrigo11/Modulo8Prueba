const express= require ('express')
const router = express.Router();
const libroController = require('../controllers/libroController');
const {autorizarRoles} = require('../middleware/autorizarRoles')
const { validarToken } = require('../middleware/validarToken')

router.get('/consultarLibros',libroController.obtenerLibros)

router.post('/nuevoLibro',
    validarToken,
    autorizarRoles("admin"),
    libroController.crearLibro)

router.put('/:id',
    validarToken,
    autorizarRoles("admin"),
    libroController.editarLibro)

router.delete('/:id',
    validarToken,
    autorizarRoles("admin"),
    libroController.eliminarLibros)


module.exports  = router