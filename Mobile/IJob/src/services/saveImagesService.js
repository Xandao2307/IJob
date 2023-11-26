import axios from "axios";
import { Url_Api_IP } from "../config/app.config";


export async function saveImages(images,id){
    console.log("Salvando Imagens no banco de dados...");
    images.forEach(img => {
        axios.post(Url_Api_IP + "image",{"url":img, "clientId": id})  
    })
  
}