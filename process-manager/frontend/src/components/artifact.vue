<template>
  <div>
    <form>
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
        <div class="col-6">
          <div class="form-group">
            <label class="col-12">&emsp;</label>
            <button type="submit" class="btn btn-danger" @click="addArtifact()">Salvar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import artifactService from '@/service/artifact.service';

export default {
    name: 'artefato',
    data(){
        return {
          Artifact: {name: '', eTypeArtifact: '', details: '', process: [], tasks: [] }
        }
    },
    methods: {
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
