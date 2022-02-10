<template>
        <div id="metadataPanel" class="metadata-panel ol-unselectable ol-control">
            <div class="panel-title">{{child_msg}}</div> 
            <div class="meta-title">
                <h6>{{title}}</h6>
            </div>
            <div class="meta-abstract"><strong>Abstract:</strong>{{abstract}}</div>
            <div class="meta-info"> 
                <div class="meta-details">
                    <div class="meta-details-typology"><strong>Typology:</strong>{{typology}}</div>
                    <div class="meta-details-units"><strong>Units:</strong> [{{units}}]</div>
                    <div class="meta-details-crs"><strong>CRS:</strong>{{crs}}</div>
                    <div class="meta-details-tstart"><strong>Time Start:</strong><br>{{to}}</div>
                    <div class="meta-details-tend"><strong>Time end:</strong><br>{{tf}}</div>
                </div>
                <div class="meta-legend">
                    <div><strong>Legend:</strong></div>
                    <div class="meta-legend-image">
                        <img :src="legend" alt="">
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
            required:true,
			default: 'Metadata Panel',
		},
        title: {
			type: String,
            required:true,
			default: 'Title',
		},
        abstract: {
			type: String,
            required:true,
			default: 'Select a layer',
		},
        typology: {
			type: String,
            required:true,
			default: 'N/A',
		},
        units: {
			type: String,
            required:true,
			default: 'N/A',
        },
        crs: {
			type: String,
            required:true,
			default: 'N/A',
		},
        to: {
			type: String,
            required:true,
			default: 'N/A',
		},
        tf: {
			type: String,
            required:true,
			default: 'N/A',
		},
        legend: {
			type: String,
            required:true,
			default: 'N/A',
		},
	},
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.metadata-panel {
    position: absolute;
    display:none;
    bottom: 5.5em;
    right: 0.5em;
    width: 40vw;
    height: 40vh;
    background: rgba($primary-bg-color,0.5)!important;

    div{
        padding:0;
        margin:0;
    }

    h6,p{
        font-size: 14px;
        padding:0;
        margin:0;        
    }
}

.panel-title{
    width: 100%;
    text-align: center;
}

.meta-title{
    width: 100%;
    text-align: center;
}

.meta-abstract{
    width: 100%;
    height: 40%;
    background: rgba($tertiary-bg-color,0.5);
    overflow-y: auto;
}

.meta-info{
    display: inline-flex;
    width: 100%;
    height: 45%;
    border-radius: 4px;
    overflow-y: auto;
}

.meta-details{
    width: 50%;
    height:30vh;
    background: rgba($tertiary-bg-color,0.5);
}

.meta-legend{
    position: relative;
    width: 50%;
    height:30vh;
    background: rgba($tertiary-bg-color,0.5);  
    overflow-y: auto;

    img{
        width: 50%;
    }

    &-image{
        display:flex;
        justify-content: center;
    }
}
</style>