<template>
  <div class="p-5">
    <ul>
      <li v-for="(link, index) in links" :key="index" class="inline-block pr-2">
        <router-link :to="link.to" :active-class="'underline'">{{ link.name }}</router-link>
      </li>
    </ul>
    <main class="pt-5">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Homepage',
        to: '/'
      },
      {
        name: 'API',
        to: '/api'
      },
    ],
  })
}
</script>
