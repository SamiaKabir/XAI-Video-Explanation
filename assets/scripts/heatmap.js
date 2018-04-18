var t;
// var elapsed=0;


 //var paused= video.paused;

  // if(!paused)
  // {

  	t=d3.timer(update);
  // 	console.log(1);
  // }
  // else
  // 	t.stop();




function update(elapsed)
{
var elap=video.currentTime;                    //time of current frame


var trailTime = 5 * 1000;
var dat=[{"x":110,"y":90},{"x":150,"y":30}];   // This is the array of coordinate you need to enter
var vid=document.getElementById("video");
var c=document.getElementById("video-overlay");
var ctx= c.getContext("2d");


var i;
console.log(video.currentTime);

ctx.clearRect(0, 0, c.width, c.height);


if(elap>10)                        //elap is compared to start time of frame. We uses 10,24 and 45 as example start time
{
for(i=0;i<dat.length;i++)
{
ctx.clearRect(0, 0, c.width, c.height);
ctx.lineWidth=1;
ctx.strokeStyle="#FF0000";
ctx.rect(dat[i].x,dat[i].y,70,40);                       //the bounding boxes 
ctx.stroke();
console.log(dat[i].x);
}
}

if(elap>=24)
{

ctx.clearRect(0, 0, c.width, c.height);
ctx.lineWidth=1;
ctx.strokeStyle="#FF0000";
ctx.rect(150,30,70,40);                                 //another bounding box
ctx.stroke();

}



if(elap>=45)
{

ctx.clearRect(0, 0, 150, c.height);                  //another bounding box at another frame
ctx.lineWidth=1;
ctx.strokeStyle="#FF0000";
ctx.rect(180,100,30,30);
ctx.stroke();

}


if(elap>=100)
	ctx.clearRect(0, 0, c.width, c.height);           //clear all bounding boxes


 
return this;

}



