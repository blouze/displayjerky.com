<template>
  <section class="section">
    <mailchimp-modal />
    <div class="columns is-mobile" />
  </section>
</template>

<script>
import MailchimpModal from '@/components/MailchimpModal.vue'
// import glsl from '@/static/glsl/basic.glsl'

export default {
  name: 'IndexPage',
  components: { MailchimpModal },

  mounted () {
    // const plugin = document.createElement('script')
    // plugin.setAttribute('src', '/js/shader-web-background.min.js')
    // plugin.async = true

    // plugin.onload = () => {
    //   const shader = document.createElement('script')
    //   shader.setAttribute('type', 'x-shader/x-fragment')
    //   shader.setAttribute('id', 'image')
    //   shader.textContent = glsl
    //   document.head.appendChild(shader)

    //   const script = document.createElement('script')
    //   script.setAttribute('src', '/glsl/basic.js')
    //   document.head.appendChild(script)
    // }

    // document.head.appendChild(plugin)
  }
}
</script>
