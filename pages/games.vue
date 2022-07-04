<template>
  <section class="section">
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  name: 'GamesPage',
  async asyncData ({ $content }) {
    const page = await $content('games').fetch()
    return {
      page
    }
  }
}
</script>
