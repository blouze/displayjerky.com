<template>
  <div>
    <div class="buttons">
      <a v-for="(link, key) in links" :key="key" class="button is-dark is-large" :href="link.url">
        <span>
          <font-awesome-icon :icon="link.icon" size="lg" />
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialButtons',
  data: () => ({
    links: process.env.social
  })
}
</script>

<style lang="scss" scoped>
.buttons {
  display: unset;
}
</style>
