var out = 0;
var showModal = '';
$(document).ready(function(){
    
    jQuery(document).mouseleave(function() {
        if ( !out ) {
          showModal = setTimeout(function(){
            jQuery('#back-modal').modal('show');
            out = 1;
          },100);
        }
      });
  
  jQuery(document).mouseenter(function() {
    if ( !out ) {
      clearTimeout(showModal);
    }
  });
    
    setTimeout(function(){
        jQuery('#back-modal').modal('show');
        out = 1;
      },5000);
	// SEND FORMS
	$('.send-ajax').click( function() {
		var form = $(this).closest('form');
		
		if ( form.valid() ) {
			form.css('opacity','.5');
			var actUrl = form.attr('action');

			$.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function(data) {
					form.html(data);
					form.css('opacity','1');
				},
				error:	 function() {}
			});
            $(form)[0].reset();
		}
	});
	
	$('.send').click( function() {
		var form = $(this).closest('form');
		
		if ( form.valid() ) {
			form.submit();
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

if ($(window).width() < 768) {
    $(window).on('load', function () {

        $('.speakers .s-block').each(function (index) {
            $(this).appendTo('.speakers .slider .carousel-inner');
            $('.speakers .carousel-indicators').append('<li data-target="#speakers" data-slide-to="'+index+'"></li>');
        });
        $('.speakers .carousel-indicators li:first-of-type').addClass('active');
        $('.speakers .slider .carousel-inner .s-block').wrap('<div class="carousel-item"></div>');

        $('.speakers .carousel-item:first-of-type').addClass('active');
        $('.speakers .carousel').carousel();
    });
}

$(window).on('load', function(){
   if ( $(this).width() > 767 ) {
        setHeight('.speakers', '.s-block');
    } 
});


function setHeight (parent, block) {

    $(parent).each(function(){
        
        var height = 0,
            blockk = $(this).find(block);
        
        blockk.each(function(){
            
            var blockHeight = $(this).outerHeight();
            
           if(height < blockHeight) {
                height = blockHeight;
            } 
            
        });
        
        blockk.css({height: height});
        
        
    });
}
