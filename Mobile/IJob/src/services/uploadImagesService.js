import { Client_Id_Imgur, Url_Api_Imgur } from '../config/app.config'
import {doFetch} from './fetchService'

export async function uploadImage(files) {
  const data = new FormData()
  let urlsImages = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    console.log("Mandando a imagem...");
    
    data.append('image', file.base64)
    await doFetch(Url_Api_Imgur, {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Client-ID ${Client_Id_Imgur}`,
        }
      })
      .then( (result) => {
        urlsImages.push(result.data.link)
      })
      .catch(console.error)
  }
  return urlsImages
}
