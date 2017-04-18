require(["jquery","dialog2"],function ($,Dialog) {
	$("#btn").on('click', function() {
		var dialog = new Dialog();
		dialog.open();
	});
})