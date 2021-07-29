<template>
  <div>
    <div>
      <div class="mb-4">
        <form @submit.prevent="search">
          <input type="text" class="bg-gray-200 px-4 py-2 w-full border text-gray-600 border-gray-400 rounded" placeholder="Čiarový kód" v-model="ean">
        </form>
      </div>
      <div class="bg-yellow-100 p-3 mb-4">
        <p class="text-yellow-900">Pre zadaný čiarový kód nebola nájdená žiadna lokácia ani produkt</p>
      </div>
    </div>
    <div v-if="items.length">
      <div v-for="(item, index) in items" class="flex items-center items-center bg-blue-50 mb-1 p-4">
        <div class="mr-4">
          <span class="text-2xl">{{ index + 1 }}</span>
        </div>
        <div class="mr-4 flex-grow overflow-ellipsis overflow-hidden whitespace-nowrap">
          <b>{{ item.title }}</b>
          <br>
          <i>{{ item.ean }}</i>
        </div>
        <div class="mr-4 flex">
          <button :disabled="item.count < 2" @click="item.count--" class="disabled:opacity-50">
          <span class="fa-stack" style="vertical-align: top;">
            <i class="far fa-circle fa-stack-2x"></i>
            <i class="fas fa-minus fa-stack-1x"></i>
          </span>
          </button>
          <input type="text" v-model="item.count" class="w-10 mx-2 text-center">
          <button @click="item.count++">
          <span class="fa-stack" style="vertical-align: top;">
            <i class="far fa-circle fa-stack-2x"></i>
            <i class="fas fa-plus fa-stack-1x"></i>
          </span>
          </button>
        </div>
        <div>
          <button @click="items.splice(index, 1);" class="bg-red-500 rounded p-2 text-white font-bold">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <button @click="window.console.log('Pridaj položky')"
              class="mt-4 mb-4 rounded bg-blue-500 hover:bg-blue-700 text-white p-4">
        Pridat {{ items.length }} položiek
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      false: false,
      items: [
        {
          id: 1,
          ean: '123456746413407',
          title: 'MYDORI S-MYDORI MC W SNEAKERS',
          count: 3,
        },
        {
          id: 2,
          ean: '123456746413407',
          title: 'ASTICO S-ASTICO MID CUT SNEAKE',
          count: 10,
        },
        {
          id: 3,
          ean: '123456746413407',
          title: 'MYDORI S-MYDORI LC W SNEAKERS',
          count: 6,
        },
        {
          id: 4,
          ean: '123456746413407',
          title: 'SKB S-KBY STRIPE SNEAKERS',
          count: 1,
        },
        {
          id: 5,
          ean: '123456746413407',
          title: 'KONBA D-KONBA CB BOOTS',
          count: 14,
        },
      ]
    }
  },
  methods: {
    search() {
      console.log('Search');
    }
  }
}
</script>
