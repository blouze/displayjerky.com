<template>
  <div class="mx-4 my-6">
    <b-image :src="imgSrc" :alt="alt" class="mb-3" />
    <p class="heading has-text-centered">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContentImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    imgSrc () {
      return require(`~/assets/img/blog/${this.src}`)
    }
  }
}
</script>
