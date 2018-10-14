const assert = require("assert");
let partition = require("../library/array_library.js").partition;


let input = [5,3,2,1];
let input1 = 1;
let expectedOutput = [[1],[5,3,2]];
let actualOutput = partition(input,input1);
  assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,5];
let input2_1 = 4;
let expectedOutput2 = [[4],[5]];
let actualOutput2 = partition(input2,input2_1);
   assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,4,5,6,7];
let input3_1 = 4;
let expectedOutput3 = [[2,3,4],[5,6,7]];
let actualOutput3 = partition(input3,input3_1);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = 100;
let expectedOutput4 = [[90,100],[110]];
let actualOutput4 = partition(input4,input4_1);
    assert.deepEqual(actualOutput4 , expectedOutput4);


