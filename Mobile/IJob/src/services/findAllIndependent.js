import axios from "axios";
import { Url_Api_IP } from "../config/app.config";


export async function findAll() {
    console.log('Pegando todos os prestadores...'); 
    
    try {
        const response = await axios.get(Url_Api_IP+'users')
        const independentList = response.data.filter(obj => obj.independent == true)
        
        return independentList
    } catch (error) {
        console.error(error)
    }    
}