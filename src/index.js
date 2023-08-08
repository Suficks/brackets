module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = [];
  const matchingBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    const [openingBracket, closingBracket] = bracketsConfig[i];
    openingBrackets.push(openingBracket);
    closingBrackets.push(closingBracket);
    matchingBrackets[closingBracket] = openingBracket;
  }

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];

    if (openingBrackets.includes(currentBracket)) {
      if (closingBrackets.includes(currentBracket) && stack[stack.length - 1] === currentBracket) {
        stack.pop();
      } else {
        stack.push(currentBracket);
      }
    } else if (closingBrackets.includes(currentBracket)) {
      const lastOpeningBracket = stack.pop();
      if (matchingBrackets[currentBracket] !== lastOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}