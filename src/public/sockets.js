const socket = io()

/* Carga de productos */
const guardarProducto  = (nombre, precio, imagen) => {
    socket.emit('cliente:nuevoProducto', {
        nombre,
        precio,
        imagen
    })   
}

socket.on('servidor:nuevoProducto', añadirProducto)
socket.on('servidor:cargarProductos' , cargarProductos)

/* Mensajes chat */

const guardarMensaje = (autor, texto) => {
    socket.emit('cliente:nuevoMensaje', {
        autor, 
        texto
    })
}
socket.on('servidor:nuevoMensaje' , añadirMensaje)
socket.on('servidor:cargarMensajes' , cargarMensajes)