const selectOdd = function(input){
  let oddNumberlist = [];
  let count = 0;
  for(let index=0;index<input.length;index++){
    if(input[index] % 2 != 0){
      oddNumberlist[count] = input[index];
      count++;
    }
  }
  return oddNumberlist;
}
exports.selectOdd = selectOdd;
