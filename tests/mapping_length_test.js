const assert = require("assert");
let mappingLength = require("../library/array_library.js").mappingLength;


let input = ["mary","had","a","little","lamp"];
let expectedOutput = [4,3,1,6,4];
let actualOutput = mappingLength(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = ["my","name"];
let expectedOutput2 = [2,4];
let actualOutput2 = mappingLength(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = ["ram","is","a","good","boy"];
let expectedOutput3 = [3,2,1,4,3];
let actualOutput3 = mappingLength(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = ["rahul","have","a","pen"];
let expectedOutput4 = [5,4,1,3];
let actualOutput4 = mappingLength(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);


