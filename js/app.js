
$(document).ready(function() {
		var addItem = $('.additem');

	addItem.click(function() {
		var toAdd = $('.TextInput').val();
		$('.List').append('<ul><input type = "checkbox" class = "checkbox">' + toAdd +'<button class = "remove">Remove Item </button></ul>');
	});

	$('.List').on('click', '.remove', function(){
		$(this).parent("ul").remove();
	});

	$('.List').on('click', '.checkbox', function(){
		$(this).parent("ul").css("text-decoration","line-through");
	});


	//$('.ButtonAdd').click(function() {
	//	listitemtext = $('.TextInput').val();
	//	listitem = $('<li class = "item">').text(listitemtext);
	//	console.log(listitem);
	//$('.List').append(listitem);
	//})
});	