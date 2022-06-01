<template>
  <section class="section">
    <div class="columns is-mobile">
      <article>
        <h1 class="title">
          {{ page.title }}
        </h1>
        <nuxt-content :document="page" />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TsuChiTsuIndexPage',
  components: {},
  async asyncData ({ $content }) {
    const page = await $content('tsu-chi-tsu/index').fetch()
    return {
      page
    }
  }
}
</script>
