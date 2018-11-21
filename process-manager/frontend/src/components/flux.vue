<template>
    <div v-if="processSelected">
        <!-- <div class="modal" ref="previousTasksModal" v-if="task">
            <div class="modal-dialog modal-dialog-centered modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Escolher tarefas anteriores</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label >Tarefa</label>
                        <select class="form-control" multiple v-model="task.previousTask">
                            <option v-for="t in this.processSelected.tasks" v-bind:value="t._id" >
                                {{t.name}}
                            </option>
                        </select>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" @click="hideModal">Salvar</button>
                        <!- <button type="button" class="btn btn-danger" @click="saveTasks">Salvar</button> ->
                    </div>
                </div>
            </div>
        </div> -->

        <div class="modal" ref="nextTasksModal" v-if="task">
            <div class="modal-dialog modal-dialog-centered modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Escolher tarefas posteriores</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label >Tarefa</label>
                        <select class="form-control" multiple v-model="nextTasks">
                            <option v-for="t in this.processSelected.tasks" v-bind:value="t._id" v-if="task._id != t._id">
                                {{t.name}}
                            </option>
                        </select>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" @click="hideModal">Salvar</button>
                        <!-- <button type="button" class="btn btn-danger" @click="saveTasks">Salvar</button> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="col-12">Selecione uma tarefa</label>
            <select class="form-control" v-model="task">
                <option></option>
                <option v-for="task in this.processSelected.tasks" v-bind:value="task" >
                    {{task.name}}
                </option>
            </select>
        </div>

        <div v-if="task">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th style="width: 50%">Nome</th>
                        <th style="width: 50%">{{task.name}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tipo</td>
                        <td>{{task.eTypeTask}}</td>
                    </tr>
                    <tr>
                        <td>Processo</td>
                        <td>{{processSelected.name}}</td>
                    </tr>
                    <tr>
                        <td>Artefatos</td>
                        <td>{{getArtifactsArray(task, processSelected.artifacts)}}</td>
                    </tr>
                    <tr>
                        <td>Descrição</td>
                        <td>{{task.description}}</td>
                    </tr>
                    <tr>
                        <td class="">
                            Tarefas anteriores
                            <!-- <button class="btn btn-danger btn-sm float-right" @click="showModal('previousTasksModal')">
                                Adicionar
                            </button> -->
                        </td>
                        <td>
                            <ul v-if="task.previousTask.length > 0">
                                <li v-for="t in getTasks(task.previousTask, processSelected.tasks)">
                                    {{t.name}}
                                    <!-- <button type="button" class="close" @click="removeTask(task.previousTask, t._id)">
                                        <span aria-hidden="true">&times;</span>
                                    </button> -->
                                </li>
                            </ul>
                            <span v-else>Nenhuma</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Tarefas posteriores
                            <button class="btn btn-danger btn-sm float-right" @click="showModal('nextTasksModal')">
                                Adicionar
                            </button>
                        </td>
                        <td>
                            <ul v-if="task.nextTask.length > 0">
                                <li v-for="t in getTasks(task.nextTask, processSelected.tasks)">
                                    {{t.name}}
                                    <button type="button" class="close" @click="removeTask(task.nextTask, t._id)">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </li>
                            </ul>
                            <span v-else>Nenhuma</span>
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
    name: 'flux-comp',
    props: {
        processSelected: Object
    },
    data(){
        return{
            task: null,
            modalName: '',
            nextTasks: []
        }
    },
    methods: {
        hideModal(){
            this.saveTasks(() => {
                this.$refs[this.modalName].style.display = 'none';
            });
        },
        showModal(modalName){
            this.nextTasks = this.task.nextTask.map(t => t);
            this.modalName = modalName;
            this.$refs[modalName].style.display = 'block';
        },
        saveTasks(cb){
            let promises = [];
            let updatedTasks = [this.task];
            
            let addedTasks = this.getTasks(
                this.nextTasks.filter(t => this.task.nextTask.indexOf(t) < 0), 
                this.processSelected.tasks
            );
            let removedTasks = this.getTasks(
                this.task.nextTask.filter(t => this.nextTasks.indexOf(t) < 0), 
                this.processSelected.tasks
            );

            this.task.nextTask = this.nextTasks;

            addedTasks.forEach((t) => {
                t.previousTask.push(this.task._id);
                updatedTasks.push(t);
            });
            
            removedTasks.forEach((t) => {
                let i = t.previousTask.indexOf(this.task._id);
                t.previousTask.splice(i, 1);
                updatedTasks.push(t);
            });
            
            
            for(let task in updatedTasks){
                task = updatedTasks[task];

                promises.push(new Promise(function(resolve, reject){
                    taskService.update(task, ()=>{
                        resolve();
                    });
                }));
            }

            Promise.all(promises).then(function(){
                cb? cb(): '';
            });
        },
        removeTask(tasksList, t){
            let removedTasks = tasksList.splice(tasksList.indexOf(t), 1);

            removedTasks = this.processSelected.tasks.find(task => task._id == t);
            removedTasks.previousTask.splice(removedTasks.previousTask.indexOf(this.task._id), 1)

            taskService.update(this.task);
            taskService.update(removedTasks);
        },
        getArtifactsArray(task, artifacts){
            let artifactsFromTask = artifacts.filter((a) => {
                return a.tasks.indexOf(task._id) >= 0;
            });

            return artifactsFromTask.map((a) => a.name).join(', ');
        },
        getTasks(tasksIds, tasks){
            return tasks.filter(t => tasksIds.indexOf(t._id) >= 0);
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Fluxo');
    }    
}
</script>

<style>

</style>

