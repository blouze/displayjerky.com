<template>
  <div>
    <nav-bar :type="navType" />

    <hero-fullheight v-if="$route.name === 'index'" />

    <div :class="{ main: $route.name !== 'index' }">
      <div class="main-content">
        <div class="container is-max-desktop">
          <Nuxt />
        </div>
      </div>
    </div>

    <footer-section />

    <CookieControl />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
import HeroFullheight from '../components/HeroFullheight.vue'
import { createSEOMeta } from '@/utils/seo'

export default {
  name: 'DefaultLayout',
  colorMode: 'dark',
  components: { NavBar, FooterSection, HeroFullheight },
  head () {
    return {
      titleTemplate: (title) => {
        return this.$route.name === 'index' ? `${title}` : `${title} - ${this.$route.name}`
      },
      meta: [...createSEOMeta({ url: this.$route.fullPath })],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  computed: {
    navType () {
      return this.$route.name === 'index' ? 'is-dark' : 'is-dark'
    }
  }
}
</script>

<style>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
