usedLocation=[]; //array to store the used location to place the image

usedLocationCounter=0;

clicked=null;

clickedId=null;

correct=[];

correctLen=0;

function start(){

/*hide the instruction field and get values*/

$("#instructions").hide();

gridSize=$("#gridSize").val();

revealTime=$("#revealTime").val()*1000; //taken in ms

/*place random image according to grid selected*/

if(gridSize=="lvl1"){

Size=8;

gameOverTime=120000+revealTime;

for(i=1;i<5;i++){

var rand=getNumber([1,2,3,4,5,6,7,8]); //function to get the location to place image. Parameter tells the maximum number

var rand1=getNumber([1,2,3,4,5,6,7,8]);

/*alert(rand+"and"+rand1);*/

$("#"+gridSize).find("td#"+rand).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand).find("img").attr("name",i);

$("#"+gridSize).find("td#"+rand1).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand1).find("img").attr("name",i);

}

/*hide image after waiting specified time*/

setTimeout(function(){

for(i=1;i<9;i++){

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}, revealTime);

}else if (gridSize=="lvl2") {

Size=10;

gameOverTime=150000+revealTime;

for(i=1;i<6;i++){

var rand=getNumber([1,2,3,4,5,6,7,8,9,10]); //function to get the location to place image. Parameter tells the maximum number

var rand1=getNumber([1,2,3,4,5,6,7,8,9,10]);

/*alert(rand+"and"+rand1);*/

$("#"+gridSize).find("td#"+rand).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand).find("img").attr("name",i);

$("#"+gridSize).find("td#"+rand1).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand1).find("img").attr("name",i);

}

/*hide image after waiting specified time*/

setTimeout(function(){

for(i=1;i<11;i++){

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}, revealTime);

}else if (gridSize=="lvl3") {

Size=12;

gameOverTime=180000+revealTime;

for(i=1;i<7;i++){

var rand=getNumber([1,2,3,4,5,6,7,8,9,10,11,12]); //function to get the location to place image. Parameter tells the maximum number

var rand1=getNumber([1,2,3,4,5,6,7,8,9,10,11,12]);

/*alert(rand+"and"+rand1);*/

$("#"+gridSize).find("td#"+rand).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand).find("img").attr("name",i);

$("#"+gridSize).find("td#"+rand1).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand1).find("img").attr("name",i);

}

/*hide image after waiting specified time*/

setTimeout(function(){

for(i=1;i<13;i++){

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}, revealTime);

}

/*show the appropriate game grid*/

$("#"+gridSize).show();

/* the timer */

var startTime = new Date().getTime();

var interval = setInterval(function(){

if(new Date().getTime() - startTime > gameOverTime){

clearInterval(interval);

alert("Time over!");

location.reload(); //resets the game

return;

}

  

}, 1000);  

}

function getNumber(set){

var rndm = Math.floor(Math.random() * set.length);

while(jQuery.inArray(set[rndm],usedLocation)!=-1){

rndm = Math.floor(Math.random() * set.length);

}

usedLocation[usedLocationCounter]=set[rndm];

usedLocationCounter++;

return set[rndm];

}

function check(e){

$(e).attr("src",$(e).attr("name")+".png"); //to reveal the image

$(e).attr("onclick",""); //prevents clicking an already clicked option

if(clicked==null){

clicked=$(e).attr("name");

clickedId=$(e).attr("id");

}

else{

if(clicked==$(e).attr("name")){

//alert("ok");

correct[correctLen]=clickedId;

correctLen++;

correct[correctLen]=$(e).attr("id");

correctLen++;

//check if game is finished

if(correct.length==Size){

$("#win").show();

}

clicked=null;

}

else{

//alert("not");

clicked=null;

}

for(i=0;i<Size+1;i++){

if(jQuery.inArray(""+i,correct)!=-1){

//alert("i is "+i);

continue;

}

//alert(i);

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}

}