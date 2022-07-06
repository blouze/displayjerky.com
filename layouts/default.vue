<template>
  <div>
    <nav-bar />

    <hero-fullheight v-if="$route.name === 'index'" />

    <div :class="{ main: $route.name !== 'index' }">
      <div class="main-content">
        <Nuxt />
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
  components: { NavBar, FooterSection, HeroFullheight },
  head () {
    return {
      bodyAttrs: {
        class: this.$route.name !== 'index' ? 'has-navbar-fixed-top' : ''
      },
      titleTemplate: (title) => {
        return this.$route.name === 'index' ? `${title}` : `${title} - ${this.$route.name}`
      },
      meta: [...createSEOMeta({ url: this.$route.fullPath })],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
