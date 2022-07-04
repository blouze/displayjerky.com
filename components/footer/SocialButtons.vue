<template>
  <div>
    <div class="buttons">
      <a v-for="(link, key) in links" :key="key" class="button is-dark" :href="link.url">
        <span>
          <font-awesome-icon :icon="link.icon" size="xl" />
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
