<template>
  <div class="mt-6">
    <section class="section is-max-desktop">
      <h2 class="title is-size-3-mobile is-size-2-tablet">
        Currently working on
      </h2>

      <div class="columns is-align-items-end">
        <div class="column is-one-third">
          <b-image
            v-if="current_game.img"
            :src="current_game.img"
            :alt="current_game.title"
            ratio="4by3"
          >
            <template #placeholder>
              <b-skeleton
                class="skeleton-placeholder"
                height="100%"
              />
            </template>
          </b-image>

          <content-video v-else-if="current_game.vid" :src="current_game.vid" />
        </div>

        <div class="column">
          <p class="title is-4">
            {{ current_game.title }}
          </p>

          <time v-if="current_game.date" :datetime="formatDate(current_game.date)" class="subtitle heading">
            {{ formatDate(game.date, { year: 'numeric', month: 'long' }) }}
          </time>

          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-if="current_game.description" class="content" v-html="current_game.description" />

          <a
            v-if="current_game.link"
            :href="current_game.link.url"
            target="_blank"
            class="button is-dark is-outlined has-text-weight-bold flip-animate"
          >
            <span :data-hover="current_game.link.label">
              {{ current_game.link.label }}
            </span>
          </a>
        </div>
      </div>
    </section>

    <section class="section container is-max-desktop">
      <h2 class="title is-size-3-mobile is-size-2-tablet">
        Done
      </h2>

      <ul class="columns is-multiline">
        <li v-for="(game, index) of past_games" :key="index" class="column columns is-align-items-end">
          <div class="column is-one-third">
            <b-image
              :src="game.img"
              :alt="game.title"
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
            <p class="title is-4">
              {{ game.title }}
            </p>

            <time v-if="game.date" :datetime="formatDate(game.date)" class="subtitle heading">
              {{ formatDate(game.date, { year: 'numeric', month: 'long' }) }}
            </time>

            <!-- eslint-disable-next-line vue/no-v-html -->
            <p v-if="game.description" class="content" v-html="game.description" />

            <router-link
              v-if="game.article"
              :to="game.article.slug"
              class="button is-dark is-outlined has-text-weight-bold flip-animate mb-2"
            >
              <span :data-hover="game.article.label">
                {{ game.article.label }}
              </span>
            </router-link>

            <a
              v-if="game.link"
              :href="game.link.url"
              target="_blank"
              class="button is-dark is-outlined has-text-weight-bold flip-animate"
            >
              <span :data-hover="game.link.label">
                {{ game.link.label }}
              </span>
            </a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'
import { formatDate } from '@/utils/date'

export default {
  name: 'GamesPage',
  data: () => ({
    current_game: {
      title: 'TSU-CHI-TSU: Touch of Death - alpha',
      description: 'Hunt ghosts in a haunted "ryokan". Retro maze shooter for smartphone.<br/><br/>Alpha comming soon. Follow us to stay updated!',
      vid: '/video/tsu-chi-tsu_web.mp4',
      link: {
        label: '@DisplayJerky on twitter',
        url: 'https://twitter.com/DisplayJerky'
      }
    },
    past_games: [
      {
        title: 'The Meaning of Afterlife',
        date: 'Feb. 2022',
        description: 'It\'d be great if <b>Bob</b> could enjoy peace in his little shed in the woods, without hordes of crypto-zombies harassing him all night. Winner of AssetJam2022!',
        img: require('~/assets/img/games/meaning_afterlife.png'),
        link: {
          label: 'Play on itch.io',
          url: 'https://displayjerky.itch.io/meaningofafterlife'
        },
        article: {
          label: 'Read blog post',
          slug: '/blog/i-won-a-game-jam'
        }
      }
    ]
  }),
  head () {
    return {
      meta: [...createSEOMeta({
        title: 'Games',
        description: 'Games by DisplayJerky.',
        url: this.$route.fullPath
      })]
    }
  },
  methods: {
    formatDate
  }
}
</script>
