<template>
  <article>
    <section class="container is-max-desktop">
      <blog-card v-bind="article">
        <share-button v-bind="share" />
      </blog-card>
    </section>

    <section class="section container is-max-desktop">
      <nuxt-content class="blog-article" :document="article" />
    </section>
  </article>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'

export default {
  async asyncData ({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
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
/*
.blog-article {
  & > p {
    &:first-of-type {
        &:first-letter {
            font-family: "ChiKareGo2";
        }
    }
  }
} */

</style>
