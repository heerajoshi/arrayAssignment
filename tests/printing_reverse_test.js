const assert = require("assert");
let reverseArray = require("../library/print_reverse_array.js").reverseArray;


let input = [1,6,8,5,9,2];
let expectedOutput = [2,9,5,8,6,1];
let actualOutput = reverseArray(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,3,6,5];
let expectedOutput2 = [5,6,3,2];
let actualOutput2 = reverseArray(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,4,5,7,1,-3];
let expectedOutput3 = [-3,1,7,5,4,2];
let actualOutput3 = reverseArray(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [2,6,9];
let expectedOutput4 = [9,6,2];
let actualOutput4 = reverseArray(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);


