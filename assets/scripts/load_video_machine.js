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
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)

})()

//to load the video specific data,questions and answers

function load_question(vid){
var x = document.getElementById("mySelect");
var time=[];
var explanations=[];
var flag=0;

var button= d3.select("#button1");
button.on("click",function(d){

var x = document.getElementById("mySelect");
var div= document.getElementById("answer");
console.log(x.options[x.selectedIndex].value);
div.innerHTML=x.options[x.selectedIndex].value;
change_video_time(time[x.selectedIndex]);

//to clear the previous list if any
if(flag>0)
{
clear_list(flag);
loadData(explanations[x.selectedIndex]);
}
else{
loadData(explanations[x.selectedIndex]);
}
flag++;

});


var questions;


var file='assets/data/video_new.json';

d3.json(file, function(data){


  console.log(data)
  console.log(vid)

  

  for(var i=0;i<data.length;i++)
  {
    if(data[i].videoName==vid)
    {
       var len=data[i].listOfQuestions.length;

       for(var j=0;j<len;j++)
       {

           var question=data[i].listOfQuestions[j].questionText;
           var value=data[i].listOfQuestions[j].computerAnswer;
           console.log(question)
           console.log(value)
           // select.options.add( new Option(question,value) );

           var option = document.createElement("option");
           option.text = question;
           option.value=value;
           x.add(option);
           time[j]=data[i].listOfQuestions[j].listOfKeyFrames.startTime;
           
           var len2=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations.length;
           console.log(len2)
           var temp2=[];
           for(var k=0; k<len2;k++)
           {
             var temp={}

             temp.action=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].activity;
             temp.object=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].object;
             temp.location=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].location;
             temp.accuracy=data[i].listOfQuestions[j].listOfKeyFrames.textExplanations[k].approximation;

             temp2.push(temp);
           }

           explanations.push(temp2);

      }
    }
  }

  console.log(explanations)

});
}

function change_video_time(time)
{
                 

var vid=document.getElementById("video");
console.log(video.currentTime);

video.currentTime=time*100;

}