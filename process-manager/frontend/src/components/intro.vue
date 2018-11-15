<template>
    <div>
        texto texto texto texto texto texto texto texto texto texto texto texto texto 
    </div>
</template>

<script>
export default {
    name: 'intro',
    beforeMount(){
        this.$emit('titleChanged', 'Introdução');
    }
}
</script>

<style>

</style>


