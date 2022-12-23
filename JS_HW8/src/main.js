del_but.onclick = function(){
	let el = document.getElementById("text");
	let but = document.getElementById("del_but");
	if(el.style.display != "none"){
		el.style.display = "none";
		but.innerHTML = "Return";
	}
	else{
		el.style.display = "block";
		but.innerHTML = "Delete text";
	}
}

disap_but.ondblclick = function() {
	let but = document.getElementById("disap_but");
	but.style.display = "none";
}

telep_but.onclick = function(){
	let but = document.getElementById("telep_but");
	let x = Math.random() * (210) + 20;
	let y = Math.random() * (260) + 40;
	but.style.position = "absolute";
	but.style.left = x + "px";
	but.style.top = y + "px";
}

more_but.onclick = function(){
	let lis = document.getElementsByTagName("li");
	let but = document.getElementById("more_but");
	let key;
	
	for(let i = 0; i < lis.length; i++){
		if(lis[i].style.display == "none"){
			lis[i].style.display = "block";
			key = 1;
		}
		else{
			lis[i].style.display = "none";
			key = 2;
		}
	}
	if(key == 1)
		but.innerHTML = "Hide";
	else 
		but.innerHTML = "Show more";

	
}
