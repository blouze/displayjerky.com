<template>
  <div>
    <video
      width="100%"
      autoplay
      loop
      muted
    >
      <source :src="src" :type="type">
    </video>
    <p class="heading has-text-centered">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContentVideo',
  props: {
    src: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'video/mp4'
    }
  }
}
</script>
