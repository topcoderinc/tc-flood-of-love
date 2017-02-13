// Single page application
var app = angular.module('madLibsApp', ["firebase"]);

// Configure Firebase
app.config(function() {
  var config = {
    databaseURL: "https://flood-of-love.firebaseio.com/" // Your Firebase Database URL ("https://*.firebaseio.com")
  };
  firebase.initializeApp(config);
});

// Filter for reverse order
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

// mainController
app.controller('mainController', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
	// Get Firebase ref and node of Mad Libs list
	var ref = firebase.database().ref("/mad-libs").orderByChild("likes");
    $scope.madLibsList = $firebaseArray(ref);
    // Like functionality
	$scope.like = function (item) {
		item.likes = item.likes + 1;
		$scope.madLibsList.$save(item);
	};
	// Start function
	$scope.start = function (event) {
		// Go to next input
		$(event.target).parent().hide();
		$(event.target).parent().next().show();
	};
	// Next function
	$scope.next = function (event) {
		if ($(event.target).hasClass("btn-next") &&  ($(event.target).parent().find("input").val() === "" || $(event.target).parent().find("input").val() === undefined)) {
			$(event.target).parent().find(".form-group").css("border-color", "#e66");
		} else {
			// Remove error color in case it exists
			$(event.target).parent().find(".form-group").css("border-color", "#eeeeee");
			// Get value from input
			var index = $(event.target).data("index");
			var value = $(event.target).parent().find(".form-group input").val();
			$(event.target).closest(".inputs-container").next().find(".word[data-index='" + index +"']").text(value + " ");
			// Go to next input
			$(event.target).parent().hide();
			$(event.target).parent().next().show();
		}
	};
	// Reveal function
	$scope.reveal = function (event) {
		// Hide button
		$(event.target).parent().hide();
		// Hide .inputs-container and show .results-container
		$(event.target).closest(".inputs-container").hide().next().show();
	};
	// Reset function
	$scope.reset = function (event) {
		// Hide results container
		$(event.target).closest(".results-container").hide();
		// Reset inputs in .inputs-container, show start button in .input-container and show .inputs-container
		$(event.target).closest(".results-container").prev().find("input").val("");
		$(event.target).closest(".results-container").prev().find(".input-block").first().show();
		$(event.target).closest(".results-container").prev().show();
	};
	// On createForm submit
	$("#createForm").submit(function (e) {
		e.preventDefault();
		// Get all data and make a nice object out of it
		var newMadLib = { title: "" , author: "Unknown", likes: 0, content: [ ] };
			// Add title and author
		var $header = $("#createForm .header").find("input");
		newMadLib.title = $header.first().val();
		newMadLib.author = $header.last().val() || "Unkown";
			// Add questions
		$("#createForm .content .form-group.floating-label-form-group.controls").each(function (index) {
			var kindOfInput = $(this).find("label").text();
			if (kindOfInput === "Text") {
				newMadLib.content.push({ type: "text", value: $(this).find("textarea").val() });
			} else {
				newMadLib.content.push({ type: "word", value: $(this).find("input").val() });
			}
		});
		// Add new Mad Lib to Firebase
		$scope.madLibsList.$add(newMadLib);
		// Clean up createForm
		$("#createForm .header").find("input").val("");
		$("#createForm .content").empty();
		// Hide createForm
		$("#createForm").hide();
	});
}]);