console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//====== PULSE CHECK ==========
//Q1
const myFavoriteFood = 'mansaf'
const favoriteFood = function () {
    // TODO: Your code here
    return myFavoriteFood
  };
  
  //favoriteFood(); // => the value of `myFavoriteFood` variable

//Q2
const updateFavoriteFood = function (newValue) {
    // TODO: Your code here
    let myFavoriteFood = newValue 
    return myFavoriteFood 
  };
  
  updateFavoriteFood("Pizza");
  //favoriteFood(); // => "Pizza"


//Q3
/*const createCounter = function () {
    let counter = 0;
  
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  };
const counter1 = createCounter()
const counter2 = createCounter()
  */

//Q4
// instead of counting from zero it will take count from the value provided
const createCounter = function (start) {
    // TODO: Your code here
    let counter = start
    return function(){
        return ++counter
    }
  };


// =========== Practice ================
//Q1
let age = 25;
if (true) {
  age = 30;
}
age; // 30

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // Jane

//Q2
let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // 15

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // 10


//Q3
const count = 5
const countDown = function () {
    // TODO: Your code here
    if (count <= 4 || count >= 0 ){
        return count
    }else {
        return "count down is over"
    }
  };
  
  countDown(); // => 4
  countDown(); // => 3
  countDown(); // => 2
  countDown(); // => 1
  countDown(); // => 0
  countDown(); // => "count down is over"
  
