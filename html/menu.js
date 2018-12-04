
window.onresize = displayMenu;
var x = document.getElementsByClassName("navText");
var form = document.getElementsByClassName("contactLabel");
var resized = true;

console.log(x);

function mainFunctions(){
	menu();
	displayMenu();
	for (var i = 0; i < form.length; i++) {
		     form[i].style.animation = "fadein 50ms ease-in "+((i*200)+800)+"ms forwards";
		     form[i].style.opacity = 1;
	}

}

function cookies() {
	alert("loaded");
}


function menu(){

	if(document.documentElement.clientWidth <= 800){

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

function displayMenu(){
	
	if(document.documentElement.clientWidth > 800){

		document.getElementsByClassName("menuTop")[0].classList.remove('toggle');
		document.getElementsByClassName("menuBottom")[0].classList.remove('toggle')

		for (var i = 0; i < x.length; i++) {
		     x[i].style.animation = "fadein 50ms ease-in "+((i*200)+800)+"ms forwards";
		     x[i].style.display = "inline-block";

		}
		resized = false;

	}else{

		if(!resized){
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none"; 
			}
			resized = true;
		}
	}
}




// var w = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     x = w.innerWidth  || e.clientWidth || g.clientWidth,
//     y = w.innerHeight || e.clientHeight|| g.clientHeight;
// alert(x + ' × ' + y);