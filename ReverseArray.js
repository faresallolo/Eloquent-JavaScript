/* The first function is pretty simple. It picks up the elements one by one in a loop (that's done backwards)
and pushes the values into a new array. That new array gets returned afterwards */

function reverseArray(array) {
    for (var i = (array.length - 1), newArray = []; i >= 0 ; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

/* On this version we cannot create a new array - it has to modify the original argument.
To do this you'll have to create a variable that will hold an array value temporairly while you
switch the numbers around */

function reverseArrayInPlace(array) {
    var temp = 0;
    for (var i = 0 ; i < array.length / 2 ; i++) {
        temp = array[array.length - 1 - i];
        array[(array.length - 1 - i)] = array[i];
        array[i] = temp;
    }
    return array;
}
