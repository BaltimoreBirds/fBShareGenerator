jQuery(document).ready(function($){	

	$('form#fBGeneratorForm').submit(function(event){
		event.preventDefault();
		var shareLink = Generator.generate({
			title: $('input[name="title"]').val(),
			picURL: $('input[name="picURL"]').val(),
			shareURL: $('input[name="shareURL"]').val(),
			description: $('textarea[name="shareDescription"]').val(),
		});
		$('div#output p.linkOutput').text(shareLink);
		$('div#output a').attr('href', shareLink).show();
	});	

	$('textarea[name="shareDescription"]').on('keyup', function(){
		$('span#descripCharCount').text( 300- ($(this).val().length) );
	});

	$('input[name="title"]').on('keyup', function(){
		$('span#titleCharCount').text( 100- ($(this).val().length) );
	});	
});