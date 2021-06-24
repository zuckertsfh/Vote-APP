import axios from 'axios';
import querystring from 'querystring';
// import url from 'url';

let base_url = 'http://192.168.4.4:5000/api';

const loginApi = async ({request}) => {
  console.log(request);
  console.log(base_url + '/auth/user/signin');

  // JSON to x-www-form-urlencoded
  // ------------------------------------------------------------
  // Using manual Script
  //   var formBody = [];
  //   for (var property in request) {
  //     var encodedKey = encodeURIComponent(property);
  //     var encodedValue = encodeURIComponent(request[property]);
  //     formBody.push(encodedKey + '=' + encodedValue);
  //   }
  //   formBody = formBody.join('&');
  // ------------------------------------------------------------

  let data = querystring.stringify(request);
  return axios({
    method: 'post',
    headers: {
      'Content-Length': data.length,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    url: base_url + '/auth/user/signin',
    data: data,
  })
    .then(function (response) {
      console.log(response.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error.message);
      return null;
    });
};

export default loginApi;
