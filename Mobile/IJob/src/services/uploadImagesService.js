import { CLIENT_ID, URL_API } from '../config/app.config'
import doFetch from './fetchService'


function uploadImage(files) {
    const data = new FormData()
    let urlsImages = []
    
    for (const file in files) {
        data.append('image', file)
        doFetch(URL_API, {
          method: 'POST',
          body: data,
          headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`,
          }
        })
        .then( (result) => {
            console.log(result)
        })
        .catch(console.error)
    }
  }

export default {
    uploadImage,
    doFetch
    }