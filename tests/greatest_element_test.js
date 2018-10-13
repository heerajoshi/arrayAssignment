const assert = require("assert");
let findGreatestNumber = require("../library/array_library.js").findGreatestNumber;


let input = [5,3,2,1,55,54];
let expectedOutput = 55;
let actualOutput = findGreatestNumber(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,1];
let expectedOutput2 = 4;
let actualOutput2 = findGreatestNumber(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let expectedOutput3 = 33;
let actualOutput3 = findGreatestNumber(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110,-5];
let expectedOutput4 = 110;
let actualOutput4 = findGreatestNumber(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);



