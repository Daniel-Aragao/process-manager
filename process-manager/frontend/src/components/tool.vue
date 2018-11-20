<template>
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
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group">
                        <label >Tarefa</label>
                        <select class="form-control" multiple v-model="tool.tasks">
                            <option v-for="task in tasks" v-bind:value="task._id" >
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
  <div class="row" v-if="this.processSelected">
    <table class="table">
      <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artifact in processSelected.artifacts" v-bind:key="artifact._id">
            <td scope="row">{{artifact.name}}</td>
            <td>{{artifact.details}}</td>
            <td>{{artifact.eTypeArtifact}}</td>
            <!-- <td>{{artifact.tasks? artifact.tasks.join(', '): ''}}</td> -->
            <td>
                <button class="btn btn-danger btn-margin" @click="edit(artifact)">
                    Editar
                </button>
                <button class="btn btn-danger" @click="remove(artifact)">
                    Excluir
                </button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'telaFerramenta',
    mounted(){
        this.$emit('titleChanged', 'Ferramenta');
    }
}
</script>

<style>

</style>
