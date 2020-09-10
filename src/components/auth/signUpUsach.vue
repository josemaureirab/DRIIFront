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
                v-model="signUpInformation.firstName"
                :rules="[rules.required]"
                label="Nombres"/>
              <v-text-field
                dense
                required
                outlined
                v-model="signUpInformation.lastName"
                :rules="[rules.required]"
                label="Apellidos"/>
              <v-text-field
                dense
                required
                outlined
                v-model="signUpInformation.phoneNumber"
                :rules="[rules.required, rules.min]"
                auto-complete=false
                label="Número telefónico (+569)"/>
                
              <v-text-field
                dense
                outlined
                required
                auto-complete=false
                v-model="signUpInformation.rut"
                :rules="[rules.required, rules.min]"
                label="Rut"/>
              <v-text-field
                dense
                outlined
                required
                v-model="signUpInformation.streetName"
                :rules="[rules.required]"
                label="Calle (Dirección)"/>
              <v-text-field
                dense
                outlined
                required
                :rules="[rules.required]"
                v-model="signUpInformation.directionNumber"
                label="Nº calle (Dirección)"/>
              <v-text-field
                dense
                outlined
                v-model="signUpInformation.complement"
                label="Nº dpto. (Opcional)"/>
              <v-text-field
                dense
                outlined
                required
                :rules="[rules.required, rules.email]"
                v-model="signUpInformation.email"
                label="Correo electrónico"/>
              <v-text-field
                dense
                outlined
                required
                v-model="signUpInformation.password"
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
                v-model="signUpInformation.passwordConfirmation"
                label="Confirmar contraseña"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min, confirmRules]"
                :type="show ? 'text' : 'password'"
                hint="6 caracteres mínimo"
                counter
                @click:append="show = !show"/>
              <v-select dense outlined :rules="[rules.required]" v-model="selectedRegion" :items="addressStuffs"  item-text="regionName" return-object required label="Seleccionar región"/>
              <v-select dense outlined :rules="[rules.required]" @change="saveAddress" v-show="typeof selectedRegion.communeListString !== 'undefined'" required v-model="selectedCommune" :items="selectedRegion.communeListString" return-object label="Seleccionar comuna"/>
              <v-row justify="center">
                <v-checkbox
                  color="primary"
                  :rules="[v => !!v || 'Es necesario aceptar para continuar!']"
                  label="Estoy de acuerdo con terminos y condiciones"
                  required/>
              </v-row>
              <v-row justify="center">
                <v-btn @keyup.enter="trySignUp" @click="trySignUp" :disabled="signUpLoader" :loading="signUpLoader" class="dea2-btn my-5" color="primary">
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

export default {
  name: 'auth-signUp',
  components: {
  },
  data: () => ({
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
      min: value => value.length >= 6 || '6 caracteres mínimo'
    }
  }),
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  async created () {
    this.onResize()
    await this.getAddressStuffs()
    console.log(this.addressStuffs)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapActions([
      'signUp',
      'getAddressStuffs'
    ]),
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
      'addressStuffs'
    ]),
    newUser: {
      get () { return this.$store.state.newUser },
      set (payload) { this.$store.commit('setNewUser', payload) }
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
