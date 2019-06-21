<template>
  <section>
    <ul v-for="product in products" track-by="id">
      <li>{{product.name}}</li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    name: "ProductCatalog",
    computed: mapGetters({
      products: 'getProducts'
    })
  }
</script>

<style scoped>

</style>