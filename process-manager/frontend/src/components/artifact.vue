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
          filters: [
            "Bungalow",
            "Chalet",
            "Guesthouse",
            "Hotel",
            "Townhouse",
            "Apartment",
            "Boutique hotel",
            "Cabin",
            "Guest suite",
            "Hostel",
            "Loft",
            "Villa"
          ],
          search: "",
          checkedFilters: [],
          allSelected: false,
          selectAllText: 'Select All',
          activeTrigger: false,
          dropdown: false,
          showLoader: false
        };
    },
    computed: {
      filteredList() {
        return this.filters.filter(item => {
          return item.toLowerCase().includes(this.search.toLowerCase());
        });
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
      },
      selectAll: function() {
        this.checkedFilters = [];
        this.selectAllText = this.selectAllText == "Select All" ? 'Clear All' : 'Select All';
        if (this.allSelected) {
          for (filter in this.filters) {
            this.checkedFilters.push(this.filters[filter].toString());
          }
        }
      },
      showDropdown: function(){
        if(this.dropdown == false){
          this.dropdown = true;
          this.activeTrigger = true;
          TweenMax.fromTo(
            "#dropdown",
            0.55,
            {
              autoAlpha: 0,
              y: -10
            },
            {
              autoAlpha: 1,
              y: 0,
              ease: Power2.easeOut
            }
          );
        }else{
          this.dropdown = false;
          this.activeTrigger = false;
           TweenMax.to(
            "#dropdown",
            0.2,
            {
              autoAlpha: 0,
              y: -10,
              ease: Power2.easeOut
            });
        }
      }
    },
    created: function () {
            const customScroll = new SimpleBar(document.getElementById('customScroll'));
    },
    mounted(){
        this.$emit('titleChanged', 'Artefato');
    }
}
</script>

<style></style>
