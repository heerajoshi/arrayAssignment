const assert = require("assert");
let selectEven = require("../library/selectingEvenNumber.js").selectEven;
// Given one even number, it should return same number back

let input = [2];
let expectedOutput = [2];
let actualOutput = selectEven(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,-3,5,-4];
let expectedOutput2 = [2,-4];
let actualOutput2 = selectEven(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,4,5,7];
let expectedOutput3 = [2,4];
let actualOutput3 = selectEven(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [2,6,9];
let expectedOutput4 = [2,6];
let actualOutput4 = selectEven(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);

