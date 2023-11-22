import { Client_Id, Url_Api } from '../config/app.config'
import {doFetch} from './fetchService'

export async function uploadImage(files) {
  const data = new FormData()
  let urlsImages = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]

    data.append('image', file.base64)
    await doFetch(Url_Api, {
      method: 'POST',
        body: data,
        headers: {
          'Authorization': `Client-ID ${Client_Id}`,
          }
        })
      .then( (result) => {
        urlsImages.push(result.data.link)
      })
      .catch(console.error)
  }
  return urlsImages
}
