import axios from "axios";
import { Url_Api_IP } from "../config/app.config";


export async function findUser(id){
    console.log("Buscando o prestador: " + id)

    const user =  (await axios.get(Url_Api_IP + `users/${id}`)).data
    return user
}