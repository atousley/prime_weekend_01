$(document).ready(function(){

	var totalSal = 0;

	$('#empInfo').on('submit', function(event){
		event.preventDefault();

		var results = {};
		
		$.each($('#empInfo').serializeArray(), function(i, field) {
			results[field.name] = field.value;
		});

		$('#empInfo').find('input[type=text]').val('');
		appendDom(results);
		
	});
	
	function appendDom(answers){
		$('#container').append('<div></div>');
		var $elements = $('#container').children().last();
		totalSal = totalSal + parseInt(answers.annualSal / 12);

		$elements.append('<p>' + 'Full Name:' + ' ' + answers.fullName + '</p>');
		$elements.append('<p>' + 'Id Number:' + ' ' + answers.idNum + '</p>');
		$elements.append('<p>' + 'Job title:' + ' ' + answers.title + '</p>');
		$elements.append('<p>' + 'Annual Salary:' + ' ' + answers.annualSal + '</p>');
		$elements.append('<p>' + 'Monthly Salary Cost:' + ' ' + totalSal + '</p>');

		// $('#container').find('span').val('indivSal');
	}

	$('#deleteButton').on('click', function(){
		$('#container').children().last().remove();
	});
});