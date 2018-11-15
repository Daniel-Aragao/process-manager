<template>
    <div>
        texto texto texto texto texto texto texto texto texto texto texto texto texto 
    </div>
</template>

<script>
export default {
    name: 'intro-comp',
    mounted(){
        this.$emit('titleChanged', 'Introdução');
    }
}
</script>

<style>

</style>


