

  var x = document.getElementsByClassName("navText");
  var form = document.getElementsByClassName("contactLabel");
  var resized = true;
  var menuTop = document.getElementsByClassName("menuTop");
  var menuBottom = document.getElementsByClassName("menuBottom");
  var fill = document.getElementsByClassName("fill");
  var title = document.getElementsByClassName("name");
  window.onresize = displayMenu;


function displayMenu(){

  console.log("displayMenu loaded");
  
  if(document.documentElement.clientWidth > 950){

    console.log("window > 950");

    menuTop[0].classList.remove('toggle');
    menuBottom[0].classList.remove('toggle')

    fill[0].style['background'] = "#a29065";
    title[0].style.width = "180px";
    title[0].style['padding-left'] = "3%";
    title[0].style.float = "left";

    for (var i = 0; i < x.length; i++) {
      x[i].style.animation = "fadein 50ms ease-in "+((i*200)+800)+"ms forwards";
      x[i].style.display = "inline-block";
      x[i].style.color = "#FFF";
    }
    resized = false;

  }else{

    console.log("window < 950");

    fill[0].style['background'] = "none";

    title[0].style.width = "100%";
    title[0].style['padding-left'] = "0%";
    title[0].style.float = "none";
    title[0].style.textAlign = "center";

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

    console.log("window << 950");

    for (i = 0; i < x.length; i++) {
      if (x[i].style.display === "none") {
        x[i].style.display = "block";
        x[i].style.animation = "fadein 50ms ease-in "+((i*200)+400)+"ms forwards";
        x[i].style.color = "#000"; 
         
        menuTop[0].classList.add('toggle');
        menuBottom[0].classList.add('toggle');
        fill[0].style['background'] = "none";


      }else{
        x[i].style.display = "none";
        fill[0].style['background'] = "none";

        menuTop[0].classList.remove('toggle');
        menuBottom[0].classList.remove('toggle');
      }

    }
  }

}





