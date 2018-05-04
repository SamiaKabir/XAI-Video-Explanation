// //Function to load video on div based on the dropdown selection
// function loadVideoFromFile(fileName) {
//     d3.select('#video')
//         // .attr('controls',true)
//         .html("")
//         .append('source')
//         .attr('src', function () {
//             return 'assets/videos/' + fileName;
//         })
//         .attr('type', 'video/mp4');
// }

// //Function to create dropdown list and click-n-load video from selection
// function createSelectionList(data) {
//     d3.select('#dropdown-selection').selectAll('li')
//         .data(data)
//         .enter().append('li')
//         .html(function (d) {
//             return '<a href="#"> ' + d.name + ' </a>';
//         })
//         .on ('click', function (d) {
//             d3.select('#dropdown-btn')
//                 .node().innerHTML = d.name + ' <span class="caret"></span>';
//             loadVideoFromFile(d.fileName);
//             console.log(d);
//             loadExplanation(d.explanations);
//         });
// }

// //Function to build a dropdown dynamically and load video based on Video.json
// function dropdownModule() {
//     d3.select('#video-dropdown')
//         .append('div')
//         .attr('id', 'dropdown-div')
//         .append('button')
//         .classed('btn', true)
//         .classed('btn-warning', true)
//         .classed('dropdown-toggle', true)
//         .attr('type', 'button')
//         .attr('data-toggle', 'dropdown')
//         // .attr ('text','Please select a video to continue!')
//         .attr('id', 'dropdown-btn')
//         .style({
//             'padding': '1px'
//         })
//         .append('span').classed('caret', true);

//     var button = d3.select('#dropdown-btn');
//     button.node().innerHTML = 'Please Select a video! <span class="caret"></span>';

//     d3.select('#dropdown-div')
//         .append('ul')
//         .classed('dropdown-menu', true)
//         .attr('id', 'dropdown-selection')
//         .style({
//             'top': '8%',
//             // 'right':'2%',
//             'left':'auto',
//             'width': 'fit-content'
//         });

    //d3.json('assets/data/Video.json', createSelectionList);
// }

// dropdownModule();
// console.log('load bayad shode bashe!');


// console.log('oumad in ja!');
// d3.select('#chart-div')
//     .append('svg')
//     .attr('width', '100%')
//     .attr('height', '150px')
//     .style({
//         'background-color':'rgba(66, 139, 202, 0.28)',
//         'margin-top':'10px',
//         'margin-bottom':'-4px'
//     });

var bardata = [{'prob':61, 'color': 'rgb(123, 253, 251)', 'text':'Holding'}, {'prob':45, 'color': 'rgba(147, 226, 255, 0.72)', 'text':'Placing'},{'prob':30, 'color':'rgba(92, 135, 173, 0.65)', 'text':'Cleaning'}];
var bardata2 = [{'prob':36.5, 'color': 'rgb(178, 143, 249)', 'text':'Cucumber'},{'prob':30, 'color':'rgb(119, 86, 185)', 'text':'Avocado'},{'prob':13, 'color': 'rgba(75, 0, 255, 0.22)', 'text':'Towel'}];
var bardata3 = [{'prob':70, 'color': 'rgba(255, 211, 250, 0.72)', 'text':'Counter'}, {'prob':65, 'color': 'rgb(218, 181, 222)', 'text':'Cutting Board'}, {'prob':50, 'color':'rgba(212, 83, 198, 0.69)', 'text':'Sink'},];

var newdata = [
    {
        'color':'rgba(126, 220, 220, 0.72)',
        'text':'Action',
        'backgroundColor': 'blue',
        'items': [
            {
                'name':'Placing',
                'prob':30
            },
            {
                'name':'Cleaning',
                'prob':50
            },
            {
                'name':'Holding',
                'prob':61
            }
        ]
    },
    {
        'color':'rgba(75, 0, 255, 0.22)',
        'text':'Object',
        'backgroundColor': 'red',
        'items': [
            {
                'name':'Cucumber',
                'prob':36.5
            },
            {
                'name':'Towel',
                'prob':3
            },
            {
                'name':'Avocado',
                'prob':30
            }
        ]
    },
    {
        'color':'rgba(240, 79, 183, 0.32)',
        'text':'Location',
        'backgroundColor': 'Green',
        'items': [
            {
                'name':'Counter',
                'prob':70
            },
            {
                'name':'Cutting Board',
                'prob':69
            },
            {
                'name':'Refrigerator',
                'prob':20
            },
            {
                'name':'Sink',
                'prob':50
            }
        ]
    }
];

