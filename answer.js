/**
 * @preserve 103a89eac5bbd238d5bb6013b1a025ae
 *
 * 103a89eac5bbd238d5bb6013b1a025ae
 * javascript1
 * lab2
 * v2
 * dbwebb clone javascript1
 * 2019-10-16 15:01:51
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-16 17:01:51 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 2 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `22 and 91`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let sumRangeNumbers =(x,y) =>{
    let result=0;
    for (let i=x;i<=y;i++ ){
        result+=i;
    }
    return result;
}

ANSWER = sumRangeNumbers(22,91);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `plum` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let fruitColor= (fruit) => {
    let text ="";
    switch(fruit){
        case "banana":
            text="yellow";
            break;
        case "apple":
        case "kiwi":
            text="green";
            break;
        case "plum":
            text="red";
            break;
        default:
            text = "It is not fruit.";
    }
    return text;
}

ANSWER = fruitColor("plum");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `25 and 46`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let printRange = (rangeStart, rangeStop) => {
    let allNumbers="";
    for(let i=rangeStart;i<=rangeStop;i++ ){
    allNumbers+=i+",";
   }
    return allNumbers.slice(0,-1);
}

ANSWER = printRange(25,46);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `46 and 25`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let printRangeReversed = (rangeStart,rangeStop) => {
    let text ="";
    for(let i=rangeStart; i>=rangeStop;i--){
        text+=i+",";
    }
    return text.slice(0,-1);
}

ANSWER = printRangeReversed(46,25);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `25 and 46` (both ways).
 *
 * Answer with the result using arguments 25 and 46.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

  function printAnyRange(rangeStart,rangeStop) {
    let text ="";
    if (rangeStart<rangeStop){
       return printRange(rangeStart,rangeStop) 
    }else if(rangeStart>rangeStop){
       return printRangeReversed(rangeStart,rangeStop)
    } else{
        return text = "You should not use same number for rangeStart and rangeStop";
    }
  }

ANSWER = printAnyRange(25,46);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `grey` and `12`. The number represents the number of times the
 * string should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let stringRepeat= (string, number) =>{
    let text="";
  for(let i=0;i<number;i++){
    text+= string;
  }
  return text;
}

ANSWER = stringRepeat("grey",12);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `131 - 547` and the value `434`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let inRange= (rangeStart,rangeStop,value) => {
    let hasInRange;
    if(rangeStart<value && rangeStop>value){
       return hasInRange =true;
    }else{
       return hasInRange =false;
    }
}

ANSWER = inRange(131,647,434);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `131 - 547` and the value
 * `636`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = inRange(131,547,636);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `32` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let degreesToRadians= (degree)=> {
    return parseFloat((degree * (Math.PI / 180)).toFixed(4));
     // let radians =degree * (Math.PI / 180);
    // Math.round(radians*10000)/10000
}   

ANSWER = degreesToRadians(32);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=1 and stop=30`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let fizzBuzz = (start, stop) => {
    let result= "";
    if(stop<=start){
        return result="Error! Stop should not be equal or larger than start."
    } 

    for(let i=start;i<=stop;i++ ){

        if (i%3===0 && i%5===0){
            result+="Fizz Buzz"+",";
        } else if(i%3===0){
            result+="Fizz"+",";
        } else if(i%5===0){
            result+= "Buzz"+",";
        } else{
            result+= i +",";
        }
    }
    return result.slice(0,-1);

}

ANSWER = fizzBuzz(1,30);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `4, 10 and 3`.
 * The dealers hand should be three card with the values: `3, 6, 11`.
 * The function should return the sum and the player: `Player: 17, Dealer:
 * 20`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let playersCard=[4,10,3];
let dealersCard=[3,6,11];
let printSum = (playersArr,dealersArr) => {

    let playersHand =0; 
    for(let i=0; i<playersArr.length;i++ ){
        playersHand += parseInt(playersArr[i]); 
    }
    let dealersHand =0; 
    for(let i=0; i<dealersArr.length;i++){
        dealersHand += parseInt(dealersArr[i]);
    }
    let text ="Player: "+ playersHand +", " +"Dealer: "+ dealersHand;

    return text; 
}

ANSWER = printSum(playersCard,dealersCard);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `4, 10 and 3`. The
 * dealers hand should be three card with the values: `3, 6, 11`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let printResult =( playersArr, dealersArr) =>{

    let playersHand =0; 
    for(let i=0; i<playersArr.length;i++ ){
        playersHand += parseInt(playersArr[i]); 
    }
    let dealersHand =0; 
    for(let i=0; i<dealersArr.length;i++){
        dealersHand += parseInt(dealersArr[i]);
    }

    let playerMessage="";
    if(playersHand<21){
        playerMessage="safe";
    } else if (playersHand>21){
        playerMessage="busted";
    } else{
        playerMessage="black jack";
    }

    let dealerMessage="";
    if(dealersHand<17){
        dealerMessage="safe";
    } else if (playersHand>=17&&dealersHand<21){
        dealerMessage="stop";
    } else if (dealersHand>21){
        dealerMessage="busted";
    } else{
        dealerMessage="black jack"
    }

    let text ="Player: "+ playerMessage +", " +"Dealer: "+ dealerMessage;

    return text; 
}


//Use same arrays

ANSWER = printResult(playersCard, dealersCard);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `745, 31 and 5`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


let calculateInterest = (money,years,interestRate) => {
    let total=parseInt(money);
    console.log(total);
    for (let i = 0; i<parseInt(years);i++){
        total+=total*parseInt(interestRate)/100;
    console.log(total + " "+i)
    }
    return parseFloat(total.toFixed(4));

    // let endMoney = money * (Math.pow((1 + interest / 100), years));
    //return parseFloat(endMoney.toFixed(4))

}

ANSWER = calculateInterest(745,31,5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
