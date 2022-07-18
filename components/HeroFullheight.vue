<template>
  <div class="hero is-dark is-fullheight has-background">
    <img src="https://cataas.com/cat?filter=pixel" alt="CAT" class="hero-background is-transparent">

    <div class="hero-body">
      <section class="section container is-max-desktop">
        <p class="title">
          We make video
          <router-link :to="{ path: '/games'}" class="flip-animate">
            <span data-hover="games">
              games
            </span>
          </router-link>
        </p>
        <p class="subtitle">
          There are cats in the background for some reason.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroFullheight'
}
</script>

<style lang="scss">
.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
    margin-top: -3.25em;
  }
  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;

    &.is-transparent {
      opacity: 0.3;
    }
  }
}
</style>
