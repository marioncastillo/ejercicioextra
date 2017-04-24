function convertirCelcius(){
	var temp= document.getElementById("farenheit").value;
	var res = Math.round((temp-32)*(5/9));
	alert("Tu grados en Celsius son:" + res);
};
