const express = require('express')
const app = express();
const path = require('path')
const usuarioRouter = require('./routes/usuarioRoutes')
const libroRouter = require('./routes/libroRoutes')
const port = process.env.PORT || 3000
const prestamoRoutes=  require ("./routes/prestamosRoutes");
const historialRoutes = require('./routes/historialRoutes')
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Api funcionando correctamente')
})

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})

app.use('/api/usuarios',usuarioRouter)
app.use('/api/libros', libroRouter)
app.use("/api/prestamos", prestamoRoutes);
app.use("/api/historial", historialRoutes);