function sendRequest(url) {
  return fetch(url).then(response => {
    if (response.ok) {

      return response.json()
    }

    return response.json().then(error => {
      const err = new Error('error');

      err.data = error;

      throw err;
    })
  })
}

export default sendRequest;

//for POST
//const headers = {
//     'Content-Type': 'application/json'
//   };
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(response => {
//     return response.json()
//   })