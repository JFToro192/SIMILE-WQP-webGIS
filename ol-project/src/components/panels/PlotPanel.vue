<template>
        <div id="plotPanel" class="plot-panel ol-unselectable ol-control">
            {{child_msg}}
            <div class="svg-container"></div>
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
    mounted() {
        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
            width = $('.svg-container').parent().width(),
            height = $('.svg-container').parent().height()-80;

        // append the svg object to the body of the page
        var svg = d3.select(".svg-container")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        //Read the data
        d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv",
        // When reading the csv, I must format variables:
        function(d){
            return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
        },
        // Now I can use this dataset:
        function(data) {
            // Add X axis --> it is a date format
            var x = d3.scaleTime()
            .domain(d3.extent(data, function(d) { return d.date; }))
            .range([ 0, width ]);
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
            // Add Y axis
            var y = d3.scaleLinear()
            .domain( [8000, 9200])
            .range([ height, 0 ]);
            svg.append("g")
            .call(d3.axisLeft(y));
            // Add the line
            svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function(d) { return x(d.date) })
                .y(function(d) { return y(d.value) })
                )
            // Add the points
            svg
            .append("g")
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", function(d) { return x(d.date) } )
                .attr("cy", function(d) { return y(d.value) } )
                .attr("r", 5)
                .attr("fill", "#69b3a2")
        })
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
    width: 60vw;
    height: 30vh;
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