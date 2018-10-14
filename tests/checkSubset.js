const assert = require("assert");
let isSubset = require("../library/array_library.js").isSubset;


let input = [5,3,2,1];
let input1 = [1,3,4,6];
let expectedOutput = false; 
let actualOutput = isSubset(input,input1);
  assert.deepEqual(actualOutput , expectedOutput);

let input2 = [4];
let input2_1 = [4];
let expectedOutput2 = true;
let actualOutput2 = isSubset(input2,input2_1);
   assert.deepEqual(actualOutput2 , expectedOutput2);

let input3 = [2,3,4,5,6,7];
let input3_1 = [2,3,4];
let expectedOutput3 = true; 
let actualOutput3 = isSubset(input3,input3_1);
    assert.deepEqual(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = [12,4,90];
let expectedOutput4 = false;
let actualOutput4 = isSubset(input4,input4_1);
    assert.deepEqual(actualOutput4 , expectedOutput4);


