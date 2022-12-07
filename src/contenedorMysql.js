export class ContenedorMysql{
    constructor(clienteMysql, tabla){
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    async guardar(e){
        await this.cliente(this.tabla).insert(e);
    }

    async leerTodos() {
        return await this.cliente(this.tabla).select();
    }
    
}

