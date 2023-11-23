import { doFetch } from "./fetchService";
import { Url_Api } from "../config/app.config";
import axios from "axios";

export async function loginService(user) {
    // console.log('Enviando solicitação de login...');
    // let accessToken;
    // var data = new FormData();
    // data.append( "json", JSON.stringify( user ) );
    // doFetch(Url_Api + 'auth', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: data
    // })
    // .then((result) => {
    //     accessToken = result.token;
    //     console.log('Token recebido:', accessToken);
    // })
    // .catch(console.error);

    // return accessToken;
    const response = await axios.post("http://192.168.0.3:8080/auth",user)
    console.log(response.data);
}