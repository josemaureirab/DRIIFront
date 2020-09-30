<template>
<div class="signUsach Bground">
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
  <SignUpUsach/>
</div>
</template>

<script>
import SignUpUsach from '@/components/auth/signUpUsach.vue'
export default {
  name: 'SignUsach',
  components: {
    SignUpUsach
  }
}
</script>

<style scoped>
  .Bground {
    background-color: rgb(43, 41, 41) !important;
  }
</style>