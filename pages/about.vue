<template>
  <section class="section container is-max-desktop">
    <h2 class="title is-2">
      {{ page.title }}
    </h2>
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData ({ $content }) {
    const page = await $content('about').fetch()
    return {
      page
    }
  }
}
</script>
