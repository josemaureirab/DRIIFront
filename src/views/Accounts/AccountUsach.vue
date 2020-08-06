<template>
<div class="accountUsach">
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
  <AccountUsach/>
</div>
</template>

<script>
import AccountUsach from '@/components/Accounts/AccountUsach.vue'
export default {
  name: 'accountUsach',
  components: {
    AccountUsach
  }
}
</script>