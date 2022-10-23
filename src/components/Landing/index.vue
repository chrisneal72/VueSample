<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <HomeBody msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBody from './HomeBody.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBody
  }
}
</script>
