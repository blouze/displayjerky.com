<template>
  <b-navbar fixed-top :type="type" :class="{ home: $route.name === 'index' }" wrapper-class="container is-max-desktop">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-image :src="logoSrc" />
      </b-navbar-item>
    </template>

    <template #start />

    <template #end>
      <b-navbar-item
        v-for="(link, key) in links"
        :key="key"
        tag="router-link"
        :to="link.to"
        :class="{ 'is-active': $route.path === link.to }"
        class="flip-animate"
      >
        <span :data-hover="key">
          {{ key }}
        </span>
      </b-navbar-item>

      <b-navbar-item v-for="(link, key) in social" :key="key" tag="a" :href="link.url">
        <span>
          <font-awesome-icon :icon="link.icon" size="lg" />
        </span>
      </b-navbar-item>
    </template>

    <div class="navbar-burger">
      <span />
      <span />
      <span />
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    type: { type: String, default: 'is-dark' }
  },
  data: () => ({
    social: process.env.social,
    links: {
      games: { to: '/games' },
      blog: { to: '/blog' },
      about: { to: '/about' }
    }
  }),
  computed: {
    logoSrc () {
      return require(`@/assets/img/logo_${this.$route.path === '/' ? 'white' : 'white'}.png`)
    }
  }
}
</script>

<style lang="scss">
nav.navbar {
  &.home {
    background-color: transparent;
  }

  .navbar-item {
    font-weight: bold;
  }
}
</style>
