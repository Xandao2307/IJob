import { CLIENT_ID, URL_API } from '../config/app.config'


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

function doFetch(url, options){
    const promiseCallback = (resolve, reject) => {
      const getFetchJson = (response) => {
        if(!response.ok) return reject(response)
        return response.json().then(resolve)
      }

      fetch(url, options)
        .then(getFetchJson)
        .catch(reject)
    }
    return new Promise(promiseCallback)
  }

export default {
    uploadImage,
    doFetch
    }