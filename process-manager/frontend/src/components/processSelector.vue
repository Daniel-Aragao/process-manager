<template>
    <div id="processSelectorModal" ref="processSelectorModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document"> <!--modal-lg-->
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Selecione um processo</h5>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
                <span aria-hidden="true">&times;</span>
                </button> -->
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
                    <li class="list-group-item list-group-item-action flex-column align-items-start" v-for="(process, index) in processes" @click="select(index)" 
                        :class="{'active': isActive(index)}">                        
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{{process.name}}</h5>
                            <span class="close" @click="remove(index)">&times;</span>
                        </div>
                        <small>{{process.description}}</small>
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
import processService from '@/service/process.service';


export default {
    name: 'process-selector',
    data() {
        return {
            newProcessName: "",
            processSelected: null,
            justRemoved: false,
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
            processSelectorModal.style.display = 'block'
        },
        hideModal(){
            processSelectorModal.style.display = 'none'
        },
        newProcess(){
            let newProcess = { name:this.newProcessName, project: 1 };
            // this.$emit('newProcess', this.newProcessName);

            processService.add(newProcess, function(response){
                console.log(response);
                // this.processes.push();
                this.newProcessName = '';
            });
        },
        choose(){
            if(this.processSelected){
                this.$emit('chosenProcess', this.processSelected)
                this.hideModal();
            }
        },
        select(index){
            if(this.justRemoved){
                this.justRemoved = false;
            }else{
                this.processSelected = this.processes[index];
            }
        },
        isActive(index){
            return this.processes[index] == this.processSelected
        },
        remove(index){
            // this.$emit('removeProcess', this.processes[index])
            let removed = this.processes.splice(index, 1)[0];
            this.justRemoved = true;
            this.processSelected = null;
        }
    },
    mounted(){
        let self = this;
        processService.list(function(response) {
            self.processes = response.data;
        });
    }
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
    background-color: #343a40;
    border-color: #343a40;
}
</style>
