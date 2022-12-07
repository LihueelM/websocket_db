/* Formulario carga de productos */
const formProductos = document.querySelector('#formProductos')
const nombre = document.querySelector('#producto')
const precio = document.querySelector('#precio')
const imagen = document.querySelector('#imagen')
const botonProducto = document.querySelector('#botonProducto')

formProductos.addEventListener('submit', e => {
    e.preventDefault()
    
    guardarProducto(nombre.value, precio.value, imagen.value) 

})


/* Formulario carga de mensajes */

const formMensajes = document.querySelector('#formMensajes');
const autor = document.querySelector('#autor');
const texto = document.querySelector('#texto');
const botonMensaje = document.querySelector('#botonMensaje')

formMensajes.addEventListener('submit' , e => {
    e.preventDefault()

    guardarMensaje(autor.value, texto.value)
})