var barWidth = 242,
    barOffset = 10;
//3
//
// var yScale = d3.scale.linear()
//     .domain([0, 100])
//     .range([0, 150]);
//
// var xScale = d3.scale.ordinal()
//     .domain(d3.range(0, 4))
//     .rangeBands([1, 240]);
//
// var divs = d3.select('#chart-div')
//         .selectAll('div').data(newdata)
//         .enter().append('div')
//                 .classed('col-md-4 chart-div', true)
//                 .style(
//                     'background-color',function (d) {
//                         return d.backgroundColor;
//                     })
//                 .style('height','150px')
//                 .append('svg')
//                 .style({'width':'100%',
//                         'height':'100%'});
//
// var charts = divs.selectAll('rect').data(function (d) {
//         return d.items;
//     })
//     .enter().append('rect')
//     // .style('fill',function (d) {
//     //     return d.color;
//     // })
//     .style('fill','white')
//     .attr('height',function (d) {
//         return d.prob;
//     })
//     .attr('width',function (d) {
//         return xScale.rangeBand();
//     })
//     .attr('x',function (d,i) {
//         return i*(60 + barOffset);
//     })
//     .attr('y',function (d,i) {
//         return 0;
//     })
//     .attr('id','charts');
//
// charts.selectAll('text')
//     .data(newdata, function (d) {
//         console.log(d.items);
//         return d.items;
//     }).enter().append('text')
//     .attr('fill','black')
//     .attr('x',40)
//     .attr('y', 40)
//     .text(function (d) {
//         return d.name + '( ' + d.prob + '% )';
//
//     });



