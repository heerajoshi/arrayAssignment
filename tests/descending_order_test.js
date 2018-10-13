const assert = require("assert");
let isDescendingOrder = require("../library/array_library.js").isDescendingOrder;


let input = [1,6,8,5,9,2];
let expectedOutput = false;
let actualOutput = isDescendingOrder(input);
    assert.deepEqual(actualOutput , expectedOutput);

let input2 = [2,3,6,5];
let expectedOutput2 = false;
let actualOutput2 = isDescendingOrder(input2);
    assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [7,4,3,2,1];
let expectedOutput3 = true;
let actualOutput3 = isDescendingOrder(input3);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [9,6,2];
let expectedOutput4 = true;
let actualOutput4 = isDescendingOrder(input4);
    assert.deepEqual(actualOutput4 , expectedOutput4);



