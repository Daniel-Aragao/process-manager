<template>
    <div>
        <div class="col-lg-12 edition-father">
            <div class="edition">
                <button class="edit-btn btn btn-danger" v-if="!editMode" @click="setEditMode">
                    Editar
                </button>
                <button v-else @click="saveUpdate" class="btn btn-danger">
                    Salvar
                </button>
            </div>
        </div>
        <div>
            <div v-if="!editMode" class="red-border-left">
                <div v-if="processSelected && processSelected.description">
                    {{ processSelected.description }}
                </div>
                <div v-else class="placeholder-color">
                    Clique em editar para adicionar uma descrição...
                </div>
            </div>
            <div v-else>
                <div class="form-group">
                    <label class="col-12">Nome: </label>
                    <input type="text" class="form-control" v-model="process.name">
                </div>
                <div class="form-group">
                    <label class="col-12">Descrição: </label>
                    <textarea id="process-description" type="text" rows="10" class="form-control red-border-left" v-model="process.description"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import processService from '@/service/process.service';


export default {
    name: 'intro-comp',
    props:{
        processSelected: Object
    },
    data() {
        return {
            process: null,
            editMode: false
        }
    },
    methods: {
        setEditMode(){
            this.process = this.processSelected;
            this.editMode = true;
        },
        saveUpdate(){
            let self = this;

            processService.edit(self.process, function(response){
                self.$emit('processChanged', self.process);
                self.editMode = false;
            });
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Introdução');
        this.process = this.processSelected;
    }
}
</script>

<style>
.edition-father{
    position: relative;
    height: 40px;
}
.edition{
    position: absolute;
    right: 0;
}
.placeholder-color{
    color: grey;
    font-size: 20px;
    font-weight: 600;
}
.edition:hover{
    text-decoration: underline;
    cursor: pointer;
}
#process-description{
    margin-top: 5px;
}

</style>
