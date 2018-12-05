 
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

	/*document.ready(function() {
  ajax({
    type: "GET",
    url: "logindata.csv",
    dataType: "text",
    success: function(data) {
    	var allText=data;
    	console.log(data);
     	 var allTextLines = allText.split(/\r\n|\n/);
  		

   		 
   		}
   	})});*/


	//console.log(dataaa);
/*
	var csv = require('csv'); 

	var obj = csv(); 

	obj.from.path("./logindata.csv").to.array(function (data) {

    	for (var index = 0; index < data.length; index++) {
      	 	if(tag==data[index][0] && stu==data[index][1]){
  				document.location.href = "home.html";
  			}
   		}
	});*/

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
	/*
	require('fs').readFileSync('logindata.txt').toString().split('\n').forEach(
	function (line) { 
		var res = line.split(" ");
  		if(tag==res[0] && stu==res[1]){
  			document.location.href = "home.html";
  		}
	 }
	)

	var lineReader = require('readline').createInterface({
  	input: require('fs').createReadStream('logindata.txt')
	});
	console.log(lineReader);

	lineReader.on('line', function (line) {
		var res = line.split(" ");
  		if(tag==res[0] && stu==res[1]){
  			document.location.href = "home.html";
  		}
	});*/

}