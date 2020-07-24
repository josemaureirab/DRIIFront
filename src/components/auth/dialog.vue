<template>
  <div id="authDialog">
    <v-dialog
      v-model="authDialog"
      :width="dialogWidth">
      <auth-signIn/>
    </v-dialog>
  </div>
</template>

<script>

import AuthSignIn from '@/components/auth/signIn'

export default {
  name: 'authDialog',
  components: {
    AuthSignIn
  },
  data: () => ({
    show: false,
    valid: false,
    dialogWidth: 0,
    windowWidth: 0,
    signUpInformation: {
      enterpriseName: '',
      enterpriseEntry: '',
      enterpriseEmail: '',
      enterpriseAddress: '',
      username: '',
      password: ''
    },
    termsAndConditions: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Mínimo 6 carácteres'
    }
  }),
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  created () {
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
      this.resizeDialogWidth()
    },
    resizeDialogWidth () {
      if (this.windowWidth > 530) {
        this.dialogWidth = 400
      }
      if (this.windowWidth <= 530) {
        this.dialogWidth = 400
      }
      if (this.windowWidth <= 400) {
        this.dialogWidth = 380
      }
      if (this.windowWidth <= 375) {
        this.dialogWidth = 325
      }
    }
  },
  computed: {
    authDialog: {
      get () { return this.$store.state.authDialog },
      set (payload) { this.$store.commit('setAuthDialog', payload) }
    }
  }
}
</script>

<style scoped>

</style>
