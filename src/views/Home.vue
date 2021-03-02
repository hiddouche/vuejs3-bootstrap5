<template>
  <div class="starter-template text-center py-5 px-3">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue.js 3 e Twiiter Bootstrap 5"/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
