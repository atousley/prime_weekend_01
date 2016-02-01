$(document).ready(function(){

	var totalSal = 0;
	var empArray = [];

	$('#empInfo').on('submit', function(event){
		event.preventDefault();

		var results = {};
		
		$.each($('#empInfo').serializeArray(), function(i, field) {
			results[field.name] = field.value;
		});

		totalSal = totalSal + parseInt(results.annualSal / 12);
		// Math.round(parseFloat()) this;

		empArray.push(results);

		$('#empInfo').find('input[type=text]').val('');
		$('#fullName').focus();

		updateSalary(totalSal);
		appendDom(results);
	});

	$('#container').on('click', '.deleteButton', function() {
			var index = $(this).data().id;
			var employee = empArray[index];
			console.log(employee);

			totalSal -= Math.round(employee.annualSal /12);
			totalSal = parseFloat(totalSal);
			updateSalary(totalSal);

			$(this).parent().remove();
	});

	function updateSalary(salary) {
		$('#total').replaceWith('<span id="total">' + '$' + totalSal + '</span>');
	}
	
	function appendDom(answers){
		$('#container').append('<div></div>');
		var $elements = $('#container').children().last();

		$elements.append('<p>' + 'Full Name:' + ' ' + answers.fullName + '</p>');
		$elements.append('<p>' + 'Id Number:' + ' ' + answers.idNum + '</p>');
		$elements.append('<p>' + 'Job title:' + ' ' + answers.title + '</p>');
		$elements.append('<p>' + 'Annual Salary:' + ' $' + answers.annualSal + '</p>');
		$elements.append('<button class="deleteButton" data-id="' + (empArray.length - 1) + '">Delete Employee</button>');	
	}

});

//  id="employee' + answers.idNum + '"
