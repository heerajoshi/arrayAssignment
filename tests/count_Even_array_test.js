const assert = require("assert");
let countEven = require("../library/array_library.js").countEven;


let input = [5,3,2,1,55,54];
let expectedOutput = 2;
let actualOutput = countEven(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,1];
let expectedOutput2 = 1;
let actualOutput2 = countEven(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let expectedOutput3 = 2;
let actualOutput3 = countEven(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110,-5];
let expectedOutput4 = 3;
let actualOutput4 = countEven(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);


