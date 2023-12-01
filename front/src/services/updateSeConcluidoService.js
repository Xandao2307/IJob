import { URL_API_IP  } from "@env";
import axios from "axios";

export async function updateSeConcluido(id, seConcluido) {
    console.log("Atualizando o estado do serviço");
    await axios.put(URL_API_IP + `agendaservico/${id}/${seConcluido}`)
}