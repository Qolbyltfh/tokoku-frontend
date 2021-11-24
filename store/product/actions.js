import productService from '~/services/product'

export default {
    async actionGetProducts(context) {
        try {
            const response = await productService.getProducts(this)
            context.commit('setProducts', response)
        } catch (error) {
            console.log('error = ', error)
        }
    },
    async actionGetProduct(context, id){
        try {
          const response = await productService.getProduct(this, id)
          context.commit('setProduct', response)
        } catch (error) {
          console.log('error = ', error)
        }
      },
}

