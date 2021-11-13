jQuery(function($) {
	//var html = $('.preffix_1').html();
	
	//$('.preffix_1').html('<p>Some text</p>');
	
	
	/*$('.sf-menu li').html(function (ind,oldVal) {
		
		if(ind%2 == 0) {
			return oldVal.toUpperCase();
		}
		
	});
	*/
	
	//var text =  $('.preffix_1').text();
	//$('.preffix_1').text(text + 'Some text');
	
	/*$('.sf-menu li').text(function (ind,oldVal) {
		
		if(ind%2 == 0) {
			return oldVal.toUpperCase();
		}
		
	});
	*/
	
	/*$('.sf-menu li').append(function(ind,oldVal) {
		
		if(ind%2 == 0) {
			return oldVal.toUpperCase();
		}
		
		
	});*/
	
	//$('.sf-menu li').wrapAll($('<div class="new"></div>'));
	
	//alert(text);
	
	$('label.message').click(function() {
		
		alert('Hello');
		
	});
	
});


function func() {
	
	var form = $('#contact-form fieldset label:first-child').clone();
	
	var count = $('#contact-form fieldset label').size();
	
	form.find('span').text('Field - ' + (count + 1));
	form.find('input').attr('name','field'+(count + 1));
	
	//$('#contact-form fieldset').append(form);
	///$('#contact-form fieldset').prepend(form);
	
	//form.appendTo($('#contact-form fieldset'));
	//form.prependTo($('#contact-form fieldset'));
	
	//$('.sf-menu li').remove('.current');
	
	//$('label.message').before(form);
	//form.insertBefore($('label.message'));
	
	//var p = $('label.message').detach();
	//$('#contact-form fieldset').append(p);
	
	//$('li').unwrap();
    
}

