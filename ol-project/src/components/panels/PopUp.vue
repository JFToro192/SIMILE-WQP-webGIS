<template>
    <div id="popup" class="ol-popup">
        <h6 id="popup-title">{{title}}</h6>
            <a href="#" id="popup-closer" class="ol-popup-closer"></a>
            <div id="info">&nbsp;</div>
        <div id="popup-coordinate">{{pixelCoordinate}}</div>
        <div id="popup-getinfo">{{pixelInfo}}</div>
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
            default:'Select Layer'
        },
        evtCoordinate: {
            type: String,
            required: true,
            default:'Select Layer'
        },
        pixelCoordinate: {
            type: String,
            required: true,
            default:'Coordinates'
        },
        pixelInfo: {
            type: String,
            required: true,
            default:'N/A'
        },
    },
}
</script>

<style lang="css" scoped>
      .ol-popup {
        z-index: 1;
        position: absolute;
        background-color: white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        

        min-width: 280px;
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