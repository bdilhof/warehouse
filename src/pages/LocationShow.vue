<template>
  <div>
    <table v-if="items.length" class="w-full bg-white mb-4">
      <thead class="bg-blue-400 text-white">
        <tr>
          <th class="text-left p-2">ID</th>
          <th class="text-left p-2">Artikel</th>
          <th class="text-left p-2">EAN</th>
          <th class="text-left p-2">Kusov</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" class="border-b border-blue-200 border-solid hover:bg-blue-100 transition-all">
          <td class="p-2">{{ item.id }}</td>
          <td class="p-2">{{ item.title }}</td>
          <td class="p-2">{{ item.ean }}</td>
          <td class="p-2">{{ item.count }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="bg-red-100">
      <p>No data</p>
    </div>
    <router-link :to="'/location'" class="block text-center bg-black text-white w-full p-2 mb-2">
      <font-awesome-icon icon="arrow-left" />
      <span>Naspäť</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Item 1',
          ean: '5056272391211',
          count: 4
        },
        {
          id: 2,
          title: 'Item 2',
          ean: '5051714917103',
          count: 7
        },
        {
          id: 3,
          title: 'Item 3',
          ean: '8720092263597',
          count: 1
        },
      ]
    }
  }
}
</script>
