<template>
  <div id="app">
    <navbar-superior @processosSelection="processosSelection"/>
    <div class="container">
      <h2>
        <span>{{ titulo + " - "}}</span>
        <span v-if="process" class="upFirstLetter">{{process.name}}</span>
      </h2>
      <div class="container-body">
        <router-view @titleChanged="setTitle" @processChanged="chosen" :processSelected="process"></router-view>
      </div>
    </div>
    <process-selector ref="processSelector" @chosenProcess="chosen" :process="process"/>
  </div>

</template>

<script>
import navbarSuperior from '@/components/navbar';
import processSelector from '@/components/processSelector'

import processService from '@/service/process.service';

export default {
  name: 'app',
  components: {navbarSuperior, processSelector},
  data(){
    return {
      titulo: "",
      process: null,
      processId: ""
    }
  },
  methods: {
    setTitle(title){
      this.titulo = title
    },
    processosSelection(){
      this.$refs.processSelector.showModal();
    },
    chosen(process){
      this.process = process;
      localStorage.setItem("processId", process._id);
    }
  },
  mounted(){
        localStorage.setItem("projectId", 1);
        this.processId = localStorage.getItem("processId");

        if(!this.processId){
            this.processosSelection();

        }else{          
            processService.find(this.processId, (response) => {
                if(!response.data){
                    this.processosSelection();
                }else{
                    this.process = response.data;
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
  background-color: white;
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
  min-height: 80%;
  padding: 40px
}

.container-body{
  margin-top: 25px;
}
.upFirstLetter{
  text-transform: capitalize;
}
textarea,.red-border-left{
    border-left: 5px solid #f36767;
    border-radius: .25rem;
    padding: 6px 12px;
}
textarea,.red-border-left:focus{
    border: 2px solid #f36767;
    border-left: 5px solid #f36767;
    box-shadow: none
}

input.form-control, select.form-control{
  border-left: 5px solid #f36767;
}
input.form-control:focus, select.form-control:focus{
  border: 2px solid #f36767;
  border-left: 5px solid #f36767;
  box-shadow: none;
}

.modal-header{
    color: white;
    background-color: #343a40
}

.modal-content{
    border-radius: 0.4rem;
}

.modal-body{
    max-height: 600px;
    overflow-y: auto;
}

.modal-header .close > span{
    color: white
}
.btn-margin{
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>
