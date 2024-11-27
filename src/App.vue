<template>
  <header class="mt-8 mb-8 w-11/12 m-auto">
    <h1 class="text-5xl font-bold w-11">Deserts</h1>
  </header>
  <main>
    <section class="w-11/12 m-auto">
      <ProductCard
        v-for="(item, index) in productList"
        :key="item.name"
        :thumbnail="item.image.thumbnail"
        :mobile="item.image.mobile"
        :tablet="item.image.tablet"
        :desktop="item.image.desktop"
        :name="item.name"
        :category="item.category"
        :price="item.price"
        :quantity="item.quantity"
        :index="index"
        :add="addQuantity"
        :increment="increment"
        :decrement="decrement"
      />
    </section>
  </main>
</template>

<script>
// import IconPic from './components/IconPic.vue'
import ProductCard from './components/ProductCard.vue'
import data from '../data.json'
export default {
  components: {
    // IconPic,
    ProductCard,
  },
  data() {
    return {
      productList: data,
    }
  },
  methods: {
    addQuantity(item) {
      this.productList[item].quantity = 1
    },
    increment(item) {
      this.productList[item].quantity++
    },
    decrement(item) {
      this.productList[item].quantity--
    },
  },
  mounted() {
    // this.incrementQuantity()
  },
}
</script>
