const selectEven = function(input){
  let evenNumberlist = [];
  let count = 0;
  for(let index=0;index<input.length;index++){
    if(input[index] % 2 == 0){
      evenNumberlist[count] = input[index];
      count++;
    }
  }
  return evenNumberlist;
}
exports.selectEven = selectEven;

