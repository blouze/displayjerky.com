<template>
  <section class="section container is-max-desktop">
    <VueMailchimpEmailSignupForm v-bind="form" />
  </section>
</template>

<script>
import { VueMailchimpEmailSignupForm } from 'vue-mailchimp-email-signup-form'
// import glsl from '@/static/glsl/basic.glsl'

export default {
  name: 'IndexPage',
  components: { VueMailchimpEmailSignupForm },
  data () {
    return {
      form: {
        url: 'https://displayjerky.us17.list-manage.com/subscribe/post?u=ed56fe7bc3a089b12e7b5622b&id=ec155a6c0c',
        elementId: 'signup_form',
        title: 'Signup, receive updates about our games!'
      },

      isModalActive: true
    }
  },
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
