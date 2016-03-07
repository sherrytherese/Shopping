
$(document).ready(function() {
		var addItem = $('.additem');

	addItem.click(function() {
		var toAdd = $('.TextInput').val();
		$('.ShoppingList').append('<li><input type = "checkbox">' + toAdd +'<button class = "remove">Remove Item </button></li>');
	});

	$('.ShoppingList').on('click', '.remove', function(){
		$(this).parent("li").remove();
	});



	//$('.ButtonAdd').click(function() {
	//	listitemtext = $('.TextInput').val();
	//	listitem = $('<li class = "item">').text(listitemtext);
	//	console.log(listitem);
	//$('.List').append(listitem);
	//})
});	