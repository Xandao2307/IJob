import { Url_Api } from "../config/app.config";
import axios from "axios";

export async function loginService(user) {
    console.log('Enviando solicitação de login...'); 
    try {
        console.log(Url_Api);
        const response = await axios.post('http://192.168.0.3:8080/'+'auth',user)
        return response.data.token
    } catch (error) {
        console.error(error)
    }
    
}