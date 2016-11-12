var counter = 0;
var perSecondCounter = 0;
var perSecondCost = 10;
var perSecondPerSecondCounter = 0;
var perSecondPerSecondCost = 100;
function gainTacos() {
counter = counter + 1;
document.getElementById("counter1").innerHTML = counter + " Tacos"; 
}
    function perSecond(){
	if(counter >= perSecondCost) {
		perSecondCounter++;
		counter -= perSecondCost;
		perSecondCost += 1;
		document.getElementById("p/s").innerHTML= perSecondCounter + " Tacos per second";
        document.getElementById("counter1").innerHTML = counter + " Tacos";
		document.getElementById("clickerCost").innerHTML = "1 clicker costs " + perSecondCost + " Tacos";
	}
	else{
	alert("Need 10 tacos!");	
	}
    }
  function perSecondPerSecond() {
   if(counter >= perSecondPerSecondCost){
       counter -= perSecondPerSecondCost;
       perSecondPerSecondCost += 10;
       perSecondPerSecondCounter++;
       document.getElementById("counter1").innerHTML = counter + " Tacos";
       document.getElementById("clickersPerSecond").innerHTML= perSecondPerSecondCounter + " clicker(s) per 5 seconds";
       document.getElementById("clickersPerSecondCost").innerHTML= "1 spicy sauce costs " + perSecondPerSecondCost + " Tacos";
   }
    else {
       alert("Need 100 tacos");
   }
}
            function second (){
                  counter += perSecondCounter;
                  document.getElementById("counter1").innerHTML = counter + " Tacos";
}
  setInterval(second, 1000);
function fiveSecond(){
                      perSecondCounter += perSecondPerSecondCounter;
                      document.getElementById("p/s").innerHTML= perSecondCounter + " Tacos per second";
                  }
setInterval(fiveSecond, 5000);