//2
// var xScale = d3.scale.linear()
//     .domain([0,100])
//     .range([0,242]);
//
// var yScale = d3.scale.ordinal()
//     .domain(d3.range(0,4))
//     .rangeBands([0,150]);
//
// var chartSVG = d3.select('#chart-div').append('svg')
//     .attr('width', '100%')
//     .attr('height', '150px')
//     .attr('id','chart')
//     .style({
//         'background-color':'rgba(66, 139, 202, 0.28)',
//         'margin-top':'10px',
//         'margin-bottom':'-4px'
//     });
// chartSVG.selectAll('rect').data(newdata)
//     .enter().append('rect')
//     .attr('fill',function (d) {
//         return d.backgroundColor;
//     })
//     .attr('width',barWidth)
//     .attr('height',150)
//     .attr('x', function (d,i) {
//         return i*barWidth;
//     })
//     .attr('y', 0)
//     .classed('test',true);
//
// chartSVG.selectAll('test')
//     .selectAll('rect').data(newdata.items)
//     .enter().append('rect')
//     .attr('width', function (d) {
//         return xScale(d.prob);
//     })
//     .attr('height', function (d) {
//         return yScale.rangeBand();
//     })
//     .attr('y',function (d,i) {
//         return yScale(i);
//     })
//     .attr('x', function (d,i) {
//         return xScale(i);
//     })
//     .text(function (d) {
//         return d.name;
//     })
//1
//
// var yScale = d3.scale.linear()
//     .domain([0, 100])
//     .range([0, 150]);
//
// var xScale = d3.scale.ordinal()
//     .domain(d3.range(0, bardata.length))
//     .rangeBands([1, 211]);
//
// var div1 = d3.select('#chart-div')
//             .append('div')
//             .classed('col-md-4 chart-div', true)
//             .style('background-color', 'white')
//             .style('height','150px');
//
// div1.append('svg')
//     .attr('width', '100%')
//     .attr('height', '150px')
//     .attr('id','chart1')
//     .style({
//         'background-color':'rgba(66, 139, 202, 0.28)',
//         // 'margin-top':'10px',
//         'margin-bottom':'-4px'
//     })
//     .selectAll('rect').data(bardata)
//     .enter().append('rect')
//     .style('fill', function (d) {
//         return d.color;
//     })
//     .attr('width', xScale.rangeBand())
//     .attr('height', function(d) {
//         return yScale(d.prob);
//     })
//     .attr('x', function(d,i) {
//         return xScale(i);
//     })
//     .attr('y', function(d) {
//         return 150 - yScale(d.prob);
//     })
//     .attr('rx',5)
//     .attr('ry',5)
//     .style({
//         'stroke':'black',
//         'stroke-width':'1px'
//     });
//
// d3.select('#chart1')
//     .selectAll('text').data(bardata)
//     .enter().append('text')
//     .attr('x', function (d,i) {
//         return xScale(i)+1;
//     })
//     .attr('y', function (d) {
//         return 145 - yScale(d.prob);
//     })
//     .text(function (d) {
//         return d.text + ': ' + d.prob + ' %';
//
//     })
//     .style({
//         'font-size':'x-small'
//     });
//
// var div2 = d3.select('#chart-div')
//     .append('div')
//     .classed('col-md-4 chart-div', true)
//     .style('background-color', 'white')
//     .style('height','150px');
//
// div2.append('svg')
//     .attr('width', '100%')
//     .attr('height', '150px')
//     .attr('id','chart2')
//     .style({
//         'background-color':'rgba(66, 139, 202, 0.28)',
//         // 'margin-top':'10px',
//         'margin-bottom':'-4px'
//     })
//     .selectAll('rect').data(bardata2)
//     .enter().append('rect')
//     .style('fill', function (d) {
//         return d.color;
//     })
//     .attr('width', xScale.rangeBand())
//     .attr('height', function(d) {
//         return yScale(d.prob);
//     })
//     .attr('x', function(d,i) {
//         return xScale(i);
//     })
//     .attr('y', function(d) {
//         return 150 - yScale(d.prob);
//     })
//     .attr('rx',5)
//     .attr('ry',5)
//     .style({
//         'stroke':'black',
//         'stroke-width':'1px'
//     });
//
// d3.select('#chart2')
//     .selectAll('text').data(bardata2)
//     .enter().append('text')
//     .attr('x', function (d,i) {
//         return xScale(i)+1;
//     })
//     .attr('y', function (d) {
//         return 145 - yScale(d.prob);
//     })
//     .text(function (d) {
//         return d.text + ': ' + d.prob + ' %';
//
//     })
//     .style({
//         'font-size':'x-small'
//     });
//
// var div3 = d3.select('#chart-div')
//     .append('div')
//     .classed('col-sm-4 chart-div', true)
//     .style('background-color', 'white')
//     .style('height','150px');
//
// div3.append('svg')
//     .attr('width', '100%')
//     .attr('height', '150px')
//     .attr('id','chart3')
//     .style({
//         'background-color':'rgba(66, 139, 202, 0.28)',
//         // 'margin-top':'10px',
//         'margin-bottom':'-4px'
//     })
//     .selectAll('rect').data(bardata3)
//     .enter().append('rect')
//     .style('fill', function (d) {
//         return d.color;
//     })
//     .attr('width', xScale.rangeBand())
//     .attr('height', function(d) {
//         return yScale(d.prob);
//     })
//     .attr('x', function(d,i) {
//         return xScale(i);
//     })
//     .attr('y', function(d) {
//         return 150 - yScale(d.prob);
//     })
//     .attr('rx',5)
//     .attr('ry',5)
//     .style({
//         'stroke':'black',
//         'stroke-width':'1px'
//     });
//
// d3.select('#chart3')
//     .selectAll('text').data(bardata3)
//     .enter().append('text')
//     .attr('x', function (d,i) {
//         return xScale(i)+1;
//     })
//     .attr('y', function (d) {
//         return 145 - yScale(d.prob);
//     })
//     .text(function (d) {
//         return d.text + ': ' + d.prob + ' %';
//
//     })
//     .style({
//         'font-size':'x-small'
//     });