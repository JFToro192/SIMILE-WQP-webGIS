<template>
        <div id="timePanel" class="time-panel ol-unselectable ol-control">
            <div class="panel-title">{{child_msg}}
                <button class="close-panel-btn" style="color:red;" @click="closePanel($event)">x</button>
            </div>
            <div class="time-container">
                <div class="time-header">
                    <strong>Select a ts:</strong>
                    <select class="time-select-group" name="" id="dropDownGroup" v-bind:value="currentGroupIndex" @change="updateGroupDropdown($event)">
                        <option v-for="(item,index) in activeLayersList" 
                            :value="index" 
                            :key="index"
                            >{{item.name}}</option>
                    </select>
                </div>
                <div class="time-controls">
                    <div class="time-controls-dates">
                        <select name="" id="dropdownDate" @change="updateLayerDropdown($event)">
                            <option v-for="(item,index) in datesList" 
                                        :value="index" 
                                        :selected="datesListLength"
                                        :key="index">{{datesList[index]}}</option>
                        </select>
                    </div>
                    <div class="time-slider">
                        <input  type="range"
                                name = ""
                                id = "sliderDate"
                                min = "0"
                                v-bind:max="datesListLength-1"
                                v-bind:value="currentDateIndex"
                                step = 1
                                @change="updateLayerSlider($event)">
                    </div>
                    <div id="time-controls-backward" class="time-controls_item ol-unselectable ol-control">
                        <button class="time-panel-control-button" @click="stepBackwards"><i class="bi bi-skip-backward-circle"></i></button>
                    </div>  
                    <!-- <div id="time-controls-play" class="time-controls_item ol-unselectable ol-control">
                        <div><button class="time-panel-control-button" @click="printText"><i class="bi bi-play-circle"></i></button></div>
                        <div><button><i class="bi bi-pause-circle"></i></button></div>
                    </div>  -->
                    <div id="time-controls-forward" class="time-control
                    s_item ol-unselectable ol-control">
                        <button class="time-panel-control-button" @click="stepForwards"><i class="bi bi-skip-forward-circle"></i></button>
                    </div>
                </div>                
            </div>

        </div>
</template>

<script>
export default {
    name: 'Time',
	props:{
		child_msg: {
			type: String,
			default: 'Time Panel',
		},
        title: {
            type: String,
            required: true,
            default:'Select Layer'
        },
        datesList: {
            type: Object,
            required: true,
            default:() => {return {'0':'Select TS'}}
        },
        datesListLength: {
            type: Number,
            required: true,
        },
        currentDate: {
            type: String,
            required: true,
        },
        currentDateIndex: {
            type: Number,
            required: true,
        },
        currentGroup: {
            type: Number,
            required: true,
        },
        currentGroupIndex: {
            type: Number,
            required: true,
        },
        isLayerActive: {
            type: Boolean,
            required: true,
        },
        activeLayersList: {
            type: Object,
            required: true,
        }
	},
    data () {
        return {
        }
    },
    methods:{
        closePanel(evt){
            let div = evt.path[2]
            let namePanel = '.show-' + div.classList[0].split('-')[0]
            document.querySelector(namePanel).classList.remove("active");
            div.classList.remove("active");
            div.style.display='none';
        },
        updateLayerSlider(evt) {
            if (this.isLayerActive) {
                let newDate = evt.target.value;
                let emitDate = parseInt(newDate);
                let nGroup = this.currentGroup + 2;
                let dropdown = document.getElementById('dropdownDate')
                dropdown.selectedIndex = newDate;
                this.cDate = this.datesList[newDate];
                this.cDateIndex = newDate;
                this.$emit('updateLayerSlider', {nGroup, emitDate})
            }
        },
        updateGroupDropdown(evt) {
            // Cached data are not mutable... it is necessary to emit the new list and reassign it
            // this.datesList = Object.assign({}, this.activeLayersList[evt.srcElement.value].datesList);
            let nGroup = parseInt(evt.srcElement.value)+2;
            let name =this.activeLayersList[evt.srcElement.value].name;
            let arr = this.activeLayersList[evt.srcElement.value].datesList
            let emitDate = arr[arr.length-1]
            this.$emit('updateGroupDropdown', {name, nGroup ,emitDate})
        },
        updateLayerDropdown(evt) {
            if (this.isLayerActive) {
                let newDate = evt.target.value;
                let emitDate = parseInt(newDate);
                let nGroup = this.currentGroup + 2;
                let slider = document.getElementById('sliderDate')
                slider.value = newDate;
                this.cDate = this.datesList[newDate];
                this.cDateIndex = newDate;
                this.$emit('updateLayerDropdown', {nGroup, emitDate})  
            }
        },
        stepBackwards() {
            let to = document.getElementById('sliderDate').value
            let emitDate = to - 1
            let tf = to - 1
            let nGroup = this.currentGroup + 2;
            if (this.isLayerActive==true){
                if (to-1>=0){
                    this.cDate = this.datesList[tf];
                    this.cDateIndex = tf;
                    document.getElementById('dropdownDate').selectedIndex = tf
                    document.getElementById('sliderDate').value = tf
                    this.$emit('updateLayerDropdown', {nGroup, emitDate})
                } else {
                    alert("There are no previous maps for the current layer")
                }
            }
        },
        stepForwards() {
            let to = document.getElementById('dropdownDate').value
            let emitDate = Number(to) + 1
            let tf = Number(to) + 1
            let nGroup = this.currentGroup + 2;
            if (this.isLayerActive == true) {
                if (Number(to)+1<=this.datesListLength-1){
                    this.cDate = this.datesList[tf];
                    this.cDateIndex = tf;
                    document.getElementById('dropdownDate').selectedIndex = tf
                    document.getElementById('sliderDate').value = tf
                    this.$emit('updateLayerDropdown', {nGroup, emitDate})
                } else {
                    alert("There are no later maps for the current layer")
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.time-panel {
    position: absolute;
    display:none;
    top: 2.5em;
    right: 0.5em;
    width: 25vw;
    background: rgba($tertiary-bg-color,0.5);
    text-align: center;

    p{
        padding:0;
        margin:0;
    }
}

.time-controls{
    display: inline-flex;

    div{
        position: relative;
        display: inline-block;
    }

    input[type=range]{
        padding: 0;
        margin: 0;
        width: 95%;
    }
    
    &_item{
        display:inline-block;
    }
}

.time-container{
    background: rgba($primary-bg-color,0.5);
  }


</style>