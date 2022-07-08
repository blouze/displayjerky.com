<template>
  <div class="card">
    <div class="card-image">
      <b-image
        :src="img || 'https://cataas.com/cat?filter=pixel'"
        :alt="alt || ''"
        ratio="4by3"
        class="card"
      >
        <template #placeholder>
          <b-skeleton class="skeleton-placeholder" height="100%" />
        </template>
      </b-image>
    </div>

    <div class="card-content">
      <h1 class="title is-size-4-mobile is-size-2-tablet">
        {{ title }}
        <p v-if="description" class="subtitle is-size-6-mobile is-size-4-tablet">
          {{ description }}
        </p>
      </h1>

      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p v-if="updatedAt" class="subtitle is-size-6-mobile is-size-4-tablet">
              {{ formatDate(updatedAt) }}
            </p>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utils/date'

export default {
  name: 'BlogCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    updatedAt: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate
  }
}
</script>
