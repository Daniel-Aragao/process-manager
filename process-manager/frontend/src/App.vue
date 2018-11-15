<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <navbar-superior/>
    
    <div class="container">
      
    </div>
  </div>

</template>

<script>
import navbarSuperior from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    navbarSuperior
  }
}
</script>

<style>
  #app .container{
    /* margin-top: 40px; */
    background-color: white;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    min-height: 80%;
  }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
