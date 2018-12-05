  
  var open;
  var total;
  var firstLoad = false;
  var rndm15;
  var spotCounter = new Array();
  var getSpots = document.getElementsByClassName("cls-1");
  var getIle = document.getElementsByClassName("cls-2");


  function getLot(){ 

    console.log(getCookie("login"));


    var time = new Date();


    // setTimeout(getLot, 5000);


    if(!firstLoad){
      menu();
      displayMenu();
      firstLoad = true;
    }

    
    //sets total to lot spot count and open to 0 by default
    document.getElementById("total").innerHTML = getSpots.length;
    document.getElementById("open").innerHTML = 'n/a';
    console.log(time.getHours());
    console.log(time.getMinutes());
    console.log(time.getSeconds());

    //from 8 to 11 AM Mon-Fri
    if (time.getDay()>0 && time.getDay()<6){
      if(time.getHours()>7 && time.getHours() <12){
        if(time.getMinutes()>44 || time.getMinutes() < 16){
          if(time.getSeconds()<21){
;
              lot020(time);
          }else if(time.getSeconds()>39){

              lot2040(time);
          }else{

              lot4060(time);
          }
        }
      }else{
          lotFull();
          console.log("outside 8 and 11");
        }

    }
  }



  function lot020(){
     document.getElementById("open").innerHTML = 1;
     for(var j = 0; j < getSpots.length;j++)
        getSpots[j].style.fill = "#3BB53B";    
    
  }

  function lot2040(){


  }

  function lot4060(){



  }


  function lotFull(){
    
    console.log("lotFull loaded");
    document.getElementById("open").innerHTML = 0;
    for(var j = 0; j < getSpots.length;j++)
        getSpots[j].style.fill = "#d0d0d0";  

    for(var j = 0; j < getIle.length;j++)
        getIle[j].style.fill = "#c69c6d";  

  }

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}



