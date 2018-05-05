// This js is used to load the video and associated data

//To load video file from directory
 var vid;

(function localFileVideoPlayer() {
    'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
  }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
    console.log(file.name);

    load_question(file.name);

  }
  var inputNode = document.querySelector('input');
  inputNode.addEventListener('change', playSelectedFile, false)

})()

d3.select("#video_selector").on("input", function () {
    d3.select("#mySelect").html("");
    d3.select("#chart-div-labels").html("");
    d3.select("#chart-div").html("");
    d3.select("#answer").html("");
    d3.selectAll('.list-group-item').remove();
    d3.selectAll('.explanation-options').remove();
});

d3.select("#mySelect").on("input", function () {
    d3.select("#chart-div-labels").html("");
    d3.select("#chart-div").html("");
    d3.select("#answer").html("")
    d3.selectAll('.list-group-item').remove();
    d3.selectAll('.explanation-options').remove();
})

//to load the video specific data,questions and answers
var flag=0;
function load_question(vid){
    var x = document.getElementById("mySelect");
    var time=[];
    var explanations=[];
    var associations = [];

    var button= d3.select("#button1");

    // CLICK TO SEE THE RESULTS OF THE QUESTIONS AS WELL AS THE EXPLANATIONS
    button.on("click",function(d){

        var x = document.getElementById("mySelect");
        var div= document.getElementById("answer");
        console.log(x.options[x.selectedIndex].value);
        div.innerHTML=x.options[x.selectedIndex].value;
        change_video_time(time[x.selectedIndex]);
        d3.select("#chart-div-labels").html("");
        //to clear the previous list if any
        if(flag>0) {
            clear_list(flag);
            loadData(explanations[x.selectedIndex], associations[x.selectedIndex]);

        }
        else {
            loadData(explanations[x.selectedIndex], associations[x.selectedIndex]);
        }
        flag++;
    });

    var questions;

    var file='assets/data/video_new.json';

    //FILLING EXPLANATIONS AND ASSOCIATIONS FOR ALL THE QUESTIONS RELATED TO THIS VIDEO
    d3.json(file, function(data){
      for(var i=0;i<data.length;i++)
      {
        if(data[i].videoName==vid)
        {
           var len=data[i].listOfQuestions.length;

           for(var j=0;j<len;j++)
           {
               var currentQuestion=data[i].listOfQuestions[j];
               var option = document.createElement("option");

               option.text = currentQuestion.questionText;
               option.value= currentQuestion.computerAnswer;
               x.add(option);

               time[j]=currentQuestion.listOfKeyFrames.startTime;

               var len2=currentQuestion.listOfKeyFrames.textExplanations.length;
               var temp2=[];
               var listOfProbabilities = [];
               for(var k=0; k<len2;k++)
               {
                 var temp={};

                 // explanations data
                 temp.action=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].activity;
                 temp.object=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].object;
                 temp.location=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].location;
                 temp.accuracy=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].approximation;

                 temp2.push(temp);

               }

               explanations.push(temp2);
               associations.push(currentQuestion.listOfKeyFrames.associatedFeatures);
          }
        }
      }
    });
}

function change_video_time(time)
{
                 

var vid=document.getElementById("video");
console.log(video.currentTime);

video.currentTime=time*100;

}