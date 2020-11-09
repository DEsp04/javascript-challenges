const targetSumExistsInTwoNumbers = (list, target) => {
  for (let i = 0; i < list.length; i++) { 
    for (let j = i + 1; j < list.length; j++) { 
      if (list[i] + list[j] === target) { 
        return true;
      }
    }
  }
}

// const targetSumExistsInTwoNumbers = (list, target) => {
//   for (let i in list) {
//     for (let j in list) {
//       //see if list[i] + list[j] === target
//       if (list[i] + list[j] === target) {
//         return true;
//       }
//     }
//   }
// };


module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}


//sum all nums given in the list
//if result is greater than targeted value, look for negative nums
//if result less than targeted value, look for positive nums
//if result equals target value, return true


//Question: can a num be used zero times