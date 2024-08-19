// Function to square a number
function square(x) {
    return x * x;
}

// Function to add 1 to a number
function addOne(x) {
    return x + 1;
}

// Function composition: addOne(square(x))
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
 
const addOneAfterSquare = compose(addOne, square);

console.log(addOneAfterSquare(3)); // Output: 10 (since (3^2) + 1 = 9 + 1 = 10)
