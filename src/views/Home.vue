<template>
   <div class="home"> 
  <Principal/>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import MenuOutStudent from '../components/OutStudent/Menu'
export default {
  name: 'Home',
  components: {
    MenuOutStudent
  }
}
</script>
