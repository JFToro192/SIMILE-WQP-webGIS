<template>
        <div id="plotPanel" class="plot-panel ol-unselectable ol-control">
            <div class="panel-title">{{child_msg}}</div> 
            <div id="metric-modal"></div>
        </div>
</template>

<script>
export default {
    name: 'Plot',
	props:{
		child_msg: {
			type: String,
			default: 'Plot Panel (Click on a map to plot the WQP estimates)',
		}
	},
    data () {
        return {
        }
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
}

#plotPanel{
    padding: 5px!important;
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