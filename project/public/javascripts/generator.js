
;var Generator = (function($){
	'use strict';

	var params = { 
				baseURL: 'https://www.facebook.com/dialog/feed?app_id=1747299092169302',
				title:'',
				picURL: null,
				shareURL: '',
				caption: ' ',
				description: '',
			};	

	return {
		generate: function( input ){

			var userParams = $.extend({}, params, input);
			var	paramURL = userParams.baseURL,
					paramTitle = encodeURIComponent(userParams.title),
					paramPicURL = encodeURIComponent(userParams.picURL),
					paramShareURL = encodeURIComponent(userParams.shareURL),
					paramCaption = encodeURIComponent(userParams.caption),
					paramDescription = encodeURIComponent(userParams.description),
					shareLink ='';

			shareLink = paramURL+'&link='+paramShareURL+'&picture='+paramPicURL+'&name='+paramTitle+'&caption='+paramCaption+'&description='+paramDescription+'&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F';		
			return shareLink;
		}
	};

})(jQuery);