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
  name: 'AboutPage',
  async asyncData ({ $content }) {
    const page = await $content('about').fetch()
    return {
      page
    }
  },
  head () {
    return {
      meta: [...createSEOMeta({
        title: 'About',
        description: 'Some words about DisplayJerky.',
        url: this.$route.fullPath
      })]
    }
  }
}
</script>
