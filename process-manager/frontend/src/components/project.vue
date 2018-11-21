<template>
  <div v-if="this.processSelected">
    <div class="col-lg-12 edition-father">
      <div class="edition">
            <button class="btn btn-danger" @click="showModal">
                  Novo
            </button>
        </div>
    </div>
    <div class="modal" ref="projectModal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">{{edition? "Editar":'Criar'}} projeto</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <form ref="projectForm">
                  <div class="row">
                      <div class="col-6">
                      <div class="form-group">
                          <label for="inputName">Nome</label>
                          <input type="text" class="form-control" id="inputName" v-model="project.name">
                      </div>
                      </div>
                      <div class="col-6">
                      <div class="form-group">
                          <label for="inputDescription">Descrição</label>
                          <input type="text" class="form-control" id="inputDescription" v-model="project.description">
                      </div>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-6">
                      <div class="form-group">
                        <label >Colaboradores</label>
                        <select class="form-control" multiple v-model="project.collaborators">
                            <option v-for="collaborator in this.processSelected.collaborators" v-bind:value="collaborator._id" >
                                {{collaborator.name}}
                            </option>
                        </select>
                      </div>
                      </div>
                      <div class="col-6">
                      <div class="form-group">
                        <label >Processos</label>
                        <select class="form-control" multiple v-model="project.process">
                            <option v-for="process in this.processSelected.processes" v-bind:value="process._id" >
                                {{process.name}}
                            </option>
                        </select>
                      </div>
                      </div>
                  </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-dark" @click="hideModal">Cancelar</button>
                  <button type="button" class="btn btn-danger" @click="addProject">Salvar</button>
              </div>
          </div>
      </div>
    </div>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
              <th style="width: 20%" scope="col">Nome</th>
              <th style="width: 30%" scope="col">Descrição</th>
              <th style="width: 10%" scope="col">Colaboradores</th>
              <th style="width: 20%" scope="col">Processos</th>
              <th style="width: 20%" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in processSelected.projects" v-bind:key="project._id">
              <td scope="row">{{project.name}}</td>
              <td>{{project.description}}</td>
              <td>{{getProjectCollaboratorArray(project, processSelected.collaborators)}}</td>
              <td>{{getProjectProcessArray(project, processSelected.processes)}}</td>
              <td>
                  <button class="btn btn-danger btn-margin btn-sm" @click="edit(project)">
                      Editar
                  </button>
                  <button class="btn btn-danger btn-margin btn-sm" @click="remove(project)">
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
import projectService from '@/service/project.service';
import processService from '@/service/process.service';
import collaboratorService from '@/service/collaborator.service';

export default {
    name: 'telaProjeto',
    props: {
        processSelected: Object
    },
    data(){
        return {
            project: {collaborators: []},
            project: {processes: []},
            processes: [],
            collaborators: [],
            process: {},
            edition: false
        }
    },
    methods: {
        showModal(){
            this.edition = false;
            this.process = {};
            this.process.name = this.processSelected? this.processSelected.name : '';

            this.$refs.projectModal.style.display = 'block';
        },
        hideModal(){
            this.project = {collaborators: []};
            this.project = {processes: []};
            this.$refs.projectModal.style.display = 'none';
        },
        addProject() {
            if(this.project){
                if(this.project._id){
                    projectService.update(this.project, ()=>{
                        this.hideModal();
                    });
                }else{
                    this.project.process = this.processSelected._id;

                    projectService.add(this.project, (response) => {
                        this.hideModal();
                        let p = this.processSelected;
                        p.projects.push(response.data);
                    });
                }
            }
        },
        edit(project) {
            this.project = project;
            this.showModal();
            this.edition = true;
        },
        remove(project){
            this.process = this.processSelected;

            projectService.remove(project, () => {
                let index = this.processSelected.projects.findIndex((p) => p._id == project._id);
                this.processSelected.projects.splice(index, 1);
                this.process = {}
            });
        },
        getProjectProcessArray(project, processes){
            // debugger
            let projectProcesses = processes.filter((p) => {
                return project.processes.indexOf(p._id) >= 0;
            });
            return projectProcesses.map((p) => p.name).join(', ');
        },
        getProjectCollaboratorArray(project, collaborators){
            // debugger
            let projectCollaborators = collaborators.filter((c) => {
                return project.collaborators.indexOf(c._id) >= 0;
            });
            return projectCollaborators.map((c) => c.name).join(', ');
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Projeto');
    }
}
</script>

<style>

</style>
