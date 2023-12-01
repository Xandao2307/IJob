export function doFetch(url, options) {
    console.log(url);
  const promiseCallback = (resolve, reject) => {
      const getFetchJson = (response) => {
          if (!response.ok) {
              console.error('Erro na resposta da API:', response.status, response.statusText);
              return reject(response);
          }
          return response.json().then(resolve);
      }

      fetch(url, options)
          .then((response)=>{ getFetchJson(response)})
          .catch((error) => {
              console.error('Erro na solicitação da API:', error);
              reject(error);
          });
  }
  return new Promise(promiseCallback);
}