<template>
  <section class="section container is-max-desktop">
    <h1 class="title is-1">
      Blog
    </h1>

    <ul class="columns is-multiline mt-6">
      <li v-for="article of articles" :key="article.slug" class="column is-three-quarters columns">
        <div class="column is-one-quarter">
          <b-image
            :src="article.img ? article.img : 'https://cataas.com/cat?filter=pixel'"
            :alt="article.alt"
            ratio="4by3"
          >
            <template #placeholder>
              <b-skeleton
                class="skeleton-placeholder"
                height="100%"
              />
            </template>
          </b-image>
        </div>

        <div class="column">
          <p class="title is-4 mb-0">
            <router-link
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              {{ article.title }}
            </router-link>
          </p>

          <time datetime="2016-1-1" class="header">
            {{ formatDate(article.updatedAt) }}
          </time>

          <nav class="level is-mobile">
            <div class="level-left">
              <p class="subtitle is-5">
                {{ article.description }}
              </p>
            </div>

            <div class="level-right">
              <router-link
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="button is-outlined is-dark is-expanded"
              >
                <span>
                  <!-- <font-awesome-icon :icon="['fab', 'twitter']" /> -->
                </span>
                <span class="has-text-weight-bold flip-animate">
                  <span data-hover="Read">
                    Read
                  </span>
                </span>
              </router-link>
            </div>
          </nav>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'
import { formatDate } from '@/utils/date'

export default {
  name: 'BlogPage',
  async asyncData ({ $content, params }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { articles }
  },
  head () {
    return {
      meta: [...createSEOMeta({
        title: 'Blog',
        description: 'Blog posts by DisplayJerky.',
        url: this.$route.fullPath
      })]
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
