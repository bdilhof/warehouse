<template>
  <div>
    <h1 class="text-xl font-bold mb-2">API Test</h1>
    <ul>
      <li><a @click.prevent="create" href="#" class="underline text-blue-500">Create</a></li>
      <li><a @click.prevent="update" href="#" class="underline text-blue-500">Update</a></li>
    </ul>
    <p v-if="created">Created work</p>
    <p v-if="updated">Updated work</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    created: false,
    updated: false,
  }),
  methods: {
    create: () => {
      axios.get('https://retail.test/api/warehouse/test');
    },
    update: () => {
      axios.get('https://retail.test/api/warehouse/test');
    },
  }
}
</script>
