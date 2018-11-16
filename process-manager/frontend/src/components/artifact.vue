<template>
    <div>
        <ul>
            <li v-for="artefato in artefatos">
                {{artefato.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'artefato',
    data(){
        return {
            artefatos: [
                {
                    _id:'123',
                    name:'Artefato 1'
                },
                {
                    _id:'456',
                    name:'Artefato 2'
                }
            ]
        }
    },
    mounted(){
        this.$emit('titleChanged', 'Artefato');
    }
}
</script>

<style></style>
