<template>
  <div id="auth-signUp">
    <v-row justify="center">
    <v-card class="my-5" raised :width="cardWidth" min-width="300" max-width="800" min-height="500" max-height="1800">
      <v-card-text>
        <h1 class="text-center mt-3">Registro estudiante USACH</h1>
      </v-card-text>
      <v-card-text>
        <v-row justify="center">
          <v-container>
            <v-form
              ref="signUpForm"
              v-model="valid"
              lazy-validation>
              <v-text-field
                dense
                required
                outlined
                v-model="suitor.name"
                :rules="[rules.required]"
                label="Nombre Completo"/>
                
              <v-text-field
                dense
                outlined
                required
                auto-complete=false
                v-model="suitor.rut"
                :rules="[rules.required, rules.min]"
                label="Rut"/>
              <v-text-field
                dense
                type="number"
                outlined
                required
                v-model="suitor.incomeYear"
                :rules="[rules.required]"
                label="Año de Ingreso"/>
              <v-text-field
                dense
                type="number"
                outlined
                required
                v-model="suitor.incomeSemester"
                :rules="[rules.required]"
                label="Semestre de Ingreso"/>
              <v-text-field
                dense
                type="number"
                outlined
                required
                :rules="[rules.required]"
                v-model="suitor.actualSemester"
                label="Semestre Actual"/>
              <v-text-field
                dense
                outlined
                required
                :rules="[rules.required, rules.email]"
                v-model="suitor.email"
                label="Correo electrónico"/>
              <!-- <v-text-field
                dense
                outlined
                required
                v-model="suitor.password"
                label="Contraseña"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                hint="6 caracteres mínimo"
                counter
                @click:append="show = !show"/>
              <v-text-field
                dense
                outlined
                required
                v-model="suitor.passwordConfirmation"
                label="Confirmar contraseña"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, confirmRules]"
                :type="show ? 'text' : 'password'"
                hint="6 caracteres mínimo"
                counter
                @click:append="show = !show"/> -->
              <v-row justify="center">
                <v-checkbox
                  color="primary"
                  :rules="[v => !!v || 'Es necesario aceptar para continuar!']"
                  label="Estoy de acuerdo con terminos y condiciones"
                  required/>
              </v-row>
              <v-row justify="center">
                <v-btn @keyup.enter="createUser" @click="createUser" :disabled="signUpLoader" :loading="signUpLoader" class="dea2-btn my-5" color="primary">
                  Registrarse
                </v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-row>
      </v-card-text>
    </v-card>
    </v-row>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import axios from "axios"
import router from '@/router'
export default {
  name: 'auth-signUp',
  components: {
  },
  data: () => ({
    suitor: {},
    show: false,
    valid: true,
    cardWidth: 0,
    windowWidth: 0,
    signUpLoader: false,
    signUpInformation: {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      rut: '',
      region: '',
      commune: '',
      streetName: '',
      directionNumber: '',
      complement: ''
    },
    termsAndConditions: false,
    selectedRegion: {},
    selectedCommune: {},
    rules: {
      email: value => /.+@.+\..+/.test(value) || 'Ingrese un correo electrónico valido',
      required: value => !!value || 'Campo requerido',
    }
  }),
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  async created () {
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapActions([
    ]),
    goToAccountUsach () {
      router.push({ name: 'MenuOutStudent' })
    },
    async createUser (){
      console.log(this.suitor);
      await axios
      .post(this.serverURL + '/suitors/create', this.suitor)
        .then(response => {
          console.log(response.data);
          this.idSuitor = response.data.id
          this.goToAccountUsach()
        })
        .catch(e => {
          console.log(e, e.response)
        })
    },
    saveAddress () {
      this.signUpInformation.region = this.selectedRegion.regionName
      this.signUpInformation.commune = this.selectedCommune
    },
    async trySignUp () {
      this.signUpLoader = true
      if (this.$refs.signUpForm.validate()) {
        this.newUser = this.signUpInformation
        this.signUp()
      }
      this.signUpLoader = false
    },
    onResize () {
      this.windowWidth = window.innerWidth
      this.resizeCardWidth()
    },
    resizeCardWidth () {
      if (this.windowWidth > 530) {
        this.cardWidth = 600
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
    ...mapState([
      'addressStuffs',
      'serverURL'
    ]),
    newUser: {
      get () { return this.$store.state.newUser },
      set (payload) { this.$store.commit('setNewUser', payload) }
    },
    idSuitor: {
      get () { return this.$store.state.idSuitor },
      set (payload) { this.$store.commit('setIdSuiter', payload) }
    },
    confirmRules () {
      if (this.signUpInformation.password) {
        const rule =
          value => (!!value && value) === this.signUpInformation.password ||
            'Passwords do not match'
        return rule
      } else {
        const rule = ''
        return rule
      }
    }
  }
}
</script>

<style scoped>
</style>
