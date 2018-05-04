function createXScale(minDomain, maxDomain, minRange, maxRange) {
    return d3.scale.ordinal()
        .domain(d3.range(minDomain,maxDomain))
        .rangeBands([minRange, maxRange]);
}

function createYScale(minDomain, maxDomain, minRange, maxRange) {
    return d3.scale.linear()
        .domain([minDomain, maxDomain])
        .range([minRange, maxRange]);
}

function createChartSvg(chartDiv) {
    return chartDiv.append("div")
        .classed("col-md-4", true)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "120px")
        .classed("svg-style", true);
}

function createBarChart(data, svg, xScale, yScale, colors, tooltip, newHeight) {
    svg.selectAll("rect")
        .data(data).enter()
        .append("rect")
        .style('fill', function (d, i) {
            return colors(i);
        })
        .style('opacity', 0.5)
        .attr('width', xScale.rangeBand())
        .attr('height', function (d) {
            return yScale(d.probability);
        })
        .attr('x', function (d, i) {
            return xScale(i);
        })
        .attr('y', function (d) {
            return 120 - yScale(d.probability);
        })
        .attr('rx', 3)
        .attr('ry', 3)
        .style({
            'stroke': 'black',
            'stroke-width': '1px'
        })
        .on('mouseenter', function (d) {
            d3.select(this).transition()
                .duration(500)
                .style('opacity', 1);
            tooltip.transition()
                .duration(100)
                .style('opacity', 0.9);
            tooltip.html(d.probability)
                .style('left', (d3.event.pageX -50) + 'px' )
                .style('top', (d3.event.pageY - 30) + 'px' )
        })
        .on('mouseout', function (d) {
            tooltip.transition()
                .style('opacity', 0);
            d3.select(this).transition().duration(500).style('opacity', 0.5);
        });
    //
    svg.selectAll('text')
        .data(data).enter()
        .append('text')
        .text(function (d) {
            return d.name;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return xScale(i) + xScale.rangeBand()/2;
        })
        .attr("y", function(d) {
            return 140 - yScale(d.probability);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black");


    // -----> For Vertical Axis, uncomment! <------


    // var yAxis = d3.svg.axis()
    //     .scale(createYScale(0, 1, newHeight, 0))
    //     .orient('left')
    //     .ticks(10);
    // var yGuide = svg.append('g');
    // yAxis(yGuide);
    // yGuide.attr('transform', 'translate(35,0)');
    // yGuide.selectAll('path')
    //     .style({'fill': 'none', 'stroke': '#000'});
    // yGuide.selectAll('line')
    //     .style({'stroke': '#000'});
}

function loadCharts(associations) {
    //removing previous chart!
    d3.select("#chart-div").html("");

    var listOfData = [associations.listOfAllDetectedObject, associations.listOfAllDetectedAction, associations.listOfAllDetectedLocation];

    for (var i = 0; i<3; i++) {
        var chartDiv = d3.select("#chart-div");
        var chartSvg = createChartSvg(chartDiv);
        var data = listOfData[i];
        var tooltip = d3.select("body").append('div')
            .style('position', 'absolute ')
            .style('padding', '0 10px')
            .style('background', 'white')
            .style('opacity', 0);

        var newWidth = parseFloat(d3.select('#chart-div svg').style('width').replace("px", ""), 10),
            newHeight = parseFloat(d3.select('#chart-div svg').style('height').replace("px", ""), 10);

        var yScale = createYScale(0, 1, 0, newHeight*0.8),
            xScale = createXScale(0, listOfData[i].length, 0, newWidth);

        var colors = d3.scale.linear()
            .domain([0, 1])
            .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);

        createBarChart(data, chartSvg, xScale, yScale, colors, tooltip, newHeight);
    }
}