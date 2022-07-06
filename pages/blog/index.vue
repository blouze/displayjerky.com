<template>
  <section class="section container is-max-desktop">
    <h1 class="title is-1">
      Blog
    </h1>

    <ul class="columns is-multiline">
      <li v-for="article of articles" :key="article.slug" class="column is-half card">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="card-image">
            <b-image :src="article.img ? article.img : 'https://cataas.com/cat?filter=pixel'" :alt="article.alt" ratio="4by3">
              <template #placeholder>
                <b-skeleton
                  class="skeleton-placeholder"
                  height="100%"
                />
              </template>
            </b-image>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ article.title }}
                </p>
                <p class="subtitle is-5">
                  {{ article.description }}
                </p>
              </div>
            </div>

            <div class="content">
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'

export default {
  name: 'BlogPage',
  async asyncData ({ $content, params }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'img', 'slug', 'author'])
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
