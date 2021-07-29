<template>
  <div>
    <div class="mb-4">
      <form @submit.prevent="search">
        <input type="text" class="bg-gray-200 px-4 py-2 w-full border text-gray-600 border-gray-400 rounded" placeholder="Naskenuj čiarový kód" v-model="ean" autofocus>
      </form>
    </div>
    <div v-if="notFound" class="bg-yellow-100 p-3 mb-4">
      <p class="text-yellow-900">Pre zadaný čiarový kód nebola nájdená žiadna lokácia ani produkt</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ean: null,
      notFound: false
    }
  },
  methods: {
    search() {
      switch(parseInt(this.ean)) {
        case 1:
          this.$router.push('/location');
          break;
        case 2:
          this.$router.push('/product');
          break;
        default:
          this.notFound = true;
          this.ean = null;
      }
    },
  }
}
</script>
