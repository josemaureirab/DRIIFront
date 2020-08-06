<template>
<div class="signUsach">
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
import SignUpUsach from '@/components/Auth/signUpUsach.vue'
export default {
  name: 'SignUsach',
  components: {
    SignUpUsach
  }
}
</script>