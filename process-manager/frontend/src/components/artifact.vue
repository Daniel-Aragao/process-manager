<template>
<div v-if="this.processSelected">
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
                        <input type="text" class="form-control" id="inputName" v-model="artifact.name">
                    </div>

                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label >Tipo de Artefato</label>
                        <select class="form-control" v-model="artifact.eTypeArtifact">
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
                        <input class="form-control" v-model="artifact.details">
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label >Processo</label>
                        <input type="text" class="form-control" v-model="process.name" disabled>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                        <label >Tarefa</label>
                        <select class="form-control" multiple v-model="artifact.tasks">
                            <option v-for="task in this.processSelected.tasks" v-bind:value="task._id" >
                                {{task.name}}
                            </option>
                        </select>
                    </div>
                    </div>
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
  <div class="row">
    <table class="table">
      <thead>
        <tr>
            <th style="width: 20%" scope="col">Nome</th>
            <th style="width: 30%" scope="col">Detalhes</th>
            <th style="width: 10%" scope="col">Tipo</th>
            <th style="width: 20%" scope="col">Tarefas</th>
            <th style="width: 20%" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artifact in processSelected.artifacts" v-bind:key="artifact._id">
            <td scope="row">{{artifact.name}}</td>
            <td>{{artifact.details}}</td>
            <td>{{artifact.eTypeArtifact}}</td>
            <td>{{getTasksArray(artifact, processSelected.tasks)}}</td>
            <td>
                <button class="btn btn-danger btn-margin btn-sm" @click="edit(artifact)">
                    Editar
                </button>
                <button class="btn btn-danger btn-margin btn-sm" @click="remove(artifact)">
                    Excluir
                </button>
            </td>
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
            artifact: {tasks: []},
            process: {},
            tasks: [],
            edition: false
        }
    },
    methods: {
        showModal(){
            this.edition = false;
            this.process = {};
            this.process.name = this.processSelected? this.processSelected.name : '';

            this.$refs.artifactModal.style.display = 'block';
        },
        hideModal(){
            this.artifact = {tasks: []};
            this.$refs.artifactModal.style.display = 'none';
        },
        addArtifact() {
            if(this.artifact){
                if(this.artifact._id){
                    artifactService.update(this.artifact, ()=>{
                        this.hideModal();
                    });
                }else{
                    this.artifact.process = this.processSelected._id;
    
                    artifactService.add(this.artifact, (response) => {
                        this.hideModal();
                        let p = this.processSelected;
                        p.artifacts.push(response.data);
                    });
                }
            }
        },
        edit(artifact) {
            this.artifact = artifact;
            this.showModal();
            this.edition = true;
        },
        remove(artifact){
            this.process = this.processSelected;

            artifactService.remove(artifact, () => {
                let index = this.processSelected.artifacts.findIndex((a) => a._id == artifact._id);
                this.processSelected.artifacts.splice(index, 1);
                this.process = {}                
            });
        },
        getTasksArray(artifact, tasks){
            let artifactTasks = tasks.filter((t) => {                
                return artifact.tasks.indexOf(t._id) >= 0;
            });
            return artifactTasks.map((t) => t.name).join(', ');
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Artefatos');
    }
}
</script>

<style></style>
