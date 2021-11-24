import axios from 'axios'
import config from './../config'

const { BASE_URL } = config

const api = axios.create({
    baseURL: BASE_URL
});

export default api;