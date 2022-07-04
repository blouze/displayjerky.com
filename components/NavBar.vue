<template>
  <div class="container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          DisplayJerky
        </b-navbar-item>
      </template>

      <template #start>
        <b-navbar-item tag="a" :href="social.twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </b-navbar-item>

        <b-navbar-item tag="a" :href="social.instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </b-navbar-item>

        <b-navbar-item tag="a" :href="social['itch.io']">
          <font-awesome-icon :icon="['fab', 'itch-io']" />
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/games' }">
          games
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/about' }">
          about
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/blog' }">
          blog
        </b-navbar-item>
      </template>

      <div class="navbar-burger">
        <span />
        <span />
        <span />
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    social: {
      twitter: 'https://twitter.com/DisplayJerky/',
      instagram: 'https://www.instagram.com/display_jerky/',
      'itch.io': 'https://displayjerky.itch.io/'
    }
  })
}
</script>

<style>

</style>
