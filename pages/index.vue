<template>
  <section class="section">
    <div class="columns is-mobile">
      <VueMailchimpEmailSignupForm v-bind="form" />
    </div>
  </section>
</template>

<script>
import { VueMailchimpEmailSignupForm } from 'vue-mailchimp-email-signup-form'
import 'vue-mailchimp-email-signup-form/dist/vue-mailchimp-email-signup-form.css'

export default {
  name: 'IndexPage',
  components: { VueMailchimpEmailSignupForm },

  data () {
    return {
      form: {
        url: 'https://displayjerky.us17.list-manage.com/subscribe/post?u=ed56fe7bc3a089b12e7b5622b&id=ec155a6c0c',
        elementId: 'signup_form',
        title: 'Sign up to receive updates!'
      }
    }
  }
}
</script>

<style scoped>
.subscribe-container {
  font-family: unset
}

.subscribe-container__submit {

}
</style>
