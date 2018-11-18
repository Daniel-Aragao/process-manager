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
                <ul v-if="processes && processes.length" class="list-group">
                    <li 
                    v-for="(process, index) in processes" @click="select(index)" 
                    class="list-group-item list-group-item-action flex-column align-items-start" 
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
    props:{
        process: Object
    },
    data() {
        return {
            newProcessName: "",
            processSelected: null,
            justRemoved: false,
            processes: []
        }
    },
    methods: {
        showModal(){
            this.$refs.processSelectorModal.style.display = 'block'
            if(this.process){
                let index = this.processes.findIndex((p) => p._id == process._id);

                if(index >= 0){
                    this.processes[index] = this.process;
                }

                this.select(index);
            }
        },
        hideModal(){
            this.$refs.processSelectorModal.style.display = 'none'
        },
        newProcess(){
            let self = this;

            let newProcess = { name:this.newProcessName, project: 20 };
            // this.$emit('newProcess', this.newProcessName);

            processService.add(newProcess, function(response){
                self.processes.push(response.data);
                self.newProcessName = '';
            });
        },
        choose(){
            if(this.processSelected){
                this.$emit('chosenProcess', this.processSelected)
                this.hideModal();
                this.select(-1);
            }
        },
        select(index){
            if(this.justRemoved){
                this.justRemoved = false;
            }else{
                this.processSelected = this.processes[index];
            }
        },
        selectById(id){
            let index = this.processes.findIndex((p) => p._id == id);

            this.select(index);
        },
        isActive(index){
            return this.processSelected && this.processes[index]._id == this.processSelected._id
        },
        remove(index){
            // this.$emit('removeProcess', this.processes[index])
            let self = this;

            let toRemove = self.processes[index];

            processService.remove(toRemove, function(response){
                console.log(response);

                self.processes.splice(index, 1)[0];
                self.justRemoved = true;
                self.processSelected = null;
            });
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

#processSelectorModal .modal-body{
    max-height: 600px;
    overflow-y: auto;
}

.list-group-item.active {
    z-index: 2;
    color: black;
    background-color: white;
    border: 1px solid rgba(0,0,0,.125);
    border-left: 5px solid #f26767;
}

.list-group-item{
    max-height: 78px;
    overflow-y: hidden;
}
</style>
