<template>
  <section class="section container is-max-desktop">
    <h2 class="title is-2">
      {{ page.title }}
    </h2>
    <nuxt-content :document="page" />
  </section>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'

export default {
  name: 'GamesPage',
  async asyncData ({ $content }) {
    const page = await $content('games').fetch()
    return {
      page
    }
  },
  head () {
    return {
      meta: [...createSEOMeta({
        title: 'Games',
        description: 'Games by DisplayJerky.',
        url: this.$route.fullPath
      })]
    }
  }
}
</script>
