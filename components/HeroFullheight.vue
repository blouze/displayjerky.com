<template>
  <div class="hero is-dark is-fullheight has-background">
    <img src="https://cataas.com/cat?filter=pixel" alt="CAT" class="hero-background is-transparent">

    <div class="hero-body">
      <div class="container is-max-desktop">
        <p class="title">
          We make games!
        </p>
        <p class="subtitle">
          That's what we do.
        </p>
      </div>
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
