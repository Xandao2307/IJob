import { CLIENT_ID_IMGUR, URL_API_IMGUR } from '@env'
import {doFetch} from './fetchService'

export async function uploadImage(files) {
  const data = new FormData()
  let urlsImages = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    console.log("Mandando a imagem...");
    
    data.append('image', file.base64)
    await doFetch(URL_API_IMGUR, {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Client-ID ${CLIENT_ID_IMGUR}`,
        }
      })
      .then( (result) => {
        urlsImages.push(result.data.link)
      })
      .catch(console.error)
  }
  return urlsImages
}
