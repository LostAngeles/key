document.addEventListener('keydown', function(event) {  

	if (event.keyCode == 16 && lang == 1) { //english
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

	if (event.keyCode == 16 && lang == -1) { //russian
		document.getElementById("digit-usual").style.display = "none";
		document.getElementById("digit-shift-eng").style.display = "none";
		document.getElementById("top-rus").style.display = "none";
		document.getElementById("bottom-rus").style.display = "none";
		document.getElementById("digit-shift-rus").style.display = "flex";
		document.getElementById("top-rus-shift").style.display = "flex";
		document.getElementById("bottom-rus-shift").style.display = "flex";		
	}

	document.querySelectorAll('#the-keyboard .key[data-spec="'+event.keyCode+'"]').forEach(function (elem){
  			elem.classList.add("test")
  		});;

});    
document.addEventListener('keyup', function(event) {  
	if (event.keyCode == 16 && lang == 1) { //english
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

	if (event.keyCode == 16 && lang == -1) { //russian
		document.getElementById("digit-usual").style.display = "flex";
		document.getElementById("top-rus").style.display = "flex";
		document.getElementById("bottom-rus").style.display = "flex";
		document.getElementById("digit-shift-eng").style.display = "none";
		document.getElementById("digit-shift-rus").style.display = "none";
		document.getElementById("top-rus-shift").style.display = "none";
		document.getElementById("bottom-rus-shift").style.display = "none";	
	}    
	document.querySelectorAll('#the-keyboard .key[data-spec="'+event.keyCode+'"]').forEach(function (elem){
  			elem.classList.remove("test")
  		});;
});