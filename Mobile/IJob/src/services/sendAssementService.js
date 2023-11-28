import axios from "axios";
import { Url_Api_IP } from "../config/app.config";

export async function sendAssementService(avaliacao) {
    console.log("Enviando avaliação...");
    try {
        const result = await axios.post(Url_Api_IP + `avaliacao`,avaliacao)
        return result.data;
    } catch (error) {
        console.error(error)
    }
}

export async function findAssementByServicoId(prestadorId,servicoId) {
    console.log("Enviando avaliação...");
    try {
        const result = await axios.get(Url_Api_IP + `avaliacao/prestador/${prestadorId}`)
        const avaliacao = result.data.filter((x)=> x.agendaServico.id == servicoId)
       
        return avaliacao
    } catch (error) {
        console.error(error)
    }
}