<template>
  <b-modal
    v-model="isModalActive"
    trap-focus
    aria-role="dialog"
    aria-label="Subscribe Modal"
    close-button-aria-label="Close"
    aria-modal
  >
    <VueMailchimpEmailSignupForm v-bind="form" />
  </b-modal>
</template>

<script>
import { VueMailchimpEmailSignupForm } from 'vue-mailchimp-email-signup-form'

export default {
  name: 'MailchimpModal',
  components: { VueMailchimpEmailSignupForm },

  data () {
    return {
      form: {
        url: 'https://displayjerky.us17.list-manage.com/subscribe/post?u=ed56fe7bc3a089b12e7b5622b&id=ec155a6c0c',
        elementId: 'signup_form',
        title: 'Close this annoying popup and miss out on all the updates!'
      },

      isModalActive: true
    }
  }
}
</script>

<style >
.modal .modal-content {
  width: unset;
}
</style>
