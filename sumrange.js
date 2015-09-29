function range(start, end, step) {

    list = [];

    if ((!isNaN(step) === true) && step > 0) {
        for (var i = start; i <= end; i = i + (Math.abs(step))) {

            list.push(i);
        }
    } else if ((!isNaN(step) === true) && step < 0) {
        for (var i = start; i >= end; i = i - (Math.abs(step))) {

            list.push(i);

        }

    } else {
        alert("step is undefined so it will be set to i++");
        for (var i = start; i <= end; i++) {

            list.push(i);
        }
    }
    return this.list = list;

}


function sum(list) {

    return this.list.reduce(function (x, y) {
        return x + y;

    })
}


console.log(range(1, 10));

console.log(sum(range(1, 10)));

console.log(range(12, 2, -2));

console.log(sum(range(12, 2, -2)));
