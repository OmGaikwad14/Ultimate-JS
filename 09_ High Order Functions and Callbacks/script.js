// High Order Functions and Callbacks

function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result);
}

add(5, 2, function (val) {
    console.log(val);
});

function showResult(result) {
    console.log(result);
}

add(10, 4, showResult);
add(4, 4, (val) => console.log(val));
add(2, 4, val => console.log(val));

let resultFunction = add(400, 10, () => { });
resultFunction();
