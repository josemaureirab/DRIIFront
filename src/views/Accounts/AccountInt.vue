<template>
<div class="accountInt">
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
  <AccountInt/>
</div>
</template>

<script>
import AccountInt from '@/components/Accounts/AccountInt.vue'
export default {
  name: 'accountInt',
  components: {
    AccountInt
  }
}
</script>