var visible_inputs = [];
// Add event listener for user input
var timeoutID;
document.addEventListener('keyup', function (){        
  if (timeoutID){
    window.clearTimeout(timeoutID);
  }
  timeoutID = window.setTimeout(function (){
	console.log('Time to check blanks');
	checkBlankCompletion();
  },1000);
});
function showStory(story){
	$("#currentStory").html(story.innerHTML);
	createBlanks('currentStory');
	showSelectiveSentences('currentStory');
}
function checkBlankCompletion() {
    var allFilled = true;
	for (var i = 0; i<visible_inputs.length; i++){
	    if (visible_inputs[i].value == ""){
			allFilled = false;
			break;
		}
	}
	if (allFilled) {
	    revealCurrentStory();
	}
}
function revealCurrentStory() {
	var lines = $('#currentStory>p').filter(function(i){return $(this).css('visibility')=='hidden'});
	for (var i = 0; i<lines.length; i++){
		$(lines[i]).css('visibility','visible');
	}
}
function showSelectiveSentences(story) {
  var lines = $('#' + story + '>p');
  for (var i = 0; i<lines.length/2; i++){
    var l = getRandomIntInclusive(0, lines.length-1);
	$(lines[l]).css('visibility','hidden');
  }
  // Select visible lines
  var vls = $('#' + story + '>p').filter(function(i){return $(this).css('visibility')!='hidden'});
  visible_inputs = $(vls).find('input');
}
function createBlanks(story) {
   var lines = $('#' + story + '>p');
   for (var i = 0; i<lines.length; i++){
      var str = lines[i].innerHTML;
	  // Match for Type of Words {}
	  var marked = str.match(/{\w+}/g);
	  // Create HTML based on matches
	  if (marked != null){
		  for (var j = 0; j<marked.length; j++){
			  var wordType = marked[j].substr(1,marked[j].length-2);
			  str = str.replace(marked[j], "<input class='center-align' placeholder='" + wordType + "'>");
		  }
	  }
	  lines[i].innerHTML = str;
  }
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}