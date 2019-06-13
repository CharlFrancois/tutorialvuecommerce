<template>
  <!-- when using a component in a template Vue.js expects the DOM element to be
  lowercased and dasherized. e.g. ProductList -> product-list -->
  <manage-products/>
  <!-- use the <product-list> component here! -->
</template>

<script>
  import ManageProducts from "./components/ManageProducts"

  export default {
    name: 'App',
    components: {
      ManageProducts
    }
  }
</script>