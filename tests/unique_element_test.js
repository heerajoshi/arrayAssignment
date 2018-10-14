const assert = require("assert");
let findUnique = require("../library/array_library.js").findUnique;


let input = [1];
let expectedOutput = [1];
let actualOutput = findUnique(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,2];
let expectedOutput2 = [2];
let actualOutput2 = findUnique(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [1,3,5,4,3,3,1,9];
let expectedOutput3 = [1,3,5,4,9];
let actualOutput3 = findUnique(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [2,6,9,2,4,5,8];
let expectedOutput4 = [2,6,9,4,5,8];
let actualOutput4 = findUnique(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);




