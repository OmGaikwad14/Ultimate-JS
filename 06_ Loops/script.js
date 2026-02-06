// Loops

// FOR LOOP -> If you know how many times to loop

for (let i = 1; i <= 10; i = i + 1) {
    console.log('Om', i);
}

// WHILE LOOP

let ip = 0;
let house = 50;

while (ip != house) {
    ip = ip + 1;
    console.log('Step Taken', ip);
}

// DO...WHILE LOOP

do {
    ip = ip + 1;
    console.log('Step Taken', ip);
} while (ip <= house);
