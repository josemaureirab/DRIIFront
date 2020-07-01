<template>
   <div class="home"> 
    <!-- <img alt="Drii logo" src="../assets/logo-drii_0_0.png"> -->
     <!-- <MoreSecction/> -->
 <!-- </div> --> 
  <Principal/>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Principal from '../components/Principal/Principal.vue'
export default {
  name: 'Home',
  components: {
    Principal
  }
}
</script>
