<template>
  <div id="auth-signIn">
    <v-row justify="center">
      

        <v-container>
      <v-row dense>
        <v-col cols="4">
          <v-card
            color="#385F73"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Gestión de Candidaturas</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            color="#1F7087"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Gestión de Convocatorias</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            color="#952175"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Gestión Becas y Financiamiento</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

       
      </v-row>
      <v-row dense>
        <v-col cols="4">
          <v-card
            color="#385F73"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Estudiantes Entrantes</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            color="#1F7087"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Estudiantes Salientes</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            color="#952175"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Gestión de Noticias</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

       
      </v-row>
      <v-row dense>
        <v-col cols="4">
          <v-card
            color="#385F73"
            dark
            class="cuadra"
          >
            <v-card-title class="headline">Gestión de Cuentas</v-card-title>

            <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>



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
  .cuadra{
      margin-left: 1% !important;
      margin-right: 1% !important;
      margin-top: 1% !important;
      margin-bottom: 1% !important;
  }
</style>























