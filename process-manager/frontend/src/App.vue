<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <navbar-superior/>
    
    <div class="container">
      <h2>{{ titulo }}</h2>
      <div class="container-body">
        <intro @titleChanged="setTitle"/>
      </div>
    </div>
  </div>

</template>

<script>
import navbarSuperior from './components/navbar.vue';
import intro from './components/intro.vue'

export default {
  name: 'app',
  components: {
    navbarSuperior,
    intro
  },
  data(){
    return {
      titulo: ""
    }
  },
  methods: {
    setTitle(title){
      this.titulo = title
    }
  }
}
</script>

<style>
  html, body, #app{
    height: 100%;
  }
  #app .container{
    /* margin-top: 40px; */
    background-color: white;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    min-height: 80%;
    padding: 40px
  }

  .container-body{
    margin-top: 25px;
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
