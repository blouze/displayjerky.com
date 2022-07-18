<template>
  <footer class="footer">
    <div class="container is-max-desktop">
      <div class="columns is-align-items-end">
        <div class="column">
          <ul class="level is-mobile">
            <li v-for="(link, key) in links" :key="key" class="level-item has-text-centered">
              <router-link
                :class="{'is-active': $route.path === link.to}"
                class="button is-medium heading flip-animate"
                :to="link.to"
              >
                <span :data-hover="key">
                  {{ key }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="column">
          <div class="has-text-centered">
            <h4 class="title is-4">
              Follow us!
            </h4>

            <div class="is-align-self-center">
              <social-buttons />
            </div>
          </div>
        </div>
      </div>

      <div class="column heading has-text-centered">
        Copyright © {{ currentYear }} DisplayJerky
      </div>
    </div>
  </footer>
</template>

<script>
import SocialButtons from './footer/SocialButtons.vue'
import { currentYear } from '@/utils/date'

export default {
  name: 'FooterSection',
  components: { SocialButtons },
  data: () => ({
    links: {
      games: { to: '/games' },
      blog: { to: '/blog' },
      about: { to: '/about' }
    }
  }),
  computed: {
    currentYear
  }
}
</script>

<style lang="scss">
ul.footer-nav {
  li {
    flex: 1;

    /* &:after {
      content: "•";
      font-size: 2rem;
    } */
  }
}

.level-item {
  font-weight: bold;
}
</style>
