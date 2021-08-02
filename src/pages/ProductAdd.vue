<template>
  <div>

    <div>
      <form @submit.prevent="search">
        <input type="text" class="bg-gray-200 px-4 py-2 w-full border text-gray-600 border-gray-400 rounded" placeholder="Čiarový kód" v-model="ean">
      </form>
    </div>

    <div v-if="items.length" class="my-4">
      <div v-for="(item, index) in items" class="flex items-center items-center bg-blue-50 mb-2 p-4">
        <div class="mr-4">
          <span class="text-2xl">{{ index + 1 }}</span>
        </div>
        <div class="mr-4 flex-grow overflow-ellipsis overflow-hidden whitespace-nowrap">
          <b>{{ item.title }}</b>
          <br>
          <i>{{ item.ean }}</i>
        </div>
        <div class="mr-4 flex">
          <button :disabled="item.count < 2" @click="item.count -= 1" class="disabled:opacity-50">
          <span class="fa-stack" style="vertical-align: top;">
            <i class="far fa-circle fa-stack-2x"></i>
            <i class="fas fa-minus fa-stack-1x"></i>
          </span>
          </button>
          <input type="text" v-model="item.count" class="w-10 mx-2 text-center">
          <button @click="item.count += 1">
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
    </div>

    <button v-if="items.length" @click="window.console.log('Pridaj položky')"
            class="my-2 block text-center bg-blue-400 hover:bg-blue-600 text-white w-full p-2">
      Pridať {{ items.length }} položiek
    </button>

    <router-link :to="'/location'" class="block text-center bg-black text-white w-full p-2">
      Naspäť na lokáciu
    </router-link>

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
          count: 1,
        },
        {
          id: 2,
          ean: '123456746413407',
          title: 'ASTICO S-ASTICO MID CUT SNEAKE',
          count: 1,
        },
        {
          id: 3,
          ean: '123456746413407',
          title: 'MYDORI S-MYDORI LC W SNEAKERS',
          count: 1,
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
          count: 1,
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
