<template>
   <div class="home Bground"> 
    <!-- <img alt="Drii logo" src="../assets/logo-drii_0_0.png"> -->
     <!-- <MoreSecction/> -->
 <!-- </div> --> 
  <Select/>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Select from '@/components/auth/select.vue'
export default {
  name: 'Home',
  components: {
    Select
  }
}
</script>

<style scoped>
  .Bground {
    background-color: rgb(43, 41, 41) !important;
  }
</style>

