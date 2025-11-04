const makeIdFunc = () => {
  let count = 0;

  const inner = () => {
    count++;
    return count;
  };
  return inner;
};

const makePasswordChecker = (correctPassword) => {
  let attempts = 0;

  const validPassword = (guess) => {
    if (attempts >= 3) {
      return 'Account locked';
    }
    if (guess === correctPassword) {
      return true;
    }
    attempts++;
    return false;
  };
  return validPassword;
};

const makeMultiplier = (multiplier) => {

};

const makeFilterByLength = (length) => {

};

const makeGradeTracker = () => {

};

const makeShoppingList = () => {

};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
