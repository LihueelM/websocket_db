const cajaProductos = document.querySelector('#listaProductos')
const cajaMensajes = document.querySelector('#cajaMensajes')

const añadirProducto = producto => {
    cajaProductos.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            </div>
        </div>
        </div>
    </div>
    `
}

const añadirMensaje = mensaje => {
    cajaMensajes.innerHTML += `
        <div>
            <h3>${mensaje.autor} </h3>
            <p>${mensaje.texto} </p>
        </div>
    `
}

const cargarProductos = productos => {
   Object.values(productos).forEach( producto => añadirProducto(producto));
}

const cargarMensajes = mensajes => {
    Object.values(mensajes).forEach(mensaje => añadirMensaje(mensaje))
}