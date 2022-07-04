<template>
  <div class="buttons">
    <a v-for="(link, key) in links" :key="key" class="button is-small is-responsive is-outlined" :href="link.url">
      <span>
        <font-awesome-icon :icon="link.icon" />
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialNav'
}
</script>
