$(document).ready(function () {
    $('.program-list .day').click(function () {
        var block = $(this).parent();
        if (block.hasClass('active')) {
            block.removeClass('active');
        } else {
            block.addClass('active');
        }
    });
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top + 0
        }, 500);
    });
    $('.btn-modal.modal-form').click(function () {
        $('.modal#modal-form').addClass('active');
    });
    $('.modal-close').click(function () {
        $('.modal#modal-form').removeClass('active');
    });
    $('.speaker-slider-item *').click(function () {
        var elem = $(this).parent('.speaker-slider-item');
        var id = elem.attr('data');
        $('.modal-speaker').removeClass('active');
        $('.modal-speaker#' + id).addClass('active');
    });
    $('.modal-speaker .modal-close').click(function () {
        $('.modal-speaker').removeClass('active');
    });
});