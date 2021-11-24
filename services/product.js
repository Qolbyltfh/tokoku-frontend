import api from './api'

export default{
    getProducts : (context) => api.get(context, 'products'),
}