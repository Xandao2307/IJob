import { URL_API_IP } from "@env";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loginService(user) {
    console.log('Enviando solicitação de login...'); 
    try {
        const response = await axios.post(`${URL_API_IP}auth`,user)
        if(response){
            await AsyncStorage.setItem('user', JSON.stringify(response.data));
            return response.data
        }

        return null
    } catch (error) {
        console.error(error)
    }
    
}