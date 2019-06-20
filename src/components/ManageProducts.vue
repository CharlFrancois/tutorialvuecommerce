<template>
  <section>
    <save-product-form
            :product="productInForm"
            v-on:submit="onFormSave"
            v-on:cancel="onFormCancel"
    ></save-product-form>
    <product-list
            :products="products"
            v-on:edit="onEditClicked"
            v-on:remove="onRemoveClicked"
    ></product-list>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import ProductList from '@/components/ManageProducts/ProductList'
  import SaveProductForm from '@/components/ManageProducts/SaveProductForm'
  import uuid from 'uuid'
  const initialData = () => {
    return{
      productInForm:{
        id: null,
        name: '',
        description: '',
        price: null
      }
    }
  }

  export default {
    name: 'ManageProducts',
    components: {
      ProductList,
      SaveProductForm
    },
    computed: mapGetters({
      products:'getProducts'
    }),
    data: initialData,
    methods:{
      ...mapActions([
        'saveProduct',
        'deleteProduct'
      ]),

      onFormSave (product) {
        this.saveProduct(product)

        this.resetProductInForm()
      },
      onFormCancel () {
        this.resetProductInForm()
      },
      resetProductInForm () {
        this.productInForm = initialData().productInForm
      },
      onEditClicked (product) {
        this.productInForm={...product}
      },
      onRemoveClicked (productId) {
        this.deleteProduct(productId)

        if (productId === this.productInForm.id) {
          this.resetProductInForm()
        }
      }
    }
  }
</script>

<style scoped>
</style>