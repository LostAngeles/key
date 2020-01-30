let caps = -1;   // Initial values
let lang = 1;    // Initial values
let shift = -1;  // Initial values
let ctrl = -1;   // Initial values
let alt = -1;    // Initial values

if (lang == "1") {
		document.getElementById("top-eng").style.display = "flex";    // Initial values
		document.getElementById("top-rus").style.display = "none";    // Initial values
		document.getElementById("middle-eng").style.display = "flex"; // Initial values
		document.getElementById("middle-rus").style.display = "none"; // Initial values
		document.getElementById("bottom-eng").style.display = "flex"; // Initial values
		document.getElementById("bottom-rus").style.display = "none"; // Initial values
	}
	else if (lang == "-1") {
		document.getElementById("top-eng").style.display = "none";    // Initial values
		document.getElementById("top-rus").style.display = "flex";    // Initial values
		document.getElementById("middle-eng").style.display = "none"; // Initial values
		document.getElementById("middle-rus").style.display = "flex"; // Initial values
		document.getElementById("bottom-eng").style.display = "none"; // Initial values
		document.getElementById("bottom-rus").style.display = "flex"; // Initial values
	}

// change language

function change() { 
	lang *= -1;	
	if (lang == "1") {
		document.getElementById("top-eng").style.display = "flex";
		document.getElementById("top-rus").style.display = "none";
		document.getElementById("middle-eng").style.display = "flex";
		document.getElementById("middle-rus").style.display = "none";
		document.getElementById("bottom-eng").style.display = "flex";
		document.getElementById("bottom-rus").style.display = "none";
	}

	else if (lang == "-1") {
		document.getElementById("top-eng").style.display = "none";
		document.getElementById("top-rus").style.display = "flex";
		document.getElementById("middle-eng").style.display = "none";
		document.getElementById("middle-rus").style.display = "flex";
		document.getElementById("bottom-eng").style.display = "none";
		document.getElementById("bottom-rus").style.display = "flex";
	}
}

// printing and check for CAPS, SHIFT, ALT CTRL
function print(event) { 	

	if (event.target.dataset.spec == 20) {     // checking for caps 
		caps *= -1;

		if (caps == 1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="20"]').forEach(function (elem){
				elem.classList.add("caps-activate");
			});;
		}

		if (caps == -1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="20"]').forEach(function (elem){
				elem.classList.remove("caps-activate");
			});;
		}
	}


	if (event.target.dataset.spec == 16) { // checking for shift 
		shift *= -1;

		if (shift == 1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="16"]').forEach(function (elem){
				elem.classList.add("caps-activate");
			});;

			if (lang == 1) { // turn english
				document.getElementById("digit-usual").style.display = "none";
				document.getElementById("digit-shift-rus").style.display = "none";
				document.getElementById("top-eng").style.display = "none";
				document.getElementById("middle-eng").style.display = "none";
				document.getElementById("bottom-eng").style.display = "none";
				document.getElementById("digit-shift-eng").style.display = "flex";
				document.getElementById("top-eng-shift").style.display = "flex";
				document.getElementById("middle-eng-shift").style.display = "flex";	
				document.getElementById("bottom-eng-shift").style.display = "flex";
			}
			if (lang == -1) { // turn russian
				document.getElementById("digit-usual").style.display = "none";
				document.getElementById("digit-shift-eng").style.display = "none";
				document.getElementById("top-rus").style.display = "none";
				document.getElementById("bottom-rus").style.display = "none";
				document.getElementById("digit-shift-rus").style.display = "flex";
				document.getElementById("top-rus-shift").style.display = "flex";
				document.getElementById("bottom-rus-shift").style.display = "flex";		
			}

		}

		if (shift == -1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="16"]').forEach(function (elem){
				elem.classList.remove("caps-activate");
			});;

		if ( lang == 1) { // turn off english
			document.getElementById("digit-usual").style.display = "flex";
			document.getElementById("top-eng").style.display = "flex";
			document.getElementById("middle-eng").style.display = "flex";
			document.getElementById("bottom-eng").style.display = "flex";
			document.getElementById("digit-shift-rus").style.display = "none";
			document.getElementById("digit-shift-eng").style.display = "none";
			document.getElementById("top-eng-shift").style.display = "none";
			document.getElementById("middle-eng-shift").style.display = "none";
			document.getElementById("bottom-eng-shift").style.display = "none";		
		}  

	if (lang == -1) { // turn off russian
		document.getElementById("digit-usual").style.display = "flex";
		document.getElementById("top-rus").style.display = "flex";
		document.getElementById("bottom-rus").style.display = "flex";
		document.getElementById("digit-shift-eng").style.display = "none";
		document.getElementById("digit-shift-rus").style.display = "none";
		document.getElementById("top-rus-shift").style.display = "none";
		document.getElementById("bottom-rus-shift").style.display = "none";	
	} 
}
}


	if (event.target.dataset.spec == 17) {     // checking for ctrl 
		ctrl *= -1;

		if (ctrl == 1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="17"]').forEach(function (elem){
				elem.classList.add("caps-activate");
			})
		}
		if (ctrl == -1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="17"]').forEach(function (elem){
				elem.classList.remove("caps-activate");
			})
		}

	}

	if (event.target.dataset.spec == 18) {     // checking for alt 
		alt *= -1;

		if (alt == 1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="18"]').forEach(function (elem){
				elem.classList.add("caps-activate");
			})
		}
		if (alt == -1) {
			document.querySelectorAll('#the-keyboard .key[data-spec="18"]').forEach(function (elem){
				elem.classList.remove("caps-activate");
			})
		}		
	}

	if ((alt == 1) && (ctrl == 1)) change();  // CTRL+ALT have to change language

	

  if (event.target.dataset.text == "nn") alert ("No need to implement this one")	

  	// recognize letter and print it
  if ((caps == 1 || shift == 1) && caps != shift) document.getElementById("words").value += String.fromCharCode(event.target.dataset.text).toUpperCase();
  else document.getElementById("words").value += String.fromCharCode(event.target.dataset.text); 

}

  // CTRL & ALT to change language 
  function runOnKeys(func, ...codes) {
  	let pressed = new Set();
  	document.addEventListener('keydown', function(event) {
  		pressed.add(event.code);
        for (let code of codes) { 
        	if (!pressed.has(code)) {
        		return;
        	}
        }
        
        pressed.clear();
        func();
    });
  	document.addEventListener('keyup', function(event) {
  		pressed.delete(event.code);
  	});
  }

  runOnKeys(
  	() => change(),
  	"ControlLeft",
  	"AltLeft"
  	);






