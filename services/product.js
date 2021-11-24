import api from './api'

const END_POINT = 'product';

export default{
    getProducts() {
        return api.get(END_POINT);
    },

    getProduct(id) {
        return api.get(`${END_POINT}/${id}`);
    }
}