import axios from "axios";
import { Url_Api_IP } from "../config/app.config";
import { findUser } from "./findUser";

export async function findAllServicesByUserId(id) {
    try {
        console.log("Buscando os serviços feitos...");
        const result = await axios.get(Url_Api_IP + `agendaservico/usuario/${id}`)
        
        for (let i = 0; i < result.data.length; i++) {
            const prestador = await findUser(result.data[i].prestadorId)
            const usuario = await findUser(result.data[i].usuarioId)
            result.data[i].prestador = prestador
            result.data[i].usuario = usuario
        }

        return result.data

    } 
    catch (error) {
        console.error(error)
    }
}

export async function findAllServicesByWorkerId(id) {
    try {
        console.log("Buscando os serviços feitos...");
        const result = (await axios.get(Url_Api_IP + `agendaservico/prestador/${id}`)).data
        for (let i = 0; i < result.length; i++) {
            const prestador = await findUser(result[i].prestadorId)
            const usuario = await findUser(result[i].usuarioId)
            result[i].prestador = prestador
            result[i].usuario = usuario
        }
        return result;
    } 
    catch (error) {
        console.error(error)
    }
}