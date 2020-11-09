// const squareRoot = (radicand) => {
//   let guess = radicand / 2 - .9; //initial guess
//   let radicandDivideGuess = radicand / guess;
  
  
//   //guess answer - answer -- (radicand / answer)

//   while (!Number.isInteger(guess)) {//while guess is not an integer
//     guess = (guess + radicandDivideGuess) / 2 //average
//     radicandDivideGuess = radicand / guess; //
//     guess = Number(Number.parseFloat(guess).toFixed(5));

//   }
//   return guess;
// };
const squareRoot = (radicand) => {
  for (let i = radicand; i >= 1; i--) {
    if (i * i == radicand) {
      radicand = i;
      break;
    }
  }
  return radicand;
}

console.log(squareRoot(16));
module.exports = squareRoot
