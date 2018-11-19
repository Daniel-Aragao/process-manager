<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">

          <label for="inputName">Nome</label>
          <input type="email" class="form-control" id="inputName" v-model="Artifact.name" placeholder="Nome">

          <label for="inputState">Tipo de Artefato</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>

          <label for="inputEmail4">Detalhes</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">

          <label for="inputState">Processo</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>

          <label for="inputState">Tarefa</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="addArtifact()">Salvar</button>
    </form>
  </div>
</template>

<script>
import artifactService from '@/service/artifact.service';

export default {
    name: 'artefato',
    data(){
        return {
          Artifact: {name: '', eTypeArtifact: '', details: '', process: null, tasks: [] },
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
          },
          removeArtifact(index) {
            artifactService.add(newArtifact).then((response) => {
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })
          },

        },
        mounted(){
        this.$emit('titleChanged', 'Artefato');
      }
}
</script>

<style></style>
