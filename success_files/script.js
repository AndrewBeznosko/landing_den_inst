var out = 0;
var showModal = '';

var utm_content = getUrlParam('utm_content','');

$(document).ready(function(){
    
    jQuery(document).mouseleave(function() {
		if ( !out ) {
			showModal = setTimeout(function(){
				jQuery('#registration-3').modal('show');
				out = 1;
			},300);
		}
	});
	
	jQuery(document).mouseenter(function() {
		if ( !out ) {
			clearTimeout(showModal);
		}
	});
    
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
		}
	});
	
	$('.send').click( function() {
		var form = $(this).closest('form');
		
		if ( form.valid() ) {
			form.submit();
		}
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
			
			var email = form.find('input[name="email"]').val();
			
			var actUrl = 'https://test.leadgrab.ru/postback/handler?clickid='+utm_content+'&email='+email;

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
	
	/*
		Slide to block. Add class "go-to-block" to link or button and data-attribute with target class or id
		Example: <a href="#" class="go-to-block" data-target=".slide-1">Slide</a>
	*/
	
	$(".go-to-block").click(function() {
		var target = $(this).data('target');
		
	    $('html, body').animate({
	        scrollTop: $(target).offset().top - 30
	    }, 400);
	});
    
    
    /*Работа с временем в селектах*/
	
	var today = new Date();
	var tomoroww = new Date();
	//Делаем Московское время
	today.setUTCHours(today.getUTCHours()+3);
	tomoroww.setUTCHours(tomoroww.getUTCHours()+3);
	
	//Завтра, +1 день
	tomoroww.setUTCDate(tomoroww.getUTCDate()+1);
	
	//Месяц +1, т.к. в js всё начинается с 0 
	today.setMonth(today.getUTCMonth()+1);
	tomoroww.setMonth(tomoroww.getUTCMonth()+1);
	
	console.log("TIME NOW: ",today.getUTCHours() + ":" + today.getUTCMinutes() + ":" + today.getUTCSeconds());
	
	//Получаем час в данный момент
	hour = today.getUTCHours() ;
	console.log("HOUR: ",hour);
	
	//Сегодня
	today_str = formatDate(today.getUTCDate()) + formatMonth(today.getUTCMonth()) + formatYear(today.getUTCFullYear()) ;
	//Завтра
	tomorrow_str = formatDate(tomoroww.getUTCDate()) + formatMonth(tomoroww.getUTCMonth()) + formatYear(tomoroww.getUTCFullYear()) ;
	
	
	console.log  ( "Today:",today_str);
	console.log  ( "Tomorrow:",tomorrow_str);
		
	//Если время от 00 до 12 то сразу добавляем скрытое поле для 12:00	
	
	if ( hour >= 0 && hour < 12)
		{
				$('[name*="calltime"]').val(today_str + "1100");
		}
		
	//Если время от 12 (Включая) до 20 делаем выбор на завтра 12:00
	if ( hour >= 12 && hour < 20)
		
		{
			//$('select option:contains("12:00")').remove();
			//$('[name*="calltime"]').val(today_str + "1100");
			
			$('select option:contains("12:00")').text('12:00 (Завтра)');
			$('[name*="calltime"]').val(tomorrow_str + "1100");
			$('[name*="custom_daytime"]').val("late");	
			
		} 
	
	//Если время от 20 до 24 то сразу добавляем скрытое поле для 12:00	
	if ( hour >= 20 && hour < 24 ) 
	{
		$('[name*="custom_daytime"]').val("late");
		$('[name*="calltime"]').val(tomorrow_str + "1100");
	}
	
	$('select').on("change",function() {
				
		//Если время от 12 (Включая) до 20 делаем выбор на завтра 12:00
		if ( hour >= 12 && hour < 20)
		
		{
			
			if($("select").val() == "20.00")
				{			
					$('[name*="calltime"]').val(today_str + "1900");
					$('[name*="custom_daytime"]').val("");	
				}
				else
				{					
					$('[name*="calltime"]').val(tomorrow_str + "1100");	
					$('[name*="custom_daytime"]').val("late");			
				}	
			
		} 			
				
		//Если время от 00 до 12
	
		if ( hour >= 0 && hour < 12)
		{
			
			if($("select").val() == "20.00")
				{			
					$('[name*="calltime"]').val(today_str + "1900");			
				}
				else
				{					
					$('[name*="calltime"]').val(today_str + "1100");
					
				}		
		}

		//Время от 20 до 24
		if ( hour >= 20 && hour < 24 ) 
		{
				if($("select").val() == "20.00")
				{
					$('[name*="custom_late"]').val("late");
					$('[name*="custom_daytime"]').val("");
					
					$('[name*="calltime"]').val(tomorrow_str + "1900");							
				}
				else
				{
					$('[name*="custom_daytime"]').val("late");
					$('[name*="custom_late"]').val("");
					
					$('[name*="calltime"]').val(tomorrow_str + "1100");
				}
		}
		
	});
	
	/**********************/
	/*Функция форматирования даты*/
	function formatDate(date) 
	{
		  var dd = date;
		  if (dd < 10) dd = '0' + dd;

		  return dd;
	}
	
	function formatMonth(date) 
	{
		  var mm = date;
		  if (mm < 10) mm = '0' + mm;

		  return mm;
	}
	
	function formatYear (date)
	{
		var yy = date % 100;
		if (yy < 10) yy = '0' + yy;	
		
		return yy;
	}
	
	//Устанавливаем куки, для передачи в thank page	
	function add_cookie( form )
	{
		$.cookie('calltime', form.find('[name*="calltime"]').val());
		$.cookie('smstext', form.find('[name*="smstext"]').val());
		//$.cookie('custom_mob', $('[name*="phone"]').val().replace(/[^\d;]/g, '') );
		$.cookie('phone', form.find('[name*="phone"]').val() );
	}
	
	$('form').submit(function()
	{
		var form = $(this);
		
		add_cookie(form);
		return true;
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