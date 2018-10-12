const assert = require("assert");
let reverseFebonacci = require("../library/array_library.js").reverseFebonacci;


let input = 5;
let expectedOutput = [3,2,1,1,0];
let actualOutput = reverseFebonacci(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = 4;
let expectedOutput2 = [2,1,1,0];
let actualOutput2 = reverseFebonacci(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = 2;
let expectedOutput3 = [1,0];
let actualOutput3 = reverseFebonacci(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = 1;
let expectedOutput4 = [0];
let actualOutput4 = reverseFebonacci(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);


