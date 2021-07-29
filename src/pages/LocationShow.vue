<template>
  <div>
    <h1>Location Title</h1>
    <table v-if="items.length" class="bg-purple-300 w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.count }} pcs</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="bg-red-100">
      <p>No data</p>
    </div>
    <router-link :to="'/location'">
      Back
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
          count: 4
        },
        {
          id: 2,
          title: 'Item 2',
          count: 7
        },
        {
          id: 3,
          title: 'Item 3',
          count: 1
        },
      ]
    }
  }
}
</script>
