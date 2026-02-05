// Logical Operators
// AND -> All cond. must be true (&&)

const age = 20;
const gender = 'female';

if (age >= 18 && gender == 'male') {
    console.log('You are adult male');
}

// OR -> Atleast one cond. should be true (||)

if (age >= 18 || gender == 'male') {
    console.log('You are adult male');
}

// NOT -> True:False & False:True (!)

const number = 5;

if (!(number % 2 == 0)) {
    console.log('Odd');
}
