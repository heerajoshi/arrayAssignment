const assert = require("assert");
let intersectionOfTwoArray = require("../library/array_library.js").intersectionOfTwoArray;


let input = [5,3,2,1,55,54];
let input1 = [1,3,4,6,55];
let expectedOutput = [1,3,55];
let actualOutput = intersectionOfTwoArray(input,input1);
  assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4];
let input2_1 = [4];
let expectedOutput2 = [4];
let actualOutput2 = intersectionOfTwoArray(input2,input2_1);
   assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let input3_1 = [2,3,33,31,32];
let expectedOutput3 = [2,3,33,31,32];
let actualOutput3 = intersectionOfTwoArray(input3,input3_1);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = [12,4,90];
let expectedOutput4 = [90];
let actualOutput4 = intersectionOfTwoArray(input4,input4_1);
    assert.deepEqual(actualOutput4 , expectedOutput4);



