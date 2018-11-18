<template>
    <div>
        <div v-if="process && process.description">
            {{process.description}}
        </div>
        <div  v-else>
            oi
        </div>
    </div>
</template>

<script>
export default {    
    name: 'intro-comp',
    data() {
        return {
            process: null
        }
    },
    methods: {
        saveUpdate(){

        }
    },
    mounted(){
        this.$emit('titleChanged', 'Introdução');
        this.process = JSON.parse(localStorage.getItem('process'));

        // console.log(process.description)
    }
}
</script>

<style></style>
