<template>
  <div v-if="this.processSelected">
    <div class="col-lg-12 edition-father">
      <div class="edition">
            <button class="btn btn-danger" @click="showModal">
                  Novo
            </button>
        </div>
    </div>
    <div class="modal" ref="toolModal">
      <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">{{edition? "Editar":'Criar'}} tool</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <form ref="toolForm">
                  <div class="row">
                      <div class="col-6">
                      <div class="form-group">
                          <label for="inputName">Nome</label>
                          <input type="text" class="form-control" id="inputName" v-model="tool.name">
                      </div>
                      </div>
                      <div class="col-6">
                      <div class="form-group">
                          <label for="inputDescription">Descrição</label>
                          <input type="text" class="form-control" id="inputDescription" v-model="tool.description">
                      </div>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-6">
                      <div class="form-group">
                          <label >Processo</label>
                          <input type="text" class="form-control" v-model="process.name" disabled>
                      </div>
                      </div>

                      <div class="col-6">
                      <div class="form-group">
                          <label >Tarefa</label>
                          <select class="form-control" multiple v-model="tool.tasks">
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
                  <button type="button" class="btn btn-danger" @click="addTool">Salvar</button>
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
              <th style="width: 10%" scope="col">Processo</th>
              <th style="width: 10%" scope="col">Tarefas</th>
              <th style="width: 20%" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tool in processSelected.tools" v-bind:key="tool._id">
              <td scope="row">{{tool.name}}</td>
              <td>{{tool.description}}</td>
              <td>{{tool.process}}</td>
              <td>{{getToolTaskArray(tool, processSelected.tasks)}}</td>
              <td>
                  <button class="btn btn-danger btn-margin btn-sm" @click="edit(tool)">
                      Editar
                  </button>
                  <button class="btn btn-danger btn-margin btn-sm" @click="remove(tool)">
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
import toolService from '@/service/tool.service';
import taskService from '@/service/task.service';

export default {
    name: 'telaFerramenta',
    props: {
        processSelected: Object
    },
    data(){
        return {
            tool: {tasks: []},
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

            this.$refs.toolModal.style.display = 'block';
        },
        hideModal(){
            this.tool = {tasks: []};
            this.$refs.toolModal.style.display = 'none';
        },
        addTool() {
            if(this.tool){
                if(this.tool._id){
                    toolService.update(this.tool, ()=>{
                        this.hideModal();
                    });
                }else{
                    this.tool.process = this.processSelected._id;

                    toolService.add(this.tool, (response) => {
                        this.hideModal();
                        let p = this.processSelected;
                        p.tools.push(response.data);
                    });
                }
            }
        },
        edit(tool) {
            this.tool = tool;
            this.showModal();
            this.edition = true;
        },
        remove(tool){
            this.process = this.processSelected;

            toolService.remove(tool, () => {
                let index = this.processSelected.tools.findIndex((t) => t._id == tool._id);
                this.processSelected.tools.splice(index, 1);
                this.process = {}
            });
        },
        getToolTaskArray(tool, tasks){
            // debugger
            let toolTasks = tasks.filter((t) => {
                return tool.tasks.indexOf(t._id) >= 0;
            });
            return toolTasks.map((t) => t.name).join(', ');
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Ferramenta');
    }
}
</script>

<style>

</style>
