/*This one is still not completed. I'm supposed to create two functions: one that builds an array with all the numbers
that belong to a range, and one that adds up all the numbers in that array. The Range takes in 3 values, start, end and step.
But when the step is negative, the program breaks */

function range(start, end, step) {

	var arrayNumber = [];

	/* Checking if the user called the step. Default is 1. */

	if (step === undefined) {
		stepNumber = 1;
	}

	else {
		stepNumber = step;
	}

	/* Now into the calculations */

	if (end > start) {

		for ( i = 0 ; i < end - start + 1 ; i = i + stepNumber) {

			arrayNumber[i] = start + i;

		}
	}

	else if (start > end) {

		for ( i = 0 ; i < start - end + 1; i = i + stepNumber) {

			arrayNumber[i] = end + i;

		}
	}

	else {

		arrayNumber[0] = start;
	}
	
	return arrayNumber;

}


function sum(array) {

	var total = 0;

	for ( i = 0 ; i < array.length ; i++ ) {
		total += array[i]
	}

	return total;

}
