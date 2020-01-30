function backspace() {    
  	let tempValue  = document.getElementById('words').value;
  	document.getElementById('words').value=tempValue.substring(0,tempValue.length -1);  
  } 