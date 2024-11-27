<template>
  <article class="">
    <div class="max-w-fit">
      <figure class="mb-0">
        <img :src="mobile" alt="dessert" class="rounded-lg" />
        <figcaption></figcaption>
      </figure>
      <button
        class="w-fit m-auto border border-rose_400 rounded-full px-6 py-2 font-medium bg-white relative -top-5 flex justify-center items-center gap-2 hover:shadow-lg"
        v-if="!quantity"
        @click="addQty"
      >
        <IconPic icon="cart" /> <span class="block">Add to Cart</span>
      </button>
      <div
        class="w-36 m-auto py-1.5 rounded-full font-medium bg-red relative -top-5 flex justify-around items-center gap-2 hover:shadow-lg mb-1.5"
        v-if="quantity"
      >
        <button @click="decrementQty"><IconPic icon="decrement" /></button>
        <span class="block text-white">{{ quantity }}</span>
        <button @click="incrementQty"><IconPic icon="increment" /></button>
      </div>
      <div>
        <p class="text-rose_400 text-sm">{{ category }}</p>
        <h2 class="text-rose_900 font-medium">{{ name }}</h2>
        <p class="text-red font-medium">${{ price }}</p>
      </div>
    </div>
  </article>
</template>
<script>
import IconPic from './IconPic.vue'
export default {
  data() {
    return {
      count: 0,
    }
  },
  components: {
    IconPic,
  },
  props: [
    'thumbnail',
    'mobile',
    'tablet',
    'desktop',
    'name',
    'category',
    'price',
    'add',
    'quantity',
    'index',
    'increment',
    'decrement',
  ],
  computed: {},
  methods: {
    addQty() {
      this.add(this.index)
    },
    incrementQty() {
      this.increment(this.index)
    },
    decrementQty() {
      this.decrement(this.index)
    },
  },
  mounted() {},
}
</script>
