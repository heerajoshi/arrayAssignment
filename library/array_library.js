const reverseArray = function(numbers){
  let reversedArray = [];
  let reversedArrayIndex = 0;

  for(index = numbers.length-1; index >= 0; index--){
    reversedArray[reversedArrayIndex] = numbers[index];
    reversedArrayIndex++;
  }
  return reversedArray;
}

const extracteAlternateElement = function(number){
  let filteredArray = [];
  let count = 0;
  for(let index = 0; index < number.length;index +=2){
    filteredArray[count] = number[index];
    count++;
  }
return filteredArray;
}


const reverseFebonacci = function(limit){
  let firstNmber = 0;
  let secondNumber = 1;
  let Febonacci = [];
  let number = 1;
  for(let index = 1;index < limit; index++){
    Febonacci[index] = number;
    thirdNumber = firstNmber + secondNumber;
    firstNmber = secondNumber;
    secondNumber = thirdNumber;
    number = thirdNumber;
  }
   Febonacci[0] = 0;
  return reverseArray(Febonacci);
}
 
exports.reverseFebonacci = reverseFebonacci;
exports.extracteAlternateElement = extracteAlternateElement;
exports.reverseArray = reverseArray;
