<template>
<div class="sign Bground">
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
  <SignUp/>
</div>
</template>

<script>
import SignUp from '@/components/auth/signUp.vue'
export default {
  name: 'Sign',
  components: {
    SignUp
  }
}
</script>

<style scoped>
  .Bground {
    background-color: rgb(43, 41, 41) !important;
  }
</style>