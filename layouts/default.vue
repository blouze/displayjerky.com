<template>
  <div>
    <nav-bar />

    <hero-fullheight v-if="$route.name === 'index'" />

    <section class="columns" :class="{ main: $route.name !== 'index' }">
      <div class="main-content container column is-8">
        <Nuxt />
      </div>
    </section>

    <footer-section>
      <CookieControl />
    </footer-section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
import HeroFullheight from '../components/HeroFullheight.vue'

export default {
  name: 'DefaultLayout',
  components: { NavBar, FooterSection, HeroFullheight }
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
