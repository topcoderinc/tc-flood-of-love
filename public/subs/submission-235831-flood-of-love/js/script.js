// jQuery script for the application
$(function (e) {
	// Add text button
	$("#add-text").click(function (e) {
		// Show form
		$("#createForm").show();
		// Append input to form
		$("#createForm .content").append(
			'<div class="row control-group">' +
	            '<div class="form-group col-xs-12 floating-label-form-group controls">' +
	                '<label>Text</label>' +
	                '<textarea rows="3" class="form-control" placeholder="Text" required></textarea>' +
	            '</div>' +
	    		'<a href="javascript:;" class="remove-input"><i class="fa fa-trash-o"></i></a>' +
	       '</div>'
		);
		// Adds remove functionality
		attachRemoveInputToTrashIcon();
	});
	// Add word button
	$("#add-word").click(function (e) {
		// Show form
		$("#createForm").show();
		// Append input to form
		$("#createForm .content").append(
			'<div class="row control-group">' +
	            '<div class="form-group col-xs-12 floating-label-form-group controls">' +
	                '<label>Word</label>' +
	                '<input type="text" class="form-control" placeholder="Word" required>' +
	            '</div>' +
	    		'<a href="javascript:;" class="remove-input"><i class="fa fa-trash-o"></i></a>' +
	       '</div>'
		);
		// Adds remove functionality
		attachRemoveInputToTrashIcon();
	});
	// Attaches remove input listener to trash icon next to input
	function attachRemoveInputToTrashIcon ( ) {
		// Remove input from formCreate
		$(".remove-input").click(function (e) {
			$(this).parent().remove();
			// Check if formCreate empty and if it is hide it
			if ($("#createForm .content").find(".row.control-group").length === 0) {
				$("#createForm").hide();
			}
		});
	}
});



