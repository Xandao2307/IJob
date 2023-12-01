import { URL_API_IP } from "@env";
import axios from "axios";


export async function saveImages(images,id){
    console.log("Salvando Imagens no banco de dados...");
    images.forEach(img => {
        axios.post(URL_API_IP + "image",{"url":img, "clientId": id})  
    })
  
}