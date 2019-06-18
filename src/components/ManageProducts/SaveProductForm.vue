<template>
  <form>
    <div class="form-group">
      <label for="productName">Product name</label>
      <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
      <p class="text-danger" v-html="formErrors.name"/>
    </div>
    <div class="form-group">
      <label for="productDescription">Product description <small class="text-muted">(optional)</small></label>
      <textarea class="form-control" v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
      <p class="text-danger" v-html="formErrors.description"/>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price" number>
      <p class="text-danger" v-html="formErrors.price"/>
    </div>
    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">
      {{ product.id ? 'Edit product' : 'Add product' }}
    </button>
    <button v-if="product.id" v-on:click.prevent="onCancel" class="btn btn-secondary">Cancel</button>
  </form>
</template>

<script>
  const initialFormErrors = () => {
    return {
      name: null,
      description: null,
      price: null
    }
  }

  export default {
    name: "SaveProductForm",
    props: {
      product: {
        type: Object,
        default: () => {
          return {
            id: null,
            name: '',
            description: '',
            price: null
          }
        }
      },
    },

    data () {
      return {
        formErrors: initialFormErrors()
      }
    },

    watch: {
      'product.id' (newValue, oldValue) {
        this.formErrors = initialFormErrors()
      }
    },

    methods:{
      onSubmit () {
        if (this.validateForm()) this.$emit('submit', this.product)
      },

      onCancel () {
        this.$emit('cancel')
      },

      validateForm () {
        let nameOK = this.product.name !== '' && typeof this.product.name === 'string'
        let descriptionOK = this.product.description ? typeof this.product.description === 'string' : true
        let priceOK = this.product.price !== null && this.product.price > 0 && typeof this.product.price === 'string'

        if (!nameOK) this.formErrors.name = 'Error in name field'
        if (!descriptionOK) this.formErrors.description = 'Error in description field'
        if (!priceOK) this.formErrors.price = 'Error in price field'

        return nameOK && descriptionOK && priceOK
      }
    }
  }
</script>

<style scoped>

</style>