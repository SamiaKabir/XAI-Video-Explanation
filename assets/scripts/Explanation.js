
var listItems;
function createString (explanation) {
    var string =  "<span class=\"fa fa-chevron-right\" aria-hidden=\"true\"></span>"
        + "Activity:  <mark style=\"background-color: rgba(126, 220, 220, 0.72);\"><b>"
        + explanation.action + "</b></mark> ;  Object:  <mark style=\"background-color: rgba(75, 0, 255, 0.22);\"><b>"
        + explanation.object + "</b></mark> ; Location:  <mark style=\"background-color: rgba(240, 79, 183, 0.32);\"><b>"
        + explanation.location + "</b></mark>."
        + "<span class=\"pull-right text-muted medium\"><em> <b>"
        + explanation.accuracy*100 + "%</b></em></span>";
    console.log (string);
    return string;
}

// To load explanation data from json files
function loadData(data)
{
     console.log(data);

      
    for (var j = 0; j <data.length; j++) {
             loadExplanation(data)
        }


}

//to show explanations in panel 2

function loadExplanation (data) {




    listItems = d3.select("#list").selectAll("a")
    .data(data).enter();

    console.log("here");

    listItems.append("a")
        .classed("list-group-item", true)
        .append("p")
        .classed("explanation-options", true)
            .html(function(d) {
                return createString(d);
    });

    

}

//to clear the prevous list before loading new list dor each question
function clear_list(flag){

    //listItems.remove();
    d3.selectAll('.list-group-item').remove()

}