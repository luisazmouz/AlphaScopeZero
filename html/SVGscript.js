  
  var open;
  var total;

  var rndm15;
  var spotCounter = new Array();
  var getSpots = document.getElementsByClassName("cls-1");
  var getIle = document.getElementsByClassName("cls-2");
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


    setTimeout(getLot, 2000);

    if(firstLoad){
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



