<template>
  <div>

    <div class="mb-4">
      <form @submit.prevent="search">
        <input type="text" class="bg-gray-200 px-4 py-2 w-full border text-gray-600 border-gray-400 rounded" placeholder="Čiarový kód">
      </form>
    </div>

    <div v-if="!location && !product" class="bg-yellow-100 p-3 mb-4">
      <p class="text-yellow-900">Pre zadaný čiarový kód nebola nájdená žiadna lokácia ani produkt</p>
    </div>

    <div v-if="location" class="bg-blue-100 p-3 mb-4">
      <h3 class="font-bold mb-2">Location found</h3>
      <ul>
        <li><a href="#">Zobraziť položky</a></li>
        <li><a href="#">Pridať položky</a></li>
      </ul>
      <a href="#">&lt; Back</a>
    </div>

    <div v-if="product" class="bg-blue-100 p-3 mb-4">
      <h3 class="font-bold mb-2">Product found</h3>
      <ul>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      product: false,
      location: false,
    }
  },

  methods: {
    search(value) {
      this.product = {
        name: 'Testing Product',
        ean: '1234567890',
        brand: 'GANT'
      };
    }
  }
}
</script>
