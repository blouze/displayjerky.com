<template>
  <div class="column is-three-quarters is-align-self-center">
    <blog-card v-bind="article" class="mb-6">
      <share-button v-bind="share" />
    </blog-card>

    <section class="section container">
      <nuxt-content class="blog-article" :document="article" tag="article" />

      <div class="level mt-6">
        <div class="level-left" />
        <div class="level-right">
          <div class="level-item">
            <share-button v-bind="share" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'

export default {
  scrollToTop: true,
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article: { ...article, title: article.title.replace(/ ([^ ]*)$/, '\xA0$1') } } // .replace(/ ([^ ]*)$/, '\xA0$1')
  },
  head () {
    return {
      titleTemplate: title => `${this.article.title} - ${title}`,
      meta: [
        ...createSEOMeta({
          title: this.article.title,
          description: this.article.description,
          url: this.$route.path,
          image: this.article.img
        })
      ]
    }
  },
  computed: {
    share () {
      return {
        network: 'twitter',
        url: `${process.env.HOST_NAME}${this.$route.path}`,
        title: this.article.title,
        description: this.article.description
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .b-skeleton {
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
