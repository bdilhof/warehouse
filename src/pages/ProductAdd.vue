<template>
  <div>

    <div class="mb-4">
      <form @submit.prevent="search">
        <input type="text" class="bg-gray-200 px-4 py-2 w-full border text-gray-600 border-gray-400 rounded" placeholder="Čiarový kód">
      </form>
    </div>

    <transition-group v-if="items.length" name="list" tag="div" class="flex flex-col space-y-2 mb-4">
      <div v-for="(item, index) in items" v-bind:key="item.id" class="flex items-center items-center bg-blue-50 p-4">
        <div class="mr-4">
          <span class="text-2xl">{{ index + 1 }}</span>
        </div>
        <div class="mr-4 flex-grow overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span class="block font-bold">{{ item.title }}</span>
          <span class="block italic">{{ item.ean }}</span>
        </div>
        <div class="mr-4 flex">
          <button :disabled="item.count < 2" @click="item.count -= 1" class="bg-blue-500 p-2 text-white font-bold rounded-l">
            <font-awesome-icon icon="minus" />
          </button>
          <input type="text" v-model="item.count" class="w-10 border-t border-b border-blue-500 text-center font-bold">
          <button @click="item.count += 1" class="bg-blue-500 p-2 text-white font-bold rounded-r">
            <font-awesome-icon icon="plus" />
          </button>
        </div>
        <div>
          <button @click="items.splice(index, 1);" class="bg-red-500 rounded p-2 text-white font-bold">
            <font-awesome-icon icon="trash-alt" />
          </button>
        </div>
      </div>
    </transition-group>

    <button v-if="items.length" @click="addItems"
            class="my-4 block text-center bg-blue-400 hover:bg-blue-600 text-white w-full p-2">
      Pridať {{ items.length }} položiek
    </button>

    <router-link :to="'/location'" class="block text-center bg-black text-white w-full p-2">
      <font-awesome-icon icon="arrow-left" />
      <span>Naspäť</span>
    </router-link>

  </div>
</template>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

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
  mounted() {
    //
  },
  methods: {
    search() {
      console.log('Search');
    },
    addItems() {
      let payload = JSON.stringify(this.items, null, 2);
      console.log(payload);
    }
  }
}
</script>
