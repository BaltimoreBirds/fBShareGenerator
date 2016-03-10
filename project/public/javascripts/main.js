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
		$('input[name="shareLinkInput"]').val(shareLink).change();
		$('div#output a').attr('href', shareLink).show();
		$('div#output').show();
	});	

	// Updated character count
	$('textarea[name="shareDescription"]').on('keyup', function(){
		$('span#descripCharCount').text( 300- ($(this).val().length) );
	});

	// Updated character count
	$('input[name="title"]').on('keyup', function(){
		$('span#titleCharCount').text( 100- ($(this).val().length) );
	});

	//Clear form
	$('button.clearForm').on('click', function(){
		//reload page
		window.location.href = window.location.href;
	});
	$('button.clipboardCopy').on('click', function(){
		// copy link
		$('input#shareLinkInputField').select();
		document.execCommand("copy");
	});
});