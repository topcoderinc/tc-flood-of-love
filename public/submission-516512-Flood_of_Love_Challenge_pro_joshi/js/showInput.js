function showInput() {
	if(document.forms["inputForm"]["a"].value == "" || document.forms["inputForm"]["b"].value == "" || document.forms["inputForm"]["c"].value == "" || document.forms["inputForm"]["d"].value == "" || document.forms["inputForm"]["e"].value == "" || document.forms["inputForm"]["f"].value == "" || document.forms["inputForm"]["g"].value == "" || document.forms["inputForm"]["h"].value == "" || document.forms["inputForm"]["i"].value == "" || document.forms["inputForm"]["j"].value == "" || document.forms["inputForm"]["k"].value == "" || document.forms["inputForm"]["l"].value == "" || document.forms["inputForm"]["m"].value == "" || document.forms["inputForm"]["n"].value == ""){
        alert("Please enter all the words to display your Flood Of Love Story.");
	}else{
		document.getElementById('am').innerHTML = document.getElementById('a').value;
		document.getElementById('bm').innerHTML = document.getElementById('b').value;
		document.getElementById('cm').innerHTML = document.getElementById('c').value;
		document.getElementById('dm').innerHTML = document.getElementById('d').value;
		document.getElementById('em').innerHTML = document.getElementById('e').value;
		document.getElementById('fm').innerHTML = document.getElementById('f').value;
		document.getElementById('gm').innerHTML = document.getElementById('g').value;
		document.getElementById('hm').innerHTML = document.getElementById('h').value;
		document.getElementById('im').innerHTML = document.getElementById('i').value;
		document.getElementById('jm').innerHTML = document.getElementById('j').value;
		document.getElementById('km').innerHTML = document.getElementById('k').value;
		document.getElementById('lm').innerHTML = document.getElementById('l').value;
		document.getElementById('mm').innerHTML = document.getElementById('m').value;
		document.getElementById('nm').innerHTML = document.getElementById('n').value;
		show();
    }
}
	function show() {
		document.getElementById('story-display').style.visibility = 'visible';
	}
	
	function hide() {
		document.getElementById('a').value = "";
		document.getElementById('b').value = "";
		document.getElementById('c').value = "";
		document.getElementById('d').value = "";
		document.getElementById('e').value = "";
		document.getElementById('f').value = "";
		document.getElementById('g').value = "";
		document.getElementById('h').value = "";
		document.getElementById('i').value = "";
		document.getElementById('j').value = "";
		document.getElementById('k').value = "";
		document.getElementById('l').value = "";
		document.getElementById('m').value = "";
		document.getElementById('n').value = "";
		document.getElementById('story-display').style.visibility = 'hidden';
	}