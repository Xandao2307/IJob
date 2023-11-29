import axios from "axios";
import { Url_Api_IP } from "./../config/app.config";

export async function createServico(servico) {
    console.log("Criando o serviço...");
    try {
        const result = await axios.post(Url_Api_IP + `agendaservico`,servico)
        console.log(result.data);
        return result.data
    } catch (error) {
        console.error(error);
    }
}


export async function findServicoByUserId(userId) {
    console.log(`Buscando o serviço: ${userId} ...`);
    try {
        const result = await axios.get(Url_Api_IP + `agendaservico/usuario/${userId}`)
        console.log(result.data)
        return result.data
    } catch (error) {
        console.error(error)
    }
}
