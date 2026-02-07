// Functions

function sayHello() {
    console.log('Hey Om');
}

sayHello(); // calling of function

// Parameters
//            Argument
function add(num1, num2) {
    console.log(num1 + num2);
}

add(10, 10); // Parameters
add(5, 10);

function multiply(a, b) {
    let ans = a * b;
    return ans;
}

let sol = multiply(10, 4);
console.log('That hey user result is', sol);


function addNumbers() {
    let ans = 0;
    for (i = 0; i < arguments.length; i = i + 1) {
        ans = ans + arguments[i];
    }
    return ans;
}

let result = addNumbers(10, 20, 30, 40, 50);
console.log(result);

// Spread Operator

function addNumbersV2(...numbers) {
    let ans = 0;
    for (i = 0; i < numbers.length; i = i + 1) {
        ans = ans + numbers[i];
    }
    return ans;
}

let resultV2 = addNumbersV2(1, 2, 3, 4, 5);
console.log(resultV2);