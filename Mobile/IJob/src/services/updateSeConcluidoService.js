import axios from "axios";
import { Url_Api_IP } from "../config/app.config";

export async function updateSeConcluido(id, seConcluido) {
    console.log("Atualizando o estado do serviço");
    await axios.put(Url_Api_IP+ `agendaservico/${id}/${seConcluido}`)
}