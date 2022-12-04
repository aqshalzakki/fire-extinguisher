<template>
  <div class="container">
    {{ product.id }}
    {{ product.title }}
  </div>  
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  async fetch() {
    const { id } = this.$route.params
    const res = await this.$axios.get(`products/${id}`)
    this.product = res.data
  }
}
</script>

<style scoped>

</style>