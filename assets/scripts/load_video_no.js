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

    // function ExplanationFromfile(data){   
    loadData(file.name); 
    load_question(file.name);
    // }
    // d3.json('assets/data/Video.json', ExplanationFromfile);
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)

})()

//to load the video specific data,questions and answers

function load_question(vid){
var x = document.getElementById("mySelect");


var button= d3.select("#button1");
button.on("click",function(d){

var x = document.getElementById("mySelect");
var div= document.getElementById("answer");
console.log(x.options[x.selectedIndex].value);
div.innerHTML=x.options[x.selectedIndex].value;


});


var questions;

// var vid= 's13-d28';

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
      }
    }
  }

});
}

