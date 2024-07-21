	var resultbar = document.getElementById("result-bar");
	function calculate(x){
		resultbar.innerText += x;
		resultbar.style.color = "white";
	}
	function finalres(){
		resultbar.innerText = eval(resultbar.innerText);
	}
	function clearDisplay(){
		resultbar.innerText = " ";
	}
	function deleteValue(){
		resultbar.innerText = resultbar.innerText.slice(0,(resultbar.innerText.length-1));
	}