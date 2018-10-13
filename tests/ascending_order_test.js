const assert = require("assert");
let isAscendingOrder = require("../library/array_library.js").isAscendingOrder;


let input = [1,6,8,5,9,2];
let expectedOutput = "false";
let actualOutput = isAscendingOrder(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,3,6,5];
let expectedOutput2 = "false";
let actualOutput2 = isAscendingOrder(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [1,2,4,5,7];
let expectedOutput3 = "true";
let actualOutput3 = isAscendingOrder(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [2,6,9];
let expectedOutput4 = "true";
let actualOutput4 = isAscendingOrder(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);



