<template>
  <div class="level">
    <div class="level-item has-text-centered">
      <div>
        <b-image :src="imgSrc" :alt="alt" class="mb-3" />
        <p class="heading">
          <slot />
        </p>
      </div>
    </div>
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
