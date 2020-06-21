/* IOS Modal Form Fix */
var currentScroll = 0;

var out = 0;
var showModal = '';
$(document).ready(function(){
    
    var windowWidth = $(window).width();
    
        // Модалка для камбекера
        $(document).mouseleave(function(e) {
          if ( !out && (e.pageY - $(window).scrollTop()) <= 1 ) {
            showModal = setTimeout(function(){
              $('#back-modal').modal('show');
              out = 1;
            },100);
          }
        });

        $(document).mouseenter(function() {
          if ( !out ) {
            clearTimeout(showModal);
          }
        });
});

var utm_content = getUrlParam('utm_content','');

$(window).scroll(function() {
	if ( $(this).scrollTop() > 0 ) {
		currentScroll = $(this).scrollTop();
	}
});

$(document).ready(function(){
    
    $('.social a').click(function(){
        console.log('click');
         fbq('track', 'Lead');
    });
    
	/* IOS Modal Form Fix */
    if ( $(window).width() < 768 ) {	
		$('.modal').on('shown.bs.modal', function (e){
            $('body').addClass('active');
        });
        $('.modal').on('hidden.bs.modal', function (e) {
            $('body').removeClass('active');
            $('html, body').animate({
                scrollTop: currentScroll
            }, 0);
            
        });
    }
    
    /*jQuery(document).mouseleave(function() {
		if ( !out ) {
			showModal = setTimeout(function(){
				jQuery('#modal_comeback_unique').modal('show');
				out = 1;
			},300);
		}
	});
	
	jQuery(document).mouseenter(function() {
		if ( !out ) {
			clearTimeout(showModal);
		}
	});*/
	
	$('#ordering').on('show.bs.modal', function (e) {
		var butt = $(e.relatedTarget);
		
		var formid = butt.data('formid');
		var cevent = butt.data('event');
		
		$(this).find('input[name="event"]').val(cevent);
		$(this).find('form').attr('id','form-'+formid);
	});
	
	$('.pre-send').click( function() {
		var button = $(this);
		button.prop('disabled', true);
		button.addClass('disabled');
		
		var form = $(this).closest('form');
		var redirect = form.find('input[name="redirect"]').val();
		var thanks = form.find('input[name="thanks_modal"]').val();
		
		if ( form.valid() ) {
			form.css('opacity','.8');
			
			/* Send Sms */
			var smsUrl = './requests/sms_handler.php';

			$.ajax({
				url: smsUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function(data) {}
			});
			
			var email = form.find('input[name="email"]').val();
			
			var actUrl = 'https://test.leadgrab.ru/postback/handler?clickid='+utm_content+'&email='+email+'&source_code=solodar';
			
			$.ajax({
				url: actUrl,
				type: 'get',
				dataType: 'html',
				success: function(data) {
					form.submit();
				},
				error: function() {
				}
			});
		} else {
			button.prop('disabled', false);
			button.removeClass('disabled');
		}
	});

	/* Form Button Handlers */
	$('.send-ajax').click( function() {
		$(this).prop('disabled', true);
		$(this).addClass('disabled');
		
		var form = $(this).closest('form');
		var redirect = form.find('input[name="redirect"]').val();
		var thanks = form.find('input[name="thanks_modal"]').val();
		
		if ( form.valid() ) {
			form.css('opacity','.8');
			var actUrl = form.attr('action');

			$.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function(data) {
                    $('.modal').modal('hide');
					setTimeout(function(){
                            $('.for-success').show(500);
                    setTimeout(function(){
                            $('.for-success').hide(500);
                        },3000);
                    });
				},
				error:	 function() {}
			});
            $(form)[0].reset();
		} else {
			$(this).prop('disabled', false);
			$(this).removeClass('disabled');
		}
	});
	
	$('.send').click( function(e) {
        e.preventDefault();
		$(this).prop('disabled', true);
		$(this).addClass('disabled');
		
		var form = $(this).closest('form');
		
		if ( form.valid() ) {
			form.submit();
		} else {
			$(this).prop('disabled', false);
			$(this).removeClass('disabled');
		}
	});
	
	/*
		Slide to block. Add class "go-to-block" to link or button and data-attribute with target class or id
		Example: <a href="#" class="go-to-block" data-target=".slide-1">Slide</a>
	*/
	
	$(".go-to-block").click(function(e) {
        e.preventDefault();
		var target = $(this).data('target');
		
	    $('html, body').animate({
	        scrollTop: $(target).offset().top - 30
	    }, 400);
	});
});

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}
function getUrlParam(parameter, defaultvalue){
	var urlparameter = defaultvalue;
	if(window.location.href.indexOf(parameter) > -1){
		urlparameter = getUrlVars()[parameter];
	}
	return urlparameter;
}
