//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  inner = outer();//this line invoked outer
//Once you do that, invoke inner.

  inner(); //this invoked inner



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var inner = callFriend();
inner();



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function(num) {
  return function() {
    return num++;
  }
}

  //Code Here
  var count = makeCounter(0);
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's only argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

var mainFn = function(secondFn, num) {
    var called = false;
    var count = 3;
    return function() {
      if (called === false) {
        secondFn();
        num++;
          if (num >= count) {
            called = true;
            return ('stoooop!!'); // if this  if statement is inside the the other if statement it will only return stop once. If it is not nested inside of the if statement it will return as many times as you invoke it.
      }
    }                               //else {console.log('Stop!')} this else statement will allow the console to log stop! everytime you invoke thirdFn if if you put the console statement inside of the parenthesis it will only console once because the called is === to true.
  }
}

thirdFn = mainFn(function() { // why cant you you use var? everytime I do it, it gives me an error message why can only an annonymous function work.
  alert('Hello I am hidden');
}, 0);

thirdFn()






