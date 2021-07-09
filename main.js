console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

//====== PULSE CHECK ==========
//Q1
//let myFavoriteFood = 'mansaf'
/*
const favoriteFood = function () {
    // TODO: Your code here

    return myFavoriteFood
  };
  
  //favoriteFood(); // => the value of `myFavoriteFood` variable

//Q2
let myFavoriteFood = 'mansaf'
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
  

//Q4
// instead of counting from zero it will take count from the value provided
const createCounter = function (start) {
    // TODO: Your code here
    let counter = start
    return function(){
        return ++counter;
    }
  };
  const counter1 = createCounter()
  const counter2 = createCounter()


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
let count = 5
const countDown = function () {
    // TODO: Your code here
    if (count <  0 ){
        return "count down is over"
    }
    return count--;
    
  };
  
  countDown(); // => 4
  countDown(); // => 3
  countDown(); // => 2
  countDown(); // => 1
  countDown(); // => 0
  countDown(); // => "count down is over"


//Q4
*/
let x = 0
const countUp = function () {
  // TODO: Your code here
  
  return ++x;
};

countUp(); // => 4
countUp(); // => 5
countUp(); // => 6
countUp(); // => 7
countUp(); // => 8


//Q5
const resetCount = function (start) {
  // TODO: Your code here
  let x = start 
  
    return "the count has been reset"
  
  
};

resetCount(0); // => "the count has been reset"
countUp(); // => 1
resetCount(10); // => "the count has been reset"
countUp(); // => 11

//Q6
const resetList = function (){
  y=''
}
let y = 'Eat'
const addToList = function (toDo) {
  // TODO: Your code here
  if (y === toDo){
    return toDo
  }else{
    return  y = y + ' '+ toDo
  }
  
};



//Q7
const createToDoList = function (toDoListOne) {
  // TODO: Your code here
  let y = 'Eat'
  return function (){
    if (y === toDoListOne){
      return toDoListOne
    }
    return  y = y + ' '+ toDoListOne
  }
};

const toDoListOne = createToDoList();
toDoListOne("Eat"); // => 'Eat'
toDoListOne("Play"); // => 'Eat Play'
toDoListOne("Sleep"); // => 'Eat Play Sleep'
toDoListOne("repeat"); // => 'Eat Play Sleep repeat'

//Q8
/*
const resetBalance = function (){
  balance=0
}
let balance = 0
const deposit = function (amount) {
  // TODO: Your code here
  
   return balance += amount
  }


deposit(100); // => 100
deposit(50); // => 150

//Q9
const withdraw = function (amount) {
  // TODO: Your code here
  if (amount > balance){
    return "insufficient funds, current balance: " + balance
  }
  return balance -= amount
};
*/
//Q10
const resetBalance = function (){
  balance=0
}
const createAccount = function (initialValue) {
  // TODO: Your code here
  balance = initialValue
  return function (transactionType , amount) {
    if (transactionType === "deposit" ){
      return balance+= amount
    }else if ( transactionType === "withdraw" && amount < balance){
      return balance -= amount
      
    }else {
      return "insufficient funds, current balance: " + balance
    }
    
     
    }; 

};
const accountOne = createAccount(0)
const accountTwo = createAccount(500)
accountOne("withdraw", 10)






  
