const assert = require("assert");
let differenceOfArray = require("../library/array_library.js").differenceOfArray;


let input = [5,3,2,1,55,54];
let input1 = [1,3,4,6,55];
let expectedOutput = [5,2,54];
let actualOutput = differenceOfArray(input,input1);
  assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4];
let input2_1 = [4];
let expectedOutput2 = [];
let actualOutput2 = differenceOfArray(input2,input2_1);
   assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32,1];
let input3_1 = [2,3,33,31,32];
let expectedOutput3 = [1];
let actualOutput3 = differenceOfArray(input3,input3_1);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = [12,4,90];
let expectedOutput4 = [100,110];
let actualOutput4 = differenceOfArray(input4,input4_1);
    assert.deepEqual(actualOutput4 , expectedOutput4);




