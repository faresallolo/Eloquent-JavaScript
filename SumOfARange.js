/*This one is still not completed. I'm supposed to create two functions: one that builds an array with all the numbers
that belong to a range, and one that adds up all the numbers in that array. The Range takes in 3 values, start, end and step.
But when the step is negative, the program breaks */

function range(start, end, step) {
    
    /* If no step is given, 1 is considered */
    /* WARNING: Negative step leads to a crash */

    if (step === undefined) {

        var arrayStep = 1;
    }
    
    else {
        var arrayStep = step;
    }
    
    
    /* Building the array */

	var arrayFinal = [];

	if (start > end) {

		for (var i = 0 ; i < (1 + start - end) ; i++ ) {

			arrayFinal[i] = i + end;

		}
	}

	else if (end > start) {

		for (var i = 0 ; i < (1 + end - start) ; i++) {

			arrayFinal[i] = i + start;
		}
	}
	
	/* If both numbers in the range are the same, array will have only start */

	else {

		arrayFinal = [start];
	}

	return arrayFinal;
}


function arraySum(array) {
    
    /* Function sums up numbers in an array */

	var count = 0 ;

	for (var i = 0 ; i < array.length ; i++) { 

		count += array[i];

	}

	return count;
}
