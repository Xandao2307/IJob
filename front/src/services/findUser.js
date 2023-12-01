import { URL_API_IP} from "@env";
import axios from "axios";


export async function findUser(id){
    console.log("Buscando o Usuario: " + id)

    const user =  (await axios.get(URL_API_IP + `users/${id}`)).data
    return user
}