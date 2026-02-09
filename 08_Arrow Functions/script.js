// Arrow Functions

// 1. Syntax

const sayHello = () => { // Arrow Function
    console.log('Heyy');
};

sayHello();

const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));

const addV2 = (a, b) => a + b; // One Liner

console.log(addV2(10, 2));

// 2. 'arguments' keyword

const addNumbers = (...nums) => {
    console.log(nums);
};

addNumbers(1, 2, 3, 4, 5,);

// 3. Hoisting available in normal function

sayHey();

function sayHey() {
    console.log('Heyy there');
}

const sayHi = () => {
    console.log('Hiii');
};

sayHi();

// 4. This Keyword

const obj = {
    value: 20,
    myFunction: function () {
        console.log(this);
    }
};

obj.myFunction();

const obj2 = {
    value: 40,
    myFunction: () => {
        console.log(this);
    }
};

obj2.myFunction();