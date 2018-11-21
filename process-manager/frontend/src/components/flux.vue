<template>
    <div v-if="processSelected">
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
            <!-- {{task.name}} -->
            <table class="table">
                <thead>
                    <tr ></tr>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nome</td>
                        <td>{{task.name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'flux-comp',
    props: {
        processSelected: Object
    },
    data(){
        return{
            task: null
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Fluxo');
    }    
}
</script>

<style>

</style>

