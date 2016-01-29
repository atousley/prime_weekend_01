$(document).ready(function(){

	$('#empInfo').on('submit', function(event){
		event.preventDefault();

		var results = {};
		
		$.each($('#empInfo').serializeArray(), function(i, field) {
			results[field.name] = field.value;
			// console.log(results);
		});

		$('#empInfo').find('input[type=text]').val('');
		appendDom(results);
		
	});
	
	function appendDom(answers){
		$('#container').append('<div></div>')
		var $elements = $('#container').children().last();

		$elements.append('<p>' + answers.annualSal + '</p>');

	}
});