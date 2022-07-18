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
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h1 class="title is-size-4-mobile is-size-3-tablet">
        {{ title }}
      </h1>

      <p v-if="description" class="subtitle">
        {{ description }}
      </p>

      <div class="level is-mobile is-align-items-end">
        <div class="level-left">
          <time v-if="updatedAt" datetime="2016-1-1" class="heading">
            {{ formatDate(updatedAt) }}
          </time>
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
