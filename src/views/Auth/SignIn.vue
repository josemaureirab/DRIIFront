<template>
<div class="sign">
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
import SignIn from '@/components/Auth/SignIn.vue'
export default {
  name: 'Sign',
  components: {
    SignIn
  }
}
</script>