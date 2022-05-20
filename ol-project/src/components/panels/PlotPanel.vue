<template>
        <div id="plotPanel" class="plot-panel ol-unselectable ol-control">
            <div class="panel-title">{{child_msg}}
                <button class="close-panel-btn" style="color:red;" @click="closePanel($event)">x</button>    
            </div> 
            <div id="metric-modal"></div>
        </div>
</template>

<script>
export default {
    name: 'Plot',
	props:{
		child_msg: {
			type: String,
			default: 'Plot Panel',
		}
	},
    data () {
        return {
        }
    },
    methods: {
        closePanel(evt){
            let div = evt.path[2]
            let namePanel = '.show-' + div.classList[0].split('-')[0]
            document.querySelector(namePanel).classList.remove("active");
            div.classList.remove("active");
            div.style.display='none';
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.plot-panel {
    position: absolute;
    display:none;
    bottom: 0.5em;
    left: 10em;
    width: 700px;
    height: 425px;
    z-index:1;
}

#plotPanel{
    padding: 2px!important;
    margin: 0!important;
}

.svg-container {
    display: inline-block;
    position: relative;
    width: 100%;
    vertical-align: top;
    overflow: hidden;
}
.svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
}
</style>