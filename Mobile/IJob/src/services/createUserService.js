import { Url_Api_IP } from "../config/app.config";
import axios from "axios";

export async function createUser(user) {
    console.log('Criando usuário...'); 
    try {
        const response = await axios.post(Url_Api_IP+'users',user)
        return response.data
    } catch (error) {
        console.error(error)
    }
    
}