//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



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

var inner = callFriend(); // this line right here is invoking the function callFriend; then that invokation is saved to inner. when you invoke inner (the variable in which the outer invoked function was saved to) you are invoking the function inside of the outer function.
inner('435-215-9248')


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var makeCounter = function(num) {
    return function() {
      num++;
      return num;
    }

  }

  var count = makeCounter(0);
  count(); // 1
  count(); // 2
  count(); // 3
  count();// 4



//Next Problem



/*
  Write a function that accepts another function as it's only argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

  var firstFn = function(secondFn, count) {
                      //debugger;
    var num = 0;
    var called = false;
    return function() {
      if (called === false) {
      secondFn();// if you return secondFn(); it ends at that line and doesnt continue to the called = true line. called = true line will run the else statement
      num++ ;                                                       //called = true;
        }                                                   //else { return "Stop!!!"} this goes into the other original code
      if (num >= count) {
        called = true;
        return 'Stop!!';
      }
    }
  }


var thirdFn = firstFn(function() {
  alert("Hello there!!");
}, 2);




var called = false;
   var num = 4;















