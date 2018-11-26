  
  var open
  var total
    
  function getLot(){ 


    open = document.getElementsByClassName("cls-1");
       
    for (var i = 0; i < open.length; i++) {
      open[i].getAttribute('id');
      open[i].style.fill = "#d0d0d0"; //
      total = i;
    }
    //sets total and open to 0
      document.getElementById("total").innerHTML = open.length;
      document.getElementById("open").innerHTML = 0;

    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    //generates random number range 0~15
    var rndm15 = Math.floor(Math.random() * 15) + 1;
    var spots = [];

    //makes all spots gray again (closed)
    for (var i = 0; i < open.length; i++) {
      open[i].style.fill = "#d0d0d0"; 

    }

    //sets open spots to green
    for(var zero = 0;zero<rndm15;zero++){

      var random = Math.floor(Math.random() * open.length) + 1;
      spots.push(random);
      open[random].style.fill = "#3BB53B";
      
    }

    document.getElementById("open").innerHTML = spots.length;

    for (var i in spots) {
      console.log(spots[i])
    }

  }