import { URL_API_IP } from "@env";
import axios from "axios";


export async function findAll(id) {
    console.log('Pegando todos os prestadores...'); 
    try {
        const response = await axios.get(URL_API_IP + `users/independents/${id}`)
        const independentList = response.data.filter(obj => obj.independent == true)
        
        return independentList
    } catch (error) {
        console.error(error)
    }    
}