<template>
<div>
  <div class="col-lg-12 edition-father">
    <div class="edition">
          <button class="btn btn-danger" @click="showModal">
                Novo
          </button>
      </div>
  </div>
  <div class="modal" ref="artifactModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{edition? "Editar":'Criar'}} artefato</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
                <span aria-hidden="true">&times;</span>
                </button> 
            </div>
            <div class="modal-body">
                <form ref="artifactForm">
                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                        <label for="inputName">Nome</label>
                        <input type="email" class="form-control" id="inputName" v-model="artifact.name">
                    </div>

                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label >Tipo de Artefato</label>
                        <select class="form-control">
                            <option></option>
                            <option>Guia</option>
                            <option>Código</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                        <label >Detalhes</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>          
                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label >Processo</label>
                        <input type="text" class="form-control" v-model="process.name" disabled>
                        <!-- <select class="form-control" multiple>
                            <option v-for="process in processes" :value="process._id">
                                {{process.name}}
                            </option>
                        </select> -->
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                        <label >Tarefa</label>
                        <select class="form-control" multiple>
                            <option v-for="task in tasks" :value="task._id">
                                {{task.name}}
                            </option>
                        </select>            
                    </div>
                    </div>
                    <!-- <div class="col-6">
                    <div class="form-group">
                        <label class="col-12">&emsp;</label>
                        <button type="submit" class="btn btn-danger" @click="addArtifact()">Salvar</button>
                    </div>
                    </div> -->
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" @click="hideModal">Cancelar</button>
                <button type="button" class="btn btn-danger" @click="addArtifact">Salvar</button>
            </div>
        </div>
    </div>
  </div>
  <div class="row" v-if="this.processSelected">
    <table class="table">
      <thead>
        <tr>
            <th>Nome</th>
            <th>Detalhes</th>
            <th>Tipo</th>
            <th>Tarefa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artifact in this.processSelected.artifacts">
            <td>{{artifact.name}}</td>
            <td>{{artifact.description}}</td>
            <td>{{artifact.eTypeArtifact}}</td>
            <td>{{artifact.tasks? artifact.tasks.join(', '): ''}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import artifactService from '@/service/artifact.service';
import taskService from '@/service/task.service';

export default {
    name: 'artefato',
    props: {
        processSelected: Object
    },
    data(){
        return {
            artifact: {},
            process: {},
            tasks: [],
            edition: false
        }
    },  
    methods: {
        showModal(){
            let projectId = Number(localStorage.getItem("projectId"));
            this.process = {};
            this.process.name = this.processSelected? this.processSelected.name : '';

            taskService.findByProcess(this.processSelected._id, (response)=>{
                this.tasks = response.data;
                this.$refs.artifactModal.style.display = 'block';     
            });
        },
        hideModal(){
            this.$refs.artifactForm.reset();
            this.$refs.artifactModal.style.display = 'none';
        },
        save(){
            this.hideModal();
        },
        addArtifact() {
            if(this.artifact){
                this.artifact.process = this.processSelected._id;

                artifactService.add(this.artifact, response => {
                    this.hideModal();
                });
            }
        },
        removeArtifact(index) {        
            artifactService.add(newArtifact, response => {
                console.log(response)
            });
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Artefato');
        // Number(localStorage.getItem("projectId"))
    }
}
</script>

<style></style>
