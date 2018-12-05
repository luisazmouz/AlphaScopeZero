var open;
var total;

var rndm15;
var spotCounter = new Array();
var getSpots = document.getElementsByClassName("cls-1");
var getIsl = document.getElementsByClassName("cls-2");
var crntLotCpty;

var x = document.getElementsByClassName("navText");
var form = document.getElementsByClassName("contactLabel");
var resized = true;
var menuTop = document.getElementsByClassName("menuTop");
var menuBottom = document.getElementsByClassName("menuBottom");
window.onresize = displayMenu;
var firstLoad = false;



function getLot(){

  var time = new Date();


  setTimeout(getLot, 20000);

  for(var p = 0; p < getSpots.length;p++){
  getSpots[p].style.fill = "#737373";
  }

  if(!firstLoad){
    menu();
    displayMenu();
    firstLoad = true;
 }

  for (var i = 0; i < form.length; i++) {
         form[i].style.animation = "fadein 50ms ease-in "+((i*200)+800)+"ms forwards";
         form[i].style.opacity = 1;
  }

  //sets total to lot spot count and open to 0 by default
  document.getElementById("total").innerHTML = getSpots.length;
  document.getElementById("open").innerHTML = 'n/a';
  console.log(time.getHours());
  console.log(time.getMinutes());
  console.log(time.getSeconds());
  var openspots = 0;
  //from 8 to 11 AM Mon-Fri
  if (time.getDay()>=0 && time.getDay()<6){
    if(time.getHours()>=7 && time.getHours() <12){
      console.log(openspots)
      if(time.getMinutes()>44 || time.getMinutes() < 16){
        if(time.getSeconds()<21){

            lot020();
        }else if(time.getSeconds()<41){

            lot2040();
        }else if(time.getSeconds()>41){

            lot4060();
        }
      }else{
        lotFull();
      }
    }else if(time.getHours()>=12 && time.getHours()<17){
          if(time.getMinutes()>44 || time.getMinutes() < 16){
            if(time.getSeconds()<21){

              lotlate020();
                console.log(openspots);
            }else if(time.getSeconds()<41){

              lotlate2040();
                console.log(openspots);
            }else if(time.getSeconds()>41){

              lotlate4060();
                console.log(openspots);
            }
      }else{
        lotFull();
      }
    }else if(time.getHours()>=17 && time.getHours()<21){
      openspots = Math.floor(getSpots.length / 2);
          console.log(openspots);
      document.getElementById("open").innerHTML = openspots;
      for(var j = 0; j < openspots;j++){
      getSpots[j].style.fill = "#3BB53B";
      }
      for(var p = openspots; p <= getSpots.length;p++){
      getSpots[p].style.fill = "#737373";
      }

    }else if(time.getHours()>=21 && time.getHours()<0){
      openspots = Math.floor(getSpots.length / 1.3);
          console.log(openspots);
      document.getElementById("open").innerHTML = openspots;
      for(var j = 0; j < openspots;j++){
      getSpots[j].style.fill = "#3BB53B";
      }
      for(var p = openspots; p <= getSpots.length;p++){
      getSpots[p].style.fill = "#737373";
      }
    }
  }

  for(var Isl = 0; Isl < getIsl.length;Isl++){
  getIsl[Isl].style.fill = "#c69c6d";
  }
}





function displayMenu(){

console.log("displayMenu loaded");

if(document.documentElement.clientWidth > 950){

  console.log("window > 950");


  menuTop[0].classList.remove('toggle');
  menuBottom[0].classList.remove('toggle')

  for (var i = 0; i < x.length; i++) {
       x[i].style.animation = "fadein 50ms ease-in "+((i*200)+800)+"ms forwards";
       x[i].style.display = "inline-block";
       x[i].style.color = "#FFF";

  }
  resized = false;

}else{

   console.log("window < 950");

  if(!resized){
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      x[i].style.color = "#000";
    }
    resized = true;
  }
}
}


function menu(){

console.log("menu loaded");

if(document.documentElement.clientWidth <= 950){

  console.log("window < 800");

  for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
      x[i].style.animation = "fadein 50ms ease-in "+((i*200)+400)+"ms forwards";

      document.getElementsByClassName("menuTop")[0].classList.add('toggle');
      document.getElementsByClassName("menuBottom")[0].classList.add('toggle');
    }else{
      x[i].style.display = "none";

      document.getElementsByClassName("menuTop")[0].classList.remove('toggle');
      document.getElementsByClassName("menuBottom")[0].classList.remove('toggle');
    }
  }
}
}





function lot020(){
    openspots = 2;
   document.getElementById("open").innerHTML = openspots ;
   for(var j = 0; j < openspots;j++)
      getSpots[Math.floor(Math.random() * getSpots.length) + 1].style.fill = "#3BB53B";

}

function lot2040(){
    openspots = 4;
    document.getElementById("open").innerHTML = openspots ;
   for(var j = 0; j < openspots;j++)
      getSpots[Math.floor(Math.random() * getSpots.length) + 1].style.fill = "#3BB53B";

}

function lot4060(){
    openspots = 1;
    document.getElementById("open").innerHTML = openspots ;
   for(var j = 0; j < openspots;j++)
      getSpots[Math.floor(Math.random() * getSpots.length) + 1].style.fill = "#3BB53B";


}

   function lotlate020(){
    openspots = 6;
   document.getElementById("open").innerHTML = openspots ;
   for(var j = 0; j < openspots;j++)
      getSpots[Math.floor(Math.random() * getSpots.length) + 1].style.fill = "#3BB53B";

}

function lotlate2040(){
    openspots = 10;
    document.getElementById("open").innerHTML = openspots ;
   for(var j = 0; j < openspots;j++)
      getSpots[Math.floor(Math.random() * getSpots.length) + 1].style.fill = "#3BB53B";

}

function lotlate4060(){
    openspots = 4;
    document.getElementById("open").innerHTML = openspots ;
   for(var j = 0; j < openspots;j++)
      getSpots[Math.floor(Math.random() * getSpots.length) + 1].style.fill = "#3BB53B";


}


function lotFull(){

  console.log("lotFull loaded");
  document.getElementById("open").innerHTML = 0;
  for(var j = 0; j < getSpots.length;j++){
  getSpots[j].style.fill = "#d0d0d0";
  }

  for(var j = 0; j < getIsl.length;j++){
  getIsl[j].style.fill = "#c69c6d";
  }

}
