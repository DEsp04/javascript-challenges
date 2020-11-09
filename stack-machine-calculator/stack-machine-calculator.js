const stackMachineCalculator = (expression) => {
  const stack = [];
  const expArray = expression.split(' ');
  let n1;
  let n2;

  for(let i = 0; i < expArray.length; i++){
      switch(expArray[i]) {
          case "+":
              stack.push(stack.pop() + stack.pop());
              break;
          case "-":
              n1 = stack.pop();
              n2 = stack.pop();
              stack.push(n2 - n1);
              break;
          case "*":
              stack.push(stack.pop() * stack.pop());
              break;
          case "/":
              n1 = stack.pop();
              n2 = stack.pop();
              stack.push(n2 / n1);
              break;
          case "DUP":
              stack.splice(stack.length, 0, stack[stack.length - 1]);
              break;
          case "POP":
              stack.pop();
              break;
          default:
              stack.push(parseInt(expArray[i]));
      }
  }
  return stack.pop();s
}

module.exports = stackMachineCalculator
