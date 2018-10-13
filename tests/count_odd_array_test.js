const assert = require("assert");
let countOdd = require("../library/array_library.js").countOdd;


let input = [5,3,2,1,55,54];
let expectedOutput = 4;
let actualOutput = countOdd(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,1];
let expectedOutput2 = 1;
let actualOutput2 = countOdd(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let expectedOutput3 = 3;
let actualOutput3 = countOdd(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110,-5];
let expectedOutput4 = 1;
let actualOutput4 = countOdd(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);

