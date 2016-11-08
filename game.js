var counter = 0;
var perSecondCounter = 0;
var perSecondCost = 10;
var perSecondPerSecondCounter = 100;
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
	alert("Not enough tacos!");	
	}
    }
    setInterval(second,1000);
            function second (){
                  counter += perSecondCounter;
                  document.getElementById("counter1").innerHTML = counter + " Tacos";
}
function perSecondPerSecond() {
   if(counter >= perSecondPerSecondCost){
       counter -= perSecondPerSecondCost;
       perSecondPerSecondCounter += 1;
       document.getElementById("counter1").innerHTML = counter + " Tacos"
   }
    else {
       alert("Not enough Tacos!!")
   }
}