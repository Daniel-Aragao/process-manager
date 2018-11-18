<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <navbar-superior @processosSelection="processosSelection"/>
    <div class="container">
      <h2>
        <span>{{ titulo + " - "}}</span>        
        <span class="upFirstLetter">{{processName}}</span>
      </h2>
      <div class="container-body">
        <!-- <intro-comp @titleChanged="setTitle"/> -->
        <router-view @titleChanged="setTitle"></router-view>
      </div>
    </div>
    <process-selector @chosenProcess="chosen"/>
  </div>

</template>

<script>
import navbarSuperior from '@/components/navbar';
// import introComp from '@/components/intro'
// import artefato from '@/components/artifact';
// import tarefa from '@/components/task';
// import ferramenta from '@/components/tool';
// import guia from '@/components/guide';
import processSelector from '@/components/processSelector'

export default {
  name: 'app',
  components: {navbarSuperior, processSelector},
  data(){
    return {
      titulo: "",
      processName: ""
    }
  },
  methods: {
    setTitle(title){
      this.titulo = title
    },
    processosSelection(){
      processSelectorModal.style.display = 'block'
    },
    chosen(process){
      // alert(process.name);
      this.processName = process.name;
      localStorage.setItem("process", JSON.stringify(process));
      // localStorage.setItem("process", process.name)
      // localStorage.setItem("process.id", process.id)
    }
  },
  mounted(){
        let process = JSON.parse(localStorage.getItem("process"));
        if(!process){
            this.processosSelection();
        }else{
          this.processName = process.name;
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
.upFirstLetter{
  text-transform: capitalize;
}
</style>
