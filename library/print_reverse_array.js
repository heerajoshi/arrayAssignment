const reverseArray = function(numbers){
  let reversedArray = [];
  let reversedArrayIndex = 0;

  for(index = numbers.length-1; index >= 0; index--){
    reversedArray[reversedArrayIndex] = numbers[index];
    reversedArrayIndex++;
  }
  return reversedArray;
}
exports.reverseArray = reverseArray;
