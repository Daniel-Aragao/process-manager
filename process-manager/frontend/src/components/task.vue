<template>
<div>
  <div class="col-lg-12 edition-father">
    <div class="edition">
          <button class="btn btn-danger" @click="showModal">
                Novo
          </button>
      </div>
  </div>
  <div class="modal" ref="taskModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{edition? "Editar":'Criar'}} Tarefa</h5>
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
                        <input type="text" class="form-control" id="inputName" v-model="task.name">
                    </div>

                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label >Tipo de Tarefa</label>
                        <select class="form-control" v-model="task.eTypeTask">
                            <option></option>
                            <option>Inicio</option>
                            <option>Tarefa</option>
                            <option>Gateway</option>
                            <option>Parada</option>
                        </select>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                        <label >Descrição</label>
                        <input class="form-control" v-model="task.description">
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group">
                        <label >Processo</label>
                        <input type="text" class="form-control" v-model="process.name" disabled>
                    </div>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label >Responsável</label>
                            <select class="form-control" v-model="task.responsible">
                                <option v-for="collaborator in process.team" v-bind:key="collaborator._id">
                                    {{collaborator.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label >Participantes</label>
                            <select class="form-control" multiple v-model="task.participants">
                                <option v-for="collaborator in process.team" v-bind:key="collaborator._id">
                                    {{collaborator.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div> -->
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" @click="hideModal">Cancelar</button>
                <button type="button" class="btn btn-danger" @click="addTask">Salvar</button>
            </div>
        </div>
    </div>
  </div>
  <div class="row" v-if="this.processSelected">
    <table class="table">
      <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Tipo</th>
            <!-- <th scope="col">Responsável</th> -->
            <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in processSelected.tasks" v-bind:key="task._id">
            <td scope="row">{{task.name}}</td>
            <td>{{task.description}}</td>
            <td>{{task.eTypeTask}}</td>
            <!-- <td>{{task.responsible}}</td> -->
            <td>
                <button class="btn btn-danger btn-margin" @click="edit(task)">
                    Editar
                </button>
                <button class="btn btn-danger" @click="remove(task)">
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
import taskService from '@/service/task.service';

export default {
    name: 'task',
    props: {
        processSelected: Object
    },
    data(){
        return {
            task: {},
            process: {},
            edition: false
        }
    },
    methods: {
        showModal(){
            this.edition = false;
            this.process = {};
            this.process.name = this.processSelected? this.processSelected.name : '';

            this.$refs.taskModal.style.display = 'block';
        },
        hideModal(){
            this.task = {};
            this.$refs.taskModal.style.display = 'none';
        },
        addTask() {
            if(this.task){
                if(this.task._id){
                    taskService.update(this.task, ()=>{
                        this.hideModal();
                    });
                }else{
                    this.task.process = this.processSelected._id;
                    taskService.add(this.task, (response) => {
                        this.hideModal();
                        let p = this.processSelected;
                        p.tasks.push(response.data);
                    });
                }
            }
        },
        edit(task) {
            this.task = task;
            this.showModal();
            this.edition = true;
        },
        remove(task){
            this.process = this.processSelected;

            taskService.remove(task, () => {
                let index = this.processSelected.tasks.findIndex((t) => t._id == task._id);
                this.processSelected.tasks.splice(index, 1);
                this.process = {}                
            });           
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Artefatos');
    }
}
</script>

<style>
.btn-margin{
    margin-right: 10px;
}
</style>
