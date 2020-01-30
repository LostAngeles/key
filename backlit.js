let lit = -1;


function backlit() {
	lit *= -1;

	if (lit == 1) {
		document.querySelectorAll('#the-keyboard .key').forEach(function (elem){
  			elem.classList.add("key-back-lit")
  		});;
	}

	if (lit == -1) {
		document.querySelectorAll('#the-keyboard .key').forEach(function (elem){
  			elem.classList.remove("key-back-lit")
  		});;
	}
}