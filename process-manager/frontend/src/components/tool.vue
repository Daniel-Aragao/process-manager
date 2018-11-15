<template>
    <div>
        Tela de Ferramenta
    </div>
</template>

<script>
export default {
    name: 'telaFerramenta',
    mounted(){
        this.$emit('titleChanged', 'Ferramenta');
    }
}
</script>

<style>

</style>
