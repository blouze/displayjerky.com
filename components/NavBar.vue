<template>
  <b-navbar spaced fixed-top type="is-dark" wrapper-class="container is-max-desktop">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        DisplayJerky
      </b-navbar-item>
    </template>

    <template #start />

    <template #end>
      <b-navbar-item
        v-for="(link, key) in links"
        :key="key"
        tag="nuxt-link"
        :to="{ path: '/games' }"
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
          <font-awesome-icon :icon="link.icon" />
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
      games: '/games',
      blog: '/blog',
      about: '/about'
    }
  })
}
</script>

<style>
nav.navbar.is-fixed-top {
  background: transparent;
}
</style>
