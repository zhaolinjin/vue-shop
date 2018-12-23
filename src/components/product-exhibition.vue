<template>
  <div class="product-container">
    <div class="img-container"></div>
    <div class="product-title">{{product.name}}</div>
    <div>已售: {{product.sales}} 件</div>
    <div class="product-color" :style="{background: product.color}"></div>
    <div class="product-price"> ¥ {{product.price}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: {
    product: Object
  },
  components: {

  }
}
</script>

<style scoped>
.product-container {
  width: 250px;
  border: 1px solid #cccccc;
  text-align: center;
  padding-bottom: 10px
}
.product-container > div {
  margin-top: 10px;
}
.img-container {
  width: 220px;
  height: 250px;
  margin: 10px auto;
  background-color: #cccccc;
}
.product-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid #cccccc;
  background-color: #cccccc;
}
.product-price {
  color: red;
}
</style>
