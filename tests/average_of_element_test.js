const assert = require("assert");
let averageOfArray = require("../library/array_library.js").averageOfArray;


let input = [5,3,2,1,55,54];
let expectedOutput = 20;
let actualOutput = averageOfArray(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,1];
let expectedOutput2 = 2.5;
let actualOutput2 = averageOfArray(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let expectedOutput3 = 20.2;
let actualOutput3 = averageOfArray(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110,-5];
let expectedOutput4 = 73.75;
let actualOutput4 = averageOfArray(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);

