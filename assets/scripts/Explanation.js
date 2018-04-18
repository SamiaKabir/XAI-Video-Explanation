
function createString (explanation) {
    var string =  "<span class=\"fa fa-chevron-right\" aria-hidden=\"true\"></span>"
        + "The man is <mark style=\"background-color: rgba(126, 220, 220, 0.72);\"><b>"
        + explanation.action + "</b></mark> a <mark style=\"background-color: rgba(75, 0, 255, 0.22);\"><b>"
        + explanation.object + "</b></mark> on the <mark style=\"background-color: rgba(240, 79, 183, 0.32);\"><b>"
        + explanation.location + "</b></mark>."
        + "<span class=\"pull-right text-muted medium\"><em> <b>"
        + explanation.accuracy + "%</b></em></span>";
    console.log (string);
    return string;
}

// To load explanation data from json files
function loadData(data)
{
    console.log(data);

    fileID= 'assets/data/Video.json';
    
    //var explanation= [];

    d3.json(fileID, function(d){
  // taxiData = d
    console.log(d.length)
    console.log(d[1].fileName)
      
    for (var j = 0; j <d.length; j++) {
          if(d[j].fileName==data){
             //explanation.push(d[j].explanations)
             loadExplanation(d[j].explanations)
        }
    }})

   // console.log(explanation)

}

//to show explanations in panel 2

function loadExplanation (data) {

     console.log(data);
    
    var listItems = d3.select("#list").selectAll("a")
        .data(data).enter();
    listItems.append("a")
        .classed("list-group-item", true)
        .append("p")
        .classed("explanation-options", true)
            .html(function(d) {
                return createString(d);
            });
}
