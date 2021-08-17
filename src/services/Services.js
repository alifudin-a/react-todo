import axios from 'axios'

export const Todo = axios.create({
    baseURL: 'http://localhost:9001/api/',
    responseType: 'json',
})