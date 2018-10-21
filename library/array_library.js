const sumOfTwoNumber = function(a,b){
  return a+b;
}

const addingElementOfArray  = function(inputArray){
  return inputArray.reduce(sumOfTwoNumber);
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

const findGreatestNumber = function(inputArray){
  return inputArray.reduce(function(firstNum,secoundNum){
    return Math.max(firstNum,secoundNum);
  });
}


const findLowest = function(numbers){
  return inputArray.reduce(function(firstNum,secoundNum){
    return Math.min(firstNum,secoundNum);
  });
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

const intersectionOfTwoArray = function(array1,array2){
  let commonElementArray = [];
  let iscommon = "";
  let count = 0;
  for(let index = 0; index < array2.length; index++){
    iscommon = array1.includes(array2[index]);
    if(iscommon){
      commonElementArray[count] = array2[index];
      count++
    }
  }
  return commonElementArray;
}

const differenceOfArray = function(array1,array2){
  let diffrArray = [];
  let isDifference = "";
  let count = 0;
  for(let index = 0; index < array1.length; index++){
    isDifference = !array2.includes(array1[index]);
    if(isDifference){
      diffrArray[count] = array1[index];
      count++
    }
  }
  return diffrArray;
}

const zipArray = function(firstArray, secondArray) {
  let zippedArray = [];
  for (let index = 0; index < firstArray.length; index++) {
    zippedArray[index] = [];
    zippedArray[index][0] = firstArray[index];
    zippedArray[index][1] = secondArray[index];
  }
  return zippedArray;
}

const isSubset = function(array1,array2){
  let status = true; 
  for(index = 0; index < array2.length; index++){
    checkElement = !array1.includes(array2[index]);
    if (checkElement){
      status = false;
    }
  }
  return status;
}

const partition = function(array,number){
  let partitionedArry = [[],[]];
  let count = 0;
  let count2 = 0;
  for(let index = 0; index < array.length; index++){
    if (number >= array[index]){
      partitionedArry[0][count] = array[index];
      count++;
    }else{
      partitionedArry[1][count2] = array[index];
      count2++;
    }
  }
  return partitionedArry;
}

const firstIndexOfValue = function(array, number){
  for(let index=0 ; index <array.length; index++){
    if(array[index] == number)
      return index
  }
}


const rotateArray = function(array,number){
  let startIndex = firstIndexOfValue(array,number)+1;

  let rotatedArray = [];

  for(let index = startIndex; index < array.length; index++){
    rotatedArray.push(array[index]);
  }

  for(index = 0; index < startIndex; index++){
    rotatedArray.push(array[index]);
  }
  return rotatedArray;
}

exports.rotateArray = rotateArray;
exports.partition = partition;
exports.isSubset = isSubset;
exports.zipArray = zipArray;
exports.differenceOfArray = differenceOfArray;
exports.intersectionOfTwoArray = intersectionOfTwoArray;
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
