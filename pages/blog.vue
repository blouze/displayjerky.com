<template>
  <section class="section">
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData ({ $content }) {
    const page = await $content('blog').fetch()
    return {
      page
    }
  }
}
</script>
