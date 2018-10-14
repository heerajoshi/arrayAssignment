const assert = require("assert");
let concatTwoArray = require("../library/array_library.js").concatTwoArray;


let input = [5,3,2,1,55,54];
let input1 = [1,3,4,6];
let expectedOutput = [5,3,2,1,55,54,4,6];
let actualOutput = concatTwoArray(input,input1);
  assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,1];
let input2_1 = [2];
let expectedOutput2 = [4,1,2];
let actualOutput2 = concatTwoArray(input2,input2_1);
   assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let input3_1 = [2];
let expectedOutput3 = [2,3,33,31,32];
let actualOutput3 = concatTwoArray(input3,input3_1);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = [12,4];
let expectedOutput4 = [90,100,110,12,4];
let actualOutput4 = concatTwoArray(input4,input4_1);
    assert.deepEqual(actualOutput4 , expectedOutput4);




