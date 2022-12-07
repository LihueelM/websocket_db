import { ContenedorMysql } from "./contenedorMysql.js";
import { clienteSql } from "./clienteSql.js";

export const contenedorMensajes = new ContenedorMysql(clienteSql, 'mensajes');