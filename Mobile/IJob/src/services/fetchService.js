export function doFetch(url, options){
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