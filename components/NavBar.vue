<template>
  <b-navbar
    fixed-top
    :type="type"
    :class="{home: $route.name === 'index'}"
    wrapper-class="container is-max-desktop"
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        DisplayJerky
      </b-navbar-item>
    </template>

    <template #start />

    <template #end>
      <b-navbar-item
        v-for="(link, key) in links"
        :key="key"
        tag="router-link"
        :to="link.to"
        :class="{'is-active': $route.path === link.to}"
      >
        {{ key }}
      </b-navbar-item>

      <b-navbar-item
        v-for="(link, key) in social"
        :key="key"
        tag="a"
        :href="link.url"
      >
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
  data: () => ({
    social: process.env.social,
    links: {
      games: { to: '/games' },
      blog: { to: '/blog' },
      about: { to: '/about' }
    }
  }),
  computed: {
    type () {
      return this.$route.name === 'index' ? 'is-dark' : 'is-light'
    }
  }
}
</script>

<style lang="scss">
nav.navbar {
  &.home {
    background-color: transparent;
  }
}

.navbar-item {
  font-weight: bold;
}
</style>
