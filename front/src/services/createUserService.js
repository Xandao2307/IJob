import { URL_API_IP } from "@env";

import axios from "axios";

export async function createUser(user) {
    try {
        const response = await axios.post(`${URL_API_IP}users`,user)
        return response.data
    } catch (error) {
        console.error(error)
    }
    
}