const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const users__URL = 'https://reqres.in/api/users/2';
const register__URL = 'https://reqres.in/api/register';

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {},
  }).then((response) => {
    if (response.status >= 400) {
      // !response.ok
      return response.json().then((errResData) => {
        const error = new Error('Something went wrong!');
        error.data = errResData;
        throw error;
      });
    }
    return response.json();
  });
};
const getData = () => {
  sendHttpRequest('GET', users__URL).then((responseData) => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest('UPDATE', register__URL, {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  })
    .then((responseData) => {
      console.log(responseData);
    })

    .catch((err) => {
      console.log(err, err.data);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
