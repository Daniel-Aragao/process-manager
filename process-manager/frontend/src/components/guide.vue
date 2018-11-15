<template>
    <div>
        Tela de Guia
    </div>
</template>

<script>
export default {
    name: 'guia',
    mounted(){
        this.$emit('titleChanged', 'Guia');
    }
}
</script>

<style>

</style>
