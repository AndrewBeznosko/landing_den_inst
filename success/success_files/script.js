/* IOS Modal Form Fix */
var currentScroll = 0;

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        currentScroll = $(this).scrollTop();
    }
});

var out = 0;
var showModal = '';

$(document).ready(function () {

    /* jQuery(document).mouseleave(function() {
         if ( !out ) {
           showModal = setTimeout(function(){
             jQuery('#ModalOnClose').modal('show');
             out = 1;
           },100);
         }
       });

       jQuery(document).mouseenter(function() {
         if ( !out ) {
           clearTimeout(showModal);
         }
       }); */

    /* IOS Modal Form Fix */
    if ($(window).width() < 768) {
        $('.modal').on('shown.bs.modal', function (e) {
            $('body').addClass('active');
        });
        $('.modal').on('hidden.bs.modal', function (e) {
            $('body').removeClass('active');
            $('html, body').animate({
                scrollTop: currentScroll
            }, 0);

        });
    }

    $('#ordering').on('show.bs.modal', function (e) {
        var butt = $(e.relatedTarget);

        var formid = butt.data('formid');
        var cevent = butt.data('event');

        $(this).find('input[name="event"]').val(cevent);
        $(this).find('form').attr('id', 'form-' + formid);
    });

    /* Form Button Handlers */
    $('.send-ajax').click(function () {
        $(this).prop('disabled', true);
        $(this).addClass('disabled');

        var form = $(this).closest('form');
        var redirect = form.find('input[name="redirect"]').val();
        var thanks = form.find('input[name="thanks_modal"]').val();

        if (form.valid()) {
            form.css('opacity', '.8');
            var actUrl = form.attr('action');

            $.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    $('.modal').modal('hide');
                    setTimeout(function () {
                        $('.for-success').show(500);
                        setTimeout(function () {
                            $('.for-success').hide(500);
                        }, 3000);
                    });
                },
                error: function () {}
            });
            $(form)[0].reset();
        } else {
            $(this).prop('disabled', false);
            $(this).removeClass('disabled');
        }
    });

    $('.send').click(function () {
        $(this).prop('disabled', true);
        $(this).addClass('disabled');

        var form = $(this).closest('form');

        if (form.valid()) {
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

    $(".go-to-block").click(function (e) {
        e.preventDefault();
        var target = $(this).data('target');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 30
        }, 400);
    });
});


$(window).on('load', function () {
    if ($(window).width() > 575) {
        setHeight('.reasons', '.r-block p');
    }
});

function setHeight(parent, block) {

    $(parent).each(function () {

        var height = 0,
            blockk = $(this).find(block);

        blockk.each(function () {

            var blockHeight = $(this).outerHeight();

            if (height < blockHeight) {
                height = blockHeight;
            }

        });

        blockk.css({
            height: height
        });


    });
}