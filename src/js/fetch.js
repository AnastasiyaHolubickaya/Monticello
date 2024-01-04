function sendRequest(url) {
  return fetch(url).then(response => {
    if (response.ok) {

      return response.json()
    }

    return response.json().then(error => {
      const err = new Error('Request failed');

      err.data = error;
      err.status = response.status;

      throw err;
    })
  }).catch(error => {
    console.error('Async error:', error);
    throw error;
  });
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