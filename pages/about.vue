<template>
  <section class="section">
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
