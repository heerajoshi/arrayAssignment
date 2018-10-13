const assert = require("assert");
let extract = require("../library/array_library.js").extract;


let input = 20345;
let expectedOutput = [2,0,3,4,5];
let actualOutput = extract(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = 231765;
let expectedOutput2 = [2,3,1,7,6,5];
let actualOutput2 = extract(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = 19853;
let expectedOutput3 = [1,9,8,5,3];
let actualOutput3 = extract(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = 987;
let expectedOutput4 = [9,8,7];
let actualOutput4 = extract(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);

