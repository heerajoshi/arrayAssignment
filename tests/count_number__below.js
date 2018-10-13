const assert = require("assert");
let countNumbersBelow = require("../library/array_library.js").countNumbersBelow;


let input = [5,3,2,1,55,54];
let input1 = 5;
let expectedOutput = 3;
let actualOutput = countNumbersBelow(input,input1);
  assert.equal(actualOutput , expectedOutput);

let input2 = [4,1];
let input2_1 = 1;
let expectedOutput2 = 0;
let actualOutput2 = countNumbersBelow(input2,input2_1);
   assert.equal(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let input3_1 = 32;
let expectedOutput3 = 3;
let actualOutput3 = countNumbersBelow(input3,input3_1);
    assert.equal(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let input4_1 = 100;
let expectedOutput4 = 1;
let actualOutput4 = countNumbersBelow(input4,input4_1);
    assert.equal(actualOutput4 , expectedOutput4);



