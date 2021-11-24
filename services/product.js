import api from './api'

export default{
    getProducts() {
        return api.get('product');
    }
}