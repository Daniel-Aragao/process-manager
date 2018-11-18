<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <navbar-superior @processosSelection="processosSelection"/>
    <div class="container">
      <h2>
        <span>{{ titulo + " - "}}</span>
        <span v-if="process" class="upFirstLetter">{{process.name}}</span>
      </h2>
      <div class="container-body">
        <!-- <intro-comp @titleChanged="setTitle"/> -->
        <router-view @titleChanged="setTitle" @processChanged="chosen" :processSelected="process"></router-view>
      </div>
    </div>
    <process-selector ref="processSelector" @chosenProcess="chosen" :process="process"/>
  </div>

</template>

<script>
import navbarSuperior from '@/components/navbar';
import dropdown from '@components/dropdown';
// import introComp from '@/components/intro'
// import artefato from '@/components/artifact';
// import tarefa from '@/components/task';
// import ferramenta from '@/components/tool';
// import guia from '@/components/guide';
import processSelector from '@/components/processSelector'

import processService from '@/service/process.service';

export default {
  name: 'app',
  components: {navbarSuperior,processSelector},
  data(){
    return {
      titulo: "",
      process: null
    }
  },
  methods: {
    setTitle(title){
      this.titulo = title
    },
    processosSelection(){
      // processSelectorModal.style.display = 'block'
      this.$refs.processSelector.showModal();
    },
    chosen(process){
      // alert(process.name);
      this.process = process;
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
          processService.find(process, (response) => {
            if(!response.data){
              this.processosSelection();
            }else{
              this.process = process;
            }
          });
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
textarea,.red-border-left{
    border: none;
    border-left: 5px solid #f36767;
    border-radius: .25rem;
    padding: 6px 12px;
}
textarea,.red-border-left:focus{
    border: none;
    border: 2px solid #f36767;
    border-left: 5px solid #f36767;
    box-shadow: none
}
</style>
