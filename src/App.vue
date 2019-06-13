<template>
  <!-- when using a component in a template Vue.js expects the DOM element to be
  lowercased and dasherized. e.g. ProductList -> product-list -->
  <product-list></product-list>
  <!-- use the <product-list> component here! -->
</template>

<script>
  import ProductList from './components/productlist'

  export default {
    components: {
      ProductList
    }
  }
</script>