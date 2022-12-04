export const state = () => ({
  products: [],
  product: null
})

export const getters = {
  getProducts(state) {
    return state.products
  },
  getProduct(state) {
    return state.product
  },
}

export const mutations = {
  setProduct(state, product) {
    state.product = product
  }
}

export const actions = {
  async fetchProduct({ state, commit }, productId) {
    // make request
    const res = await this.$axios.$get(`products/${productId}`)
    commit('setProduct', res)
  }
}