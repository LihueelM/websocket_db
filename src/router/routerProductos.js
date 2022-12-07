import { Router } from "express";

export const  routerProductos = Router();

routerProductos.post('/' , async (req, res) => {
    const nuevoProducto = req.body;
    
})