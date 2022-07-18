<template>
  <section class="section">
    <ul class="columns is-multiline">
      <li v-for="article of articles" :key="article.slug" class="column columns is-align-items-end">
        <div class="column is-one-third">
          <router-link
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <b-image
              :src="article.img ? article.img : 'https://cataas.com/cat?filter=pixel'"
              :alt="article.alt"
              ratio="1by1"
            >
              <template #placeholder>
                <b-skeleton
                  class="skeleton-placeholder"
                  height="100%"
                />
              </template>
            </b-image>
          </router-link>
        </div>

        <div class="column">
          <p class="title is-4 mb-0">
            <router-link
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              {{ article.title }}
            </router-link>
          </p>

          <time v-if="article.updatedAt" datetime="2016-1-1" class="heading">
            {{ formatDate(article.updatedAt) }}
          </time>

          <p class="content">
            {{ article.description }}
          </p>

          <b-navbar-item
            tag="router-link"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="button is-dark is-outlined has-text-weight-bold flip-animate"
          >
            <span data-hover="Read this">
              Read this
            </span>
          </b-navbar-item>
        </div>
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
  scrollToTop: true,
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
