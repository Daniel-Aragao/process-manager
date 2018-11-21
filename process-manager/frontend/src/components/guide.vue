<template>
    <div v-if="processSelected">
        <div class="form-group">
            <label class="col-12">Selecione uma tarefa</label>
            <select class="form-control" v-model="guide">
                <option></option>
                <option v-for="artifact in processSelected.artifacts" v-bind:value="artifact" v-if="artifact.eTypeArtifact == 'Guia'">
                    {{artifact.name}}
                </option>
            </select>
        </div>
        <table v-if="guide" class="table table-bordered">
            <tbody>
                <tr>
                    <th style="width: 25%">Nome</th>
                    <td style="width: 75%">{{guide.name}}</td>
                </tr>
                <tr>
                    <th>Tarefas</th>
                    <td>{{getTasksArray(guide, processSelected.tasks)}}</td>
                </tr>
                <tr>
                    <th>Descrição</th>
                    <td>{{guide.details}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'guia',
    props: {
        processSelected: Object
    },
    data(){
        return{
            guide: null,
        }
    },
    methods: {
         getTasksArray(artifact, tasks){
            let artifactTasks = tasks.filter((t) => {                
                return artifact.tasks.indexOf(t._id) >= 0;
            });
            return artifactTasks.map((t) => t.name).join(', ');
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Guias e Orientações');
    }
}
</script>

<style>

</style>
