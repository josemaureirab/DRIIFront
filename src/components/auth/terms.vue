<template>
  <!-- eslint-disable -->
  <div id="auth-terms">
    <v-row justify="center">
      <v-btn outlined @click="termsDialog = true">
        Leer términos y condiciones
      </v-btn>
    </v-row>
    <div class="text-center">
      <v-dialog
        v-model="termsDialog"
        width="1000"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Términos y Condiciones
          </v-card-title>

          <v-card-text>
            <h3 align="justify">

            </h3>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="termsDialog = false"
            >
              Volver
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth-terms',
  data: () => ({
    termsDialog: false
  })
}
</script>

<style scoped>
</style>
