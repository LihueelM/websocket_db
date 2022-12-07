import express from 'express'
import {Server as WebSocketServer} from 'socket.io'
import http from 'http'
import { randomUUID } from 'crypto'
import {routerProductos} from './router/routerProductos.js'
import { routerMensajes } from './router/routerMensajes.js'
import { contenedorMensajes } from './contenedorMensajes.js'
import { contenedorProductos } from './contenedorProductos.js'


//Creo la aplicacion express
const app = express()
//Creo un servidor HTTP y le paso como parametro la aplicacion express
const server = http.createServer(app)
//Creo un nuevo servidor webSocket y le paso como parametro el servidor HTTP con Express
const io = new WebSocketServer(server)

//Utilizamos la funcionalidad static de express para servir de archivos en una carpeta seleccionada
app.use(express.static('public'))



io.on('connection', async (socket) => {
    const productos = await contenedorProductos.leerTodos()
    socket.emit('servidor:cargarProductos' , productos )

    socket.on('cliente:nuevoProducto', async nuevoProducto => {
        const producto = {...nuevoProducto , id: randomUUID()} 
        await contenedorProductos.guardar(producto);
        socket.emit('servidor:nuevoProducto' , producto)
    })   
})

io.on('connection', async (socket) => {
    const mensajes = await contenedorMensajes.leerTodos()
    socket.emit('servidor:cargarMensajes' , mensajes)

    socket.on('cliente:nuevoMensaje', async nuevoMensaje => {
        const mensaje = {...nuevoMensaje, id: randomUUID()};
        await contenedorMensajes.guardar(mensaje)
        socket.emit('servidor:nuevoMensaje', mensaje)
        console.log(mensaje);
    })
})

app.use('/api/productos' , routerProductos)
app.use('/api/mensajes', routerMensajes)

const PORT = 3000
const servidor = server.listen(PORT, () => {
    console.log(`Servidor conectado a el puerto: ` + servidor.address().port);
})