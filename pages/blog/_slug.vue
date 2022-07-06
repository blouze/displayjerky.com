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
        <div class="card-content">
          <h1 class="title is-size-4-mobile is-size-2-tablet">
            {{ article.title }}
            <p v-if="article.description" class="subtitle is-size-6-mobile is-size-4-tablet">
              {{ article.description }}
            </p>
          </h1>

          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <p v-if="article.updatedAt" class="subtitle is-size-6-mobile is-size-4-tablet">
                  {{ formatDate(article.updatedAt) }}
                </p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <ShareNetwork v-bind="share" tag="b-button" class="is-light">
                  <span><font-awesome-icon :icon="['fab', 'twitter']" /></span>
                  <span class="has-text-weight-bold">share</span>
                </ShareNetwork>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section container is-max-desktop">
      <nuxt-content :document="article" />
    </section>
  </article>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'
import { formatDate } from '@/utils/date'

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
    formatDate
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
