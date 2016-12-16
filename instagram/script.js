var url;
$('#enviar').on('click', function(event) {
	event.preventDefault();
	url = $('#url-image').val();
	if(url != ''){
		$.each($('.iphone img'), function(index, val) {
			$(val).attr('src', url);
		});
		$('.url-image').fadeOut();
		$('.screen-photograph img').fadeIn();		
	}
});