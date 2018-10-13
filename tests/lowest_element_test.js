const assert = require("assert");
let findLowest = require("../library/array_library.js").findLowest;


let input = [5,3,2,1,55,54];
let expectedOutput = 1;
let actualOutput = findLowest(input);
  assert.equal(actualOutput , expectedOutput);

let input2 = [4,1];
let expectedOutput2 = 1;
let actualOutput2 = findLowest(input2);
   assert.equal(actualOutput2 , expectedOutput2);

let input3 = [2,3,33,31,32];
let expectedOutput3 = 2;
let actualOutput3 = findLowest(input3);
    assert.equal(actualOutput3 , expectedOutput3);

let input4 = [90,100,110];
let expectedOutput4 = 90;
let actualOutput4 = findLowest(input4);
    assert.equal(actualOutput4 , expectedOutput4);

