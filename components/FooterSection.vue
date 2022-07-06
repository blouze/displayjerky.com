<template>
  <footer class="footer section">
    <div class="container is-max-desktop">
      <div class="columns is-align-items-start">
        <ul class="column level is-mobile">
          <li v-for="(link, key) in links" :key="key" class="level-item">
            <router-link
              class="button is-text title is-4"
              :class="{'is-active': $route.path === link.to}"
              :to="link.to"
            >
              {{ key }}
            </router-link>
          </li>
        </ul>

        <div class="column columns">
          <div class="column has-text-centered">
            <h4 class="title is-4">
              Follow us!
            </h4>

            <div class="column is-align-self-center">
              <social-buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialButtons from './footer/SocialButtons.vue'
export default {
  name: 'FooterSection',
  components: { SocialButtons },
  data: () => ({
    links: {
      games: { to: '/games' },
      blog: { to: '/blog' },
      about: { to: '/about' }
    }
  })
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
</style>
