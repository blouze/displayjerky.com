<template>
  <footer class="footer section has-background-black has-text-light">
    <div class="container is-max-desktop">
      <h4 class="title is-4 has-text-light">
        Follow us!
      </h4>

      <social-buttons />
    </div>
  </footer>
</template>

<script>
import SocialButtons from './footer/SocialButtons.vue'
export default {
  name: 'FooterSection',
  components: { SocialButtons }
}
</script>

<style>

</style>
