<template>
    <div id="basemapPanel" class="basemap-panel ol-unselectable ol-control">
        <p>{{child_msg}}</p>
		<div class="basemap-container">
			<div v-for="(basemap,index) in data" :key="basemap.layer"
				class="basemap-container_item">
				<div>
					<input type="radio" 
						:name="'basemap-radio'"
						:id="basemap.layer+'-option'"
						:class="'basemap-option'"
						:checked="basemap.active"
						v-on:change="setLayerVisible(0,index)">
					<p>{{basemap.layer}}</p>
				</div>
				<img :src="getImage(basemap.layer)" alt="">
			</div>
		</div>
    </div>
</template>

<script>
// Vite build does not recognize dynamic paths from the vue template. It is required to do it manually.
import osm from 'img/basemap/osm.png'
import terrain from 'img/basemap/terrain.png'
import watercolor from 'img/basemap/watercolor.png'
import toner from 'img/basemap/toner.png'
import none from 'img/basemap/none.png'


export default {
    name: 'Basemap',
	props:{
		child_msg: {
			type: String,
			default: 'Basemap Panel',
		},
		data: {
			type: Array,	
		},
		layer_list: {
			type: Object,
			require: true,
		}

	},
    data () {
      return {
      }
    },
	methods: {
		getImage(name) {
			if (name == "osm") {
				return osm
			} else if (name == "terrain") {
				return terrain
			} else if (name=="watercolor") {
				return watercolor
			} else if (name=="toner") {
				return toner
			} else if (name=="none") {
				return none
			}
		},
		setLayerVisible(nGroup,index) {
            this.$emit('setLayerVisible', {nGroup, index})
        },
	}
}

</script>

<style lang="scss" scoped>
.basemap-panel {
    position: absolute;
    display:none;
    bottom: 2.25em;
    left: 2.5em;
    width: auto;
    text-align: center;
        
    p{
        padding: 0;
        margin: 0;
    }

}

.basemap-container{
    position: relative;

    &_item{
        padding: 0px 1px 0px 1px;
        display: inline-block;
        width: 15vw;
        
        div{
            position: relative;
            display: inline-flex;
            background: rgba(white,0.5);
            width: 100%;
            z-index:1;
        }
        
        img{
            position: relative;
            top:-20px;
            width: 100%;
        }
    }
}
</style>