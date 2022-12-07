import { ContenedorMysql } from "./contenedorMysql.js";
import { clienteSql } from "./clienteSql.js";

export const contenedorProductos = new ContenedorMysql(clienteSql, 'productos');