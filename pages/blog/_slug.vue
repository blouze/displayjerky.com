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

      <ShareNetwork network="twitter" :url="$route.fullPath" :title="article.title">
        Share
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
    const { title, description, img: image } = this.article
    return {
      titleTemplate: title => `${title} - ${this.article.title}`,
      meta: [...createSEOMeta({ title, description, url: this.$route.fullPath, image })]
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
