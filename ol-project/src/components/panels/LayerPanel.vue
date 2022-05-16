<template>
        <div id="layerPanel" class="layer-panel ol-unselectable ol-control active">
            <div class="panel-title">{{child_msg}}</div>
            <!-- <h6 class="static-layers-title"><i class="bi bi-arrow-right"></i>Static Layers</h6> -->
            <div class="static-layers active" id="staticLayers">
                <div class="static-layer layer-list" v-for="(layer,key,index) in layer_list.static" :key="layer.static">
                    <div class="layer-items">
                        <div v-bind:class="'chckbx-layer layer-static-'+index">
                            <input  type="checkbox"
                                    title="set visible"
                                    name="" 
                                    id=""
                                    v-bind:class="'layer-static-'+index"
                                    v-on:change="setLayerVisible($event,1,index,'static',{key})">
                        </div>
                        <div class="title-layer"><p v-bind:title="key">{{key}}</p></div>
                        <!-- <div class="dwnld-layer"><i class="bi bi-box-arrow-down"></i></div> -->
                        <div    class="info-layer"
                                v-on:click="setLayerMetadata('static',{key})"><i class="bi bi-info-square"></i>
                        </div>
                        <div  class="opct-layer"><i class="bi bi-brightness-high"></i></div>
                        <div class="opct-range-layer">
                            <input  type="range" 
                                    name="" 
                                    id=""
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value="0.8"
                                    v-on:change="setLayerOpacity($event,1,index)">
                        </div>
                    </div>
                </div>
            </div>
            <h6 class="time-series-layers-title"><i class="bi bi-arrow-right"></i>Time Series</h6>
            <div class="time-series-layers active" id="timeSeriesLayers">
                <div class="time-series-layer layer-list"  v-for="(layer, key, index) in layer_list.time" :key="layer.time">
                    <div class="layer-items">
                        <div v-bind:class="'chckbx-layer'+index">
                            <input  type="checkbox"
                                    title="set visible"
                                    name="" 
                                    id=""
                                    v-bind:class="'layer-timeSeries-'+index"
                                    v-on:change="setLayerVisible($event,2,index,'time',{key})">
                        </div>
                        <div class="title-layer"><p v-bind:title="key">{{key}}</p></div>
                        <!-- <div class="dwnld-layer"><i class="bi bi-box-arrow-down"></i></div> -->
                        <div    class="info-layer"
                                v-on:click="setLayerMetadata('time',{key})"
                                ><i class="bi bi-info-square"></i>
                        </div>
                        <div  class="opct-layer"><i class="bi bi-brightness-high"></i></div>
                        <div class="opct-range-layer">
                            <input type="range" 
                                    name="" 
                                    id=""
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value="0.8"
                                    v-on:change="setLayerOpacity($event,2,index)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Layer',
	props:{
		child_msg: {
			type: String,
			default: 'Layer Panel',
		},
        layer_list: {
            type: Object,
        }
	},
    data () {
        return{
        }
    },
    methods: {
        setLayerVisible(evt,nGroup,index,layerType, layerName) {
            this.$emit('setLayerVisible', {nGroup, index})
            if (evt.target.checked){
                this.setLayerMetadata(layerType, layerName)
            }
            console.log(this.layer_list);
        },
        setLayerOpacity(evt, nGroup,index) {
            let opacity = evt.target.value;
            this.$emit('setLayerOpacity', {opacity, nGroup,index})
        },
        setLayerMetadata(layerType, layerName) {
            this.$emit('setLayerMetadata', {layerType, layerName})
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.layer-panel {
    position: absolute;
    // display:none;
    top: 0.5em;
    left: 2.5em;
    width: 30vw;
    height: auto;
    padding:2px;
    max-height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;

    h6{
        margin:0;
        font-size: 16px;
    }
}

.layer-list{
    background: rgba($tertiary-bg-color,0.5)!important;
}

.layer-items{
    display: inline-flex;
    vertical-align: middle;
    width:98%;
    background: rgba($primary-bg-color,0.5);
    padding: 4px;
    border-radius: 4px;

    ul{
        list-style: none;
        padding: 0;
        margin:0;
    }

    .chckbx-layer{
        width: 5%;
    }

    .title-layer{
        width:35%;
        p{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }

    .dwnld-layer{
        width: 5%;
    }

    .info-layer{
        width: 5%;
    }

    .opct-layer{
        width: 5%;
    }

    .opct-range-layer{
        width: 35%;
    }

    p{
        margin: 0;
    }

    input[type=range]{
        padding: 0;
        margin: 0;
        width: 100%;
    }

    div{
        padding: 4px 4px 4px 4px;
    }

}
</style>