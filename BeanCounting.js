/* In this exercise, you're supposed to create a function that counts the amount of capital B's in a string */
/* Then you must create a second function that counts the amount of a given character in the string */

function countBs(string) {
    
    var count = 0;
    
    for (i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count += 1;
        }
    }
    
    return count
}

function countChar(string, character) {
    
    var count = 0
    
    for (i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count += 1;
        }
    }
    
    return count
}
