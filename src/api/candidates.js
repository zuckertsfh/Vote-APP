import axios from 'axios';
import querystring from 'querystring';

let base_url = 'http://192.168.4.4:5000/api';

const getCandidates = async token => {
  //   let data = querystring.stringify(request);
  return axios({
    method: 'get',
    // auth: ,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    url: base_url + '/user/candidate',
    params: {
      mission: 1,
    },
  })
    .then(function (response) {
      console.log(response.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log('This is an error from api');
      console.log(error);
      console.log(error.request);
      return null;
    });
};

export default getCandidates;
