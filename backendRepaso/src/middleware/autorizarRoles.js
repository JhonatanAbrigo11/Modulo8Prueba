function autorizarRoles(...rolesPermitidos) {
  return (req, res, next) => {
    const usuario = req.usuario;

    // Verificamos que haya usuario (viene del validarToken)
    if (!usuario) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }

    // Verificamos que el rol del usuario esté entre los roles permitidos
    if (!rolesPermitidos.includes(usuario.rol)) {
      return res.status(403).json({ message: "Usuario no autorizado" });
    }

    // Si todo está bien, seguimos
    next();
  };
}

module.exports = {
  autorizarRoles,
};
