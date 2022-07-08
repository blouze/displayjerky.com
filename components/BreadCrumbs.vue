<template>
  <b-breadcrumb
    v-if="Object.keys(breadcrumbs).length"
    align="is-left"
    size="is-small"
  >
    <b-breadcrumb-item v-for="(crumb, key) in breadcrumbs" :key="key">
      {{ crumb }}
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  computed: {
    breadcrumbs () {
      const pathBits = this.$route.path.split('/')
      if (pathBits.length > 1) {
        pathBits.shift()
        pathBits.pop()
        const items = [].concat(pathBits).reduce((acc, cur) => ({ ...acc, [cur]: cur }), { home: 'home' })
        return items
      } else {
        return {}
      }
    }
  }
}
</script>
