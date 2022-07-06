<template>
  <div class="level">
    <div v-for="network, key in social" :key="key" class="level-item">
      <ShareNetwork :network="twitter" :url="$route.fullPath" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialShare'
}
</script>
