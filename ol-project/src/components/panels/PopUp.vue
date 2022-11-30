<template>
    <div id="popup" class="ol-popup">
        <div id="popup-title">{{title}}</div>
            <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-info">
            <div id="popup-getinfo">Value: {{pixelInfo}} {{pixelUnits}}</div>
            <div id="popup-coordinate">Coordinates: {{pixelCoordinate}}</div>
        </div>
    </div>
</template>

<script>

export default {
    setup() {
    },
    data: function() {
        return{
        }
    },
    props: {
        map: {
            type:Object,
            required: true,
        },
        title: {
            type: String,
            required: true,
            default:'Select layer'
        },
        evtCoordinate: {
            type: String,
            required: true,
            default:'N/A'
        },
        pixelCoordinate: {
            type: String,
            required: true,
            default:'click-on map'
        },
        pixelInfo: {
            type: String,
            required: true,
            default:'N/A'
        },
        pixelUnits: {
            type: String,
            required: true,
            default:'N/A'
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/style.scss";
    
    .ol-popup {
        z-index: 1;
        position: absolute;
        background-color: rgba($secondary-bg-color,0.7);
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        min-width: 280px;
    }

    #popup-title{
        text-align: center;
        font-weight: bold;
    }

    #popup-info{
        padding: 4px;
        background: rgba($tertiary-bg-color,0.7)
    }

    .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
    }
    .ol-popup-closer:after {
        content: "✖";
    }
</style>