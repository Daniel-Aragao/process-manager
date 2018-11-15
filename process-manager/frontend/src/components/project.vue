<template>
    <div>
        Tela de Projeto
    </div>
</template>

<script>
export default {
    name: 'telaProjeto',
    mounted(){
        this.$emit('titleChanged', 'Projeto');
    }
}
</script>

<style>

</style>
