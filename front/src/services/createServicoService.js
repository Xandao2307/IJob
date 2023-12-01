import { URL_API_IP } from "@env";
import axios from "axios";

export async function createServico(servico) {
    console.log("Criando o serviço...");
    try {
        const result = await axios.post(URL_API_IP + `agendaservico`,servico)
        console.log(result.data);
        return result.data
    } catch (error) {
        console.error(error);
    }
}


export async function findServicoByUserId(userId) {
    console.log(`Buscando o serviço: ${userId} ...`);
    try {
        const result = await axios.get(URL_API_IP + `agendaservico/usuario/${userId}`)
        console.log(result.data)
        return result.data
    } catch (error) {
        console.error(error)
    }
}
