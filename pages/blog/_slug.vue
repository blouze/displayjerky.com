<template>
  <article>
    <section class="section container is-max-desktop">
      <div class="card">
        <div class="card-image">
          <b-image :src="article.img ? article.img : 'https://cataas.com/cat?filter=pixel'" :alt="article.alt" ratio="4by3" class="card">
            <template #placeholder>
              <b-skeleton
                class="skeleton-placeholder"
                height="100%"
              />
            </template>
          </b-image>
        </div>
      </div>
    </section>

    <section class="section container is-max-desktop">
      <h1 class="title is-2">
        {{ article.title }}
        <p v-if="article.description" class="subtitle is-3">
          {{ article.description }}
        </p>
        <p v-if="article.updatedAt" class="subtitle">
          {{ formatDate(article.updatedAt) }}
        </p>
      </h1>

      <ShareNetwork v-bind="share" class="button">
        <span><font-awesome-icon :icon="['fab', 'twitter']" /></span>
        <span>Share</span>
      </ShareNetwork>

      <nuxt-content :document="article" />
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
      meta: [...createSEOMeta({
        title: this.article.title,
        description: this.article.description,
        url: this.$route.path,
        image: this.article.img
      })]
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
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
::v-deep .b-skeleton {
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
