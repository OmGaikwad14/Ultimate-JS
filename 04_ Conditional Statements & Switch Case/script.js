// Conditional Statements

const age = 15;

if (age >= 80) {
    console.log("Yes, you are an adult");
}
else if (age >= 18) {
    console.log('Yes, you can vote');
}
else {
    console.log('No, you cant vote');
}


// Ternary Operator

// age >= 18 ? console.log('Yes') : console.log('No');
let result = age >= 18 ? 'Yes' : 'No';

console.log(result);


// Switch Case Statements

const option = 4;

switch (option) {
    case 1:
        console.log('Namaste!');
        break;
    case 2:
        console.log('Hello');
        break;
    case 3:
        console.log('Bonjor!');
        break;

    default:
        console.log('Invalid Option');
        break;
}

let a = 30;
let opt = '%';
let b = 40;

switch (opt) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    default:
        console.log('IDK');
        break;
}
