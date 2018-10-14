const addingElementOfArray  = function(numbers){
  let sum = 0;
  for(let count=0;count<numbers.length;count++){
    sum += numbers[count];
  }
  return sum;
}

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
  let firstNmber = -1;
  let secondNumber = 1;
  let Febonacci = [];
  for(let index = 0;index < limit; index++){
    thirdNumber = firstNmber + secondNumber;
    firstNmber = secondNumber;
    secondNumber = thirdNumber;
    Febonacci[index] = thirdNumber;
  }
  return reverseArray(Febonacci);
}

const findGreatestNumber = function(numbers){
  let greatestNumber = 0;
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index] > numbers[index +1]){
      greatestNumber = numbers[index];
    }
  }
  return greatestNumber;
}

const findLowest = function(numbers){
  let lowestNumber = numbers[0];
  for(number of numbers){
    if(lowestNumber > number){
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

const averageOfArray = function(numbers){
  let average =  addingElementOfArray(numbers)/numbers.length;
  return average;
}

const mappingLength = function(numbers){
  let elementLength = [];
  for(let index = 0; index < numbers.length; index++){
    elementLength[index] = numbers[index].length;
  }
  return elementLength;
}

const countOdd = function(numbers){
  let count = 0;
  for(let index = 0;index < numbers.length; index++){
    if(numbers[index] %2 != 0){
      count++;
    }
  }
  return count;
}

const countEven = function(numbers){
  let count = 0;
  for(let index = 0;index < numbers.length; index++){
    if(numbers[index] %2 == 0){
      count++;
    }
  }
  return count;
}

const countNumbersAbove = function(numbers,number){
  let count = 0;
  for(let index = 0;index < numbers.length; index++){
    if(number < numbers[index]){
      count++;
    }
  }
  return count;
}

const countNumbersBelow = function(numbers,number){
  let count = 0;
  for(let index = 0;index < numbers.length; index++){
    if(number > numbers[index]){
      count++;
    }
  }
  return count;
}

const isAscendingOrder = function(numbers){
  let isAscending = true;
  for(let index=0; index < numbers.length; index++){
    if(numbers[index] > numbers[index+1] ){
      isAscending = false;
    }
  }
  return isAscending;
}

const isDescendingOrder = function(numbers){
  let isDescending = true;
  for(let index=0; index < numbers.length; index++){
    if(numbers[index] < numbers[index+1] ){
      isDescending = false;
    }
  }
  return isDescending;
}

const extract = function(number){
  let extractsNumber = number.toString().split("");
  return extractsNumber;
}

const findUnique = function(elements){
  let uniqueElements = [];
  for(let element of elements){
    const shouldAdd = !uniqueElements.includes(element);
    if(shouldAdd){
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
}

const concatTwoArray = function(array1 , array2){
  let concatedArray = array1.concat(array2);
  let uniqueconcatArray = findUnique(concatedArray);
  return uniqueconcatArray;
}

exports.concatTwoArray = concatTwoArray;
exports.findUnique = findUnique;
exports.extract = extract;
exports.isDescendingOrder = isDescendingOrder;
exports.isAscendingOrder = isAscendingOrder;
exports.countNumbersBelow = countNumbersBelow;
exports.countNumbersAbove = countNumbersAbove;
exports.countEven = countEven;
exports.countOdd = countOdd;
exports.mappingLength = mappingLength;
exports.averageOfArray = averageOfArray;
exports.findLowest = findLowest;
exports.findGreatestNumber = findGreatestNumber;
exports.reverseFebonacci = reverseFebonacci;
exports.extracteAlternateElement = extracteAlternateElement;
exports.reverseArray = reverseArray;
exports.addingElementOfArray = addingElementOfArray;
