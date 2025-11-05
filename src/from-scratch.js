const makeIdFunc = () => {
  let count = 0;

  const increment = () => {
    count++;
    return count;
  };
  return increment;
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
  const multiply = (arr) => {
    return arr.map((num) => num * multiplier);
  };
  return multiply;
};

const makeFilterByLength = (length) => {
  const maxLength = (arr) => {
    return arr.filter((word) => word.length <= length);
  };
  return maxLength;
};

const makeGradeTracker = () => {
  const grades = [];

  const studentGrades = {
    addGrade(grade) {
      if (grade < 0 || grade > 100) {
        return false;
      }
      grades.push(grade);
      return true;
    },
    getAverage() {
      if (grades.length == 0) {
        return 0;
      }
      return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
    }
  }
  return studentGrades;
};

const makeShoppingList = () => {
  const items = [];

  const shoppingList = {
    getItems() {
      return [...items];
    },

    addItem(item) {
      items.push(item);
      console.log(`${item} successfully added! Now you have ${items.length} item(s).`);
      return items.length;
    },

    removeItem(item) {
      const index = items.indexOf(item);

      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} successfully removed. You now have ${items.length} item(s).`);
        return true;
      } else {
        console.log(`${item} not found.`);
        return false;
      }
    }
  }
  return shoppingList;
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
