
$(document).ready(function() {
		//var addItem = $('.additem');

	$('.additem').click(function() {
		var toAdd = $('.TextInput').val();
		$('.List').append('<ul><input type = "checkbox" class = "checkbox">' + toAdd +'<button class = "remove">Remove Item </button></ul>');
		$('.TextInput').val(' ');
	});

	$('.TextInput').on('keypress', function(e) {
		if (e.which ==13) {
			var toAdd = $('.TextInput').val();
			$('.List').append('<ul><input type = "checkbox" class = "checkbox">' + toAdd +'<button class = "remove">Remove Item </button></ul>');
			$('.TextInput').val(' ');	
		}
	});

	//$('.TextInput').on('click', '.additem',function(){
	//	$('.TextInput').val('');
	//});

	$('.List').on('click', '.remove', function(){
		$(this).parent("ul").remove();
	});

	$('.List').on('click', '.checkbox', function(){
		$(this).parent("ul").toggleClass('strikethrough');
	});


	//$('.ButtonAdd').click(function() {
	//	listitemtext = $('.TextInput').val();
	//	listitem = $('<li class = "item">').text(listitemtext);
	//	console.log(listitem);
	//$('.List').append(listitem);
	//})
});	