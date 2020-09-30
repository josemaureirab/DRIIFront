<template>
  <div id="auth-signIn">
    <v-row justify="center">
      <v-card class="my-5" raised :width="cardWidth" min-width="300" max-width="600" min-height="400" max-height="450">
        <v-card-text>
          <div v-if="authDialog">
            <h1 class="text-center mt-5">Iniciar Sesión</h1>
          </div>
          <div v-else>
            <h1 class="text-center mt-5">Ingreso Funcionario</h1>
            <h2 class="text-center mt-3">Inicia Sesión</h2>
          </div>
        </v-card-text>
        <v-card-text>
          <v-row justify="center">
            <v-form
              ref="signInForm"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                dense
                outlined
                :rules="[rules.required]"
                label="Nombre de Usuario"
              />
              <v-text-field
                dense
                outlined
                label="Contraseña"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="show ? 'text' : 'password'"
                counter
                @keyup.enter="trySignIn"
                @click:append="show = !show"/>
              <v-row justify="center">
                <v-btn @keyup.enter="trySignIn" @click="goToAccountAdm()" :disabled="signInLoader" :loading="signInLoader" class="btn-enter mt-2">
                  Entrar
                </v-btn>
              </v-row>
            </v-form>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row justify="center">
            <v-btn @click="goToRegister()" class="nim-btn" color="secondary" text>
              ¿Aún no tienes cuenta? ¡Has click aquí!
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn @click="goForget" class="nim-btn" color="secondary" text>
              ¿Has olvidado tu contraseña?
            </v-btn>
          </v-row>
          <v-row justify="center">
            <v-btn @click="goForget" class="nim-btn" color="secondary" text>
              Volver
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>

import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'auth-signIn',
  data: () => ({
    show: false,
    valid: false,
    cardWidth: 0,
    windowWidth: 0,
    signInLoader: false,
    signInInformation: {
      username: '',
      password: ''
    },
    rules: {
      required: value => !!value || 'Campo requerido.',
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
    ...mapActions([
      'signIn'
    ]),
    async trySignIn () {
      this.signInLoader = true
      if (this.$refs.signInForm.validate()) {
        const userCredentials = {
          username: this.signInInformation.username,
          password: this.signInInformation.password
        }
        await this.signIn(userCredentials)
      }
      this.signInLoader = false
    },
    goAuth () {
      this.authDialog = false
      router.push({ name: 'auth' })
    },
    goToAccountAdm () {
      router.push({ name: 'MenuAdministrator' })
    },
    goToRegisterInt () {
      router.push({ name: 'SignUp' })
    },
    goToRegister () {
      router.push({ name: 'SignUpUsach' })
    },
    goForget () {
      this.authDialog = false
      router.push({ name: 'forget' })
    },
    onResize () {
      this.windowWidth = window.innerWidth
      this.resizeCardWidth()
    },
    resizeCardWidth () {
      if (this.windowWidth > 530) {
        this.cardWidth = 400
      }
      if (this.windowWidth <= 530) {
        this.cardWidth = 400
      }
      if (this.windowWidth <= 400) {
        this.cardWidth = 380
      }
      if (this.windowWidth <= 375) {
        this.cardWidth = 325
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
  .nim-btn {
    text-transform: none !important;
  }
  .btn-enter {
    background-color: #f98a01 !important;
  }
</style>
