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
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{edition? "Editar":'Criar'}} artefato</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancel">
            <span aria-hidden="true">&times;</span>
          </button> 
        </div>
        <div class="modal-body">
          <form ref="artifactForm">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="inputName">Nome</label>
                  <input type="email" class="form-control" id="inputName" v-model="Artifact.name" placeholder="Nome">
                </div>

              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="inputState">Tipo de Artefato</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="inputEmail4">Detalhes</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>          
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="inputState">Processo</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="inputState">Tarefa</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
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
          <button type="button" class="btn btn-dark" @click="cancel">Cancelar</button>
          <button type="button" class="btn btn-danger" @click="addArtifact">Salvar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
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
        <tr v-for="artifact in artifacts">
          <td>{{artiface.name}}</td>
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

export default {
    name: 'artefato',
    props: {
      processSelected: Object
    },
    data(){
        return {
          Artifact: {name: '', eTypeArtifact: '', details: '', process: {}, tasks: [] },
          edition: false,
          artifacts: []
        }
    },  
    methods: {
      showModal(){
        this.$refs.artifactModal.style.display = 'block'
          
      },
      hideModal(){
        this.$refs.artifactModal.style.display = 'none'
      },
      cancel(){
        this.$refs.artifactForm.reset();
        this.hideModal();
      },
      save(){
        this.hideModal();
      },
      addArtifact() {
        const newArtifact = {
          name: this.Artifact.name,
          eTypeArtifact: this.Artifact.this.Artifact.name,
          details: this.Artifact.details,
          process: this.Artifact.process,
          tasks: this.Artifact.task
        }
        console.log(newArtifact)
        artifactService.add(newArtifact).then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      }
    },
    mounted(){
      this.$emit('titleChanged', 'Artefato');
    }
}
</script>

<style></style>
