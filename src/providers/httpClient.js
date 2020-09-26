import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default httpClient
