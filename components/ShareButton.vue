<template>
  <ShareNetwork v-bind="$props" tag="b-button" class="is-light">
    <span>
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </span>
    <span class="has-text-weight-bold flip-animate">
      <span data-hover="share">
        share
      </span>
    </span>
  </ShareNetwork>
</template>

<script>
export default {
  name: 'ShareButton',
  props: {
    network: {
      type: String,
      default: 'Twitter'
    },
    url: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  }
}
</script>
