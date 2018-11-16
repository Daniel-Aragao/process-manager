<template>
    <div id="processSelectorModal" ref="processSelectorModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document"> <!--modal-lg-->
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Selecionar processo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-12 form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Nome do processo" v-model="newProcessName">
                        <div class="input-group-append">
                            <button class="btn btn-danger" type="button" id="button-addon2" @click="newProcess">+</button>
                        </div>
                    </div>
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(process, index) in processes" @click="select(index)" 
                        :class="{'active': isActive(index)}">
                        {{process.name}}
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" @click="choose">Escolher</button>
                <!-- <button type="button" class="btn btn-secondary" @click="hideModal">Close</button> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'process-selector',
    data() {
        return {
            newProcessName: "",
            processSelected: null,
            processes: [
                {
                    name:'1'
                },
                {
                    name:'2'
                }
            ]
        }
    },
    methods: {
        showModal(){
            $(processSelectorModal).show();
        },
        hideModal(){
            $(processSelectorModal).hide();
        },
        newProcess(){
            this.processes.push({name:this.newProcessName});
            this.$emit('newProcess', this.newProcessName);
            this.newProcessName = '';
        },
        choose(){
            if(this.processSelected){
                this.$emit('chosenProcess', this.processSelected)
                this.hideModal();
            }
        },
        select(index){
            this.processSelected = this.processes[index];
        },
        isActive(index){
            return this.processes[index] == this.processSelected
        }
    },
    // mounted(){
    // }
}
</script>

<style>
#processSelectorModal .close > span{
    color: white
}
#processSelectorModal .modal-header{
    color: white;
    background-color: #343a40
}

#processSelectorModal .modal-content{
    border-radius: 0.4rem;
}

.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
</style>
