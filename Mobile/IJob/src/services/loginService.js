import { Url_Api_IP } from "../config/app.config";
import axios from "axios";

export async function loginService(user) {
    console.log('Enviando solicitação de login...'); 
    try {
        const response = await axios.post(Url_Api_IP+'auth',user)
        return response.data.token
    } catch (error) {
        console.error(error)
    }
    
}