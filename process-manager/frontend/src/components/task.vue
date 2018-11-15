<template>
    <div>
        Tela de Tarefa
    </div>
</template>

<script>
export default {
    name: 'telaTarefa',
    mounted(){
        this.$emit('titleChanged', 'Tarefa');
    }
}
</script>

<style>

</style>
