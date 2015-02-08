/* First function uses an array as an argument. Loop starts counting from the
last element, since going backwards makes the process a whole lot easier.
It creates a new list on every loop, then puts it in on itself, creating the 
"stairlike" list, and then returns it */

function arrayToList(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var list = {value: array[i], rest: list};
  }
  return list;
}


/* Second function picks up a list and creates an array. A new variable called
node is defined, using the list as reference. On every loop, node becomes a
different node.rest (which in this case is the same as list.rest), pushing the
values into the array and going into the list  until it reaches the end where 
there is no .rest and node becomes undefined, thus ending the loop and returning 
the array.
*/

function listToArray(list) {

	array = [];

	for (var node = list ; node ; node = node.rest) {
		array.push(node.value);
	}

	return array;

}

/* This helper function is simple: it adds new items to the list, putting it
in first place */

function prepend(element, list) {
	return {value: element, rest: list};
}

/* This second helper function takes a number and a list as arguments and returns
the position of the number on the list */

function nth(list, number) {
	if (number) return nth(list.rest, number-1)
	return list.value;
}
