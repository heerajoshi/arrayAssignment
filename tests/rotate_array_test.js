const assert = require("assert");
let rotateArray = require("../library/array_library.js").rotateArray;


let input = [5,3,2,1,4,6,9];
let input1 = 1;
let expectedOutput = [4,6,9,5,3,2,1];
let actualOutput = rotateArray(input,input1);
  assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4,5];
let input2_1 = 4;
let expectedOutput2 = [5,4];
let actualOutput2 = rotateArray(input2,input2_1);
   assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,4,5,6,7];
let input3_1 = 4;
let expectedOutput3 = [5,6,7,2,3,4];
let actualOutput3 = rotateArray(input3,input3_1);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = 100;
let expectedOutput4 = [110,90,100];
let actualOutput4 = rotateArray(input4,input4_1);
    assert.deepEqual(actualOutput4 , expectedOutput4);



