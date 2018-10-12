const assert = require("assert");
let extracteAlternateElement = require("../library/array_library.js").extracteAlternateElement;


let input = [1,6,8,5,9,2];
let expectedOutput = [1,8,9];
let actualOutput = extracteAlternateElement(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,3,6,5];
let expectedOutput2 = [2,6];
let actualOutput2 = extracteAlternateElement(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,4,5,7,1,-3];
let expectedOutput3 = [2,5,1];
let actualOutput3 = extracteAlternateElement(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [2,6,9];
let expectedOutput4 = [2,9];
let actualOutput4 = extracteAlternateElement(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);


