<template>
    <div>
        Tela de Processo
    </div>
</template>

<script>
export default {
    name: 'telaProcesso',
    mounted(){
        this.$emit('titleChanged', 'Processo');
    }
}
</script>

<style>

</style>
