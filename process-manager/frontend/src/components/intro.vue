<template>
    <div>
        <div class="float-right edition">
            <div class="edit-btn btn btn-danger" v-if="!editMode" @click="setEditMode">
                <span class="iconic iconic-pencil" title="pencil" aria-hidden="true"></span>
                Editar
            </div>
            <div v-else @click="saveUpdate" class="btn btn-danger">
                <span class="iconic iconic-check" title="check" aria-hidden="true"></span>
                Salvar
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
                <textarea id="process-description" type="text" rows="10" class="form-control red-border-left" v-model="process.description"/>
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
            // this.process._id = this.processSelected._id;
            // this.process.description = this.processSelected.description;
            // this.process.name = this.processSelected.name;
            this.process = this.processSelected;
            this.editMode = true;
        },
        saveUpdate(){
            let process = this.process;
            let self = this;

            processService.edit(process, function(response){
                // localStorage.setItem('process', JSON.stringify(process));
                // self.process = process;
                self.$emit('processChanged', process);
                self.editMode = false;
            });
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Introdução');
        this.process = JSON.parse(localStorage.getItem('process'));
    }
}
</script>

<style>
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
