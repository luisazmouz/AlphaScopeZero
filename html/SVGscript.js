  
  var open;
  var total;
  var time = new Date();
  var rndm15;
  var spotCounter = new Array();

  function getLot(){ 

    getSpots = document.getElementsByClassName("cls-1");
        //sets total and open to 0
    document.getElementById("total").innerHTML = getSpots.length;
    document.getElementById("open").innerHTML = 'n/a';
       

    //algo to get spot depening on day and time
    if (time.getDay()>0 && time.getDay()<6){

      min = Math.ceil(getSpots.length*.9);
      max = Math.floor(getSpots.length);
      rndm15 = Math.floor(Math.random() * (max - min)) + min;


    }else{
      rndm15 = Math.floor(Math.random() * (getSpots.length)) + (getSpots.length)*.9;
    }

    for (var i = 0; i < getSpots.length; i++) {
      getSpots[i].getAttribute('id');
      getSpots[i].style.fill = "#d0d0d0"; //
      total = i;
    }


    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    //generates random number range 0~15
    
    var spots = [];

    //makes all spots gray again (closed)
    for (var i = 0; i < getSpots.length; i++) {
      getSpots[i].style.fill = "#d0d0d0"; 

    }

    //sets open spots to green
    for(var i = 0;i<rndm15;i++){

      var random = Math.floor(Math.random() * rndm15) + 1;
      getSpots[random].style.fill = "#3BB53B";
      
    }

    // for (var i = 0; i < getSpots.length; i++) {
    //   getSpots[i].getAttribute('id');
    //   getSpots[i].style.fill = "#3BB53B"; //
    //   total = i;
    // }

    document.getElementById("open").innerHTML = rndm15  ;

    for (var i in getSpots) {
      console.log(getSpots[i])
    }

  }