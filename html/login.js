 
document.cookie = "login=false";
console.log(getCookie("login"));


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function loginAttempt(){
	var tag = document.getElementById("tag").value;
	var erauid = document.getElementById("erauid").value;


	var loginData = "1234567\t7654321\nzzzz\tqqqq\n";
	var ident = loginData.split("\n");
	for(var i=0; i<ident.length; i++){
		var res = ident[i].split("\t");
  		if(tag==res[0] && erauid==res[1]){
        document.cookie = "login=true";
  			document.location = "home.html";
  		}else{
         document.getElementById("failed").innerHTML = 'wrong tag/id number';
      }
      console.log(document.cookie);
	}


}