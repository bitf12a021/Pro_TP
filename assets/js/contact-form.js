(function($) {
	"use strict";

	$(document).ready(function() {
		if ($('.wpcf7-awe_date').length) {
			$('.wpcf7-awe_date').each(function() {
				var dFormat = $(this).data('format') ? $(this).data('format') : 'mm/dd/yy';
				$(this).datepicker({
					dateFormat: dFormat,
		            constrainInput: true,
		            minDate: 0,
		            prevText: '<i class="hillter-icon-left-arrow"></i>',
		            nextText: '<i class="hillter-icon-right-arrow"></i>',
		            buttonImageOnly: false
				});
				// $(this).datepicker('setDate', new Date());
			});
		}
	});

})(jQuery);