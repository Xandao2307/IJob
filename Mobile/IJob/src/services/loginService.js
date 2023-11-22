import { doFetch } from "./fetchService";
import { Url_Api } from "../config/app.config";

export async function loginService(user) {
    console.log('Enviando solicitação de login...');
    let accessToken;
    await doFetch(Url_Api + 'auth', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then((result) => {
        accessToken = result.token;
        console.log('Token recebido:', accessToken);
    })
    .catch(console.error);

    return accessToken;
}