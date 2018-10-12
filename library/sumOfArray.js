const addingElementOfArray  = function(numbers){
  let sum = 0;
  for(let count=0;count<numbers.length;count++){
    sum += numbers[count];
  }
  return sum;
}

exports.addingElementOfArray = addingElementOfArray;
