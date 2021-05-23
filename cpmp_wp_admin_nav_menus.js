(function($) {

	$(document).ready(function(){

		var toggle = function(){
			var checked = $(this).is(':checked');
			var container = $(this).parent().parent();
			var items = $(this).parents('.cpmp-description').find('p.description:not(.field-cpcm-unfold)');

			if(checked) {
				container.css('margin-bottom', '');
				items.removeClass('d-none');
			} else {
				container.css('margin-bottom', 0);
				items.addClass('d-none');
			}
		};

		var init = function(){
			$('.cpmp-description > p.description:not(.field-cpcm-unfold)').addClass('d-none');
			$('.cpmp-description > .field-cpcm-unfold input[type="checkbox"]').off('change', toggle).on('change', toggle).trigger('change');
		};

		$(document).on('menu-item-added', function(){
			init();
		});

		init();
		wpNavMenu.menusChanged = false;

	});

})(jQuery); // Fully reference jQuery after this point.
