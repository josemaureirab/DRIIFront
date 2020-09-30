<template>
<div class="Bground sign">
  <v-row
    justify="center"
    >
      <v-col cols="6" sm="2">
      <v-img
        src="@/assets/logoInternacional.png"
      >
      </v-img>
      </v-col>
    </v-row>
  <SignIn/>
</div>
</template>

<script>
import SignIn from '@/components/auth/signIn.vue'
export default {
  name: 'Sign',
  components: {
    SignIn
  }
}
</script>

<style scoped>
  .Bground {
    background-color: rgb(43, 41, 41) !important;
  }
</style>