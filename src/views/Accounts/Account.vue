<template>
<div class="accountAdmin">
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
  <AccountAdmin/>
</div>
</template>

<script>
import AccountAdmin from '@/components/Accounts/AccountAdmin.vue'
export default {
  name: 'accountAdmin',
  components: {
    AccountAdmin
  }
}
</script>