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
  <SignUp/>
</div>
</template>

<script>
import SignUp from '@/components/Auth/SignUp.vue'
export default {
  name: 'Sign',
  components: {
    SignUp
  }
}
</script>