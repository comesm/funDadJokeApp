import axios from 'axios';

const options = {
      method: 'GET',
      url: 'https://icanhazdadjoke.com/',
      headers:
        {
          "Accept": "application/json" //,
          // "User-Agent": "SimpleJokeApp"
        }
    }

function requestWrapper() {

  return new Promise((resolve, reject) => {
    axios(options)
     .then(response => {
      return resolve(response.data.joke);
      //this.setState({joke: response.data.joke});
     })
     .catch(err => {
       return reject(err);
     });
  })

}


export default requestWrapper;