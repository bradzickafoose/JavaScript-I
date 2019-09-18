//Function declaration

// function add(num1, num2) {
//   return num1 + num2 
// };
// console.log(add("javacript", " is fun!"));

// Function Expressions 

const functionExpressionTest = function (num1, num2) {
  return num1 + num2;
}
// console.log(functionExpressionTest(400,20));

// Arrow functions - they are derived from function expressions

// this is ES6 syntax

const arrowTest = (num1, num2)=>{
  return num1 + num2;
}
// console.log(arrowTest(4,5));

// We delete the function keyword and add a fat arrow at the end

// Arrow function - example #2
const arrowSub = (num1, num2)=>{
  return num1 - num2;
}
// console.log(arrowSub(9,10));

//Objects - fancy variable - a way to contain more information

const dog = {
  //properties - key/value pairs
  name: "Bella",
  breed: "Border Collie",
  colour: "brindle",
  weight: "35lbs",
  age: 2,
  //methods - functions
  eat: function() {
    return "likes to eat steak";
  },
  chase: function(){
    return "likes to chase squirrels";
  }
};
// console.log(dog.name);
// console.log(dog.breed);
// console.log(dog.eat());
// console.log(dog.chase());

const bird = {
  breed: "King Parrot",
  color: "red",
  eat: function() {
    return "likes to eat seeds";
  }
}
// console.log(bird.breed);
// console.log(bird.eat());

// ARRAYS - it stores information and order is the most important thing about an array

const cities = ['Prague', 'Melbourne', 'New York', 'Puerto Viejo', 'Berlin'];
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[3]);
// console.log(cities.length);
// console.log(cities[cities.length-1]);

var meals = ['breakfast', 'lunch', 'dinner'];
// meals.pop();
// meals;