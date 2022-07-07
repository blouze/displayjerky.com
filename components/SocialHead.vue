<template>
  <div>
    lskdjflqskdjf
  </div>
</template>

<script>
import { createSEOMeta } from '@/utils/seo'

export default {
  name: 'SocialHead',
  props: { meta: { type: Object, default: () => ({}) } },
  head () {
    return {
      titleTemplate: title => `${this.meta.title} - ${title}`,
      meta: [...createSEOMeta(this.meta)]
    }
  }

}
</script>
