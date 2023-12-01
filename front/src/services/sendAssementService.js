import { URL_API_IP} from "@env";
import axios from "axios";

export async function sendAssementService(avaliacao) {
    console.log("Enviando avaliação...");
    try {
        const result = await axios.post(URL_API_IP+ `avaliacao`,avaliacao)
        return result.data;
    } catch (error) {
        console.error(error)
    }
}

export async function findAssementByServicoId(prestadorId,servicoId) {
    console.log("Enviando avaliação...");
    try {
        const result = await axios.get(URL_API_IP+ `avaliacao/prestador/${prestadorId}`)
        const avaliacao = result.data.filter((x)=> x.agendaServico.id == servicoId)
       
        return avaliacao
    } catch (error) {
        console.error(error)
    }
}

export async function findAssementByPrestadorId(prestadorId) {
    console.log("Enviando avaliação...");
    try {
        const result = await axios.get(URL_API_IP+ `avaliacao/prestador/${prestadorId}`)
       
        return result.data
    } catch (error) {
        console.error(error)
    }
}