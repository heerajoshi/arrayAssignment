const assert = require("assert");
let addingElementOfArray = require("../library/sumOfArray.js").addingElementOfArray;


let input = [2];
let expectedOutput = 2;
let actualOutput = addingElementOfArray(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,3,6,5];
let expectedOutput2 = 16;
let actualOutput2 = addingElementOfArray(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,4,5,7];
let expectedOutput3 = 18;
let actualOutput3 = addingElementOfArray(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [2,6,9];
let expectedOutput4 = 17;
let actualOutput4 = addingElementOfArray(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);

