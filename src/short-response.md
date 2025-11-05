# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1
The principle of encapsulation in object-oriented programming controls how an object and its behavior are accessed. It determines which parts of an object’s state can be viewed or modified. By keeping the state private, encapsulation hides data from outside access. The state can only be accessed or changed through getter and setter methods. This helps keep the object’s data safe and lets you make changes without breaking other parts of the code.


---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

A **closure** is a function that's declared and used inside another function that can access the variables in the outer function scope. In other words, the inner function remembers the environment in which it was created. From the given example, the `multiplyNumsBy` takes in two arguments, `nums` (an array of numbers) and `multiplier` (a number). Inside the function, **(num) => num * multiplier** uses an inner arrow function that accesses `multiplier` from the outer scope. This makes the arrow function a closure because it depends on a variable outside its own scope.



---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: function() {
      console.log(`${this.name} the ${this.species} says ${sound}`)
    }
  }
  return animal;
}

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

The `this` keyword refers to the object that is calling the function or to the new instance created by a constructor. The `makeNoise` method is not working because it was defined as an **arrow function**. Arrow functions inherit 'this' from the surrounding scope where the function is defined, not from the object that calls the function. In this case, `this` inside `makeNoise` does not refer to the animal object, which is why `this.name` and `this.species` were `undefined`.