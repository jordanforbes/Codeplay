//Create a script with two variables,
//each assigned to a number. Add them
//together and output the result to the
//console. Now do the same with two strings.

var numberOne = 1;
var numberTwo = 2;
console.log(numberOne + numberTwo);

var numberOne = 'hi';
var numberTwo = ' how are you';
console.log(numberOne + numberTwo);

//Create a multidimensional array related to
//a subject that interests you.
//Output two of the items in sub-arrays
//to the console.

var chords =[["c", "cs", "d", "ds", "e", "f",
            "fs", "g", "gs", "a", "as", "b"],["majorTri","minorTri","majorSev",
                  "minorSev","domSev","augSev"]]
console.log(chords[0][4]+" "+chords[1][0]);

var notes= ["c", "cs", "d", "ds", "e", "f",
            "fs", "g", "gs", "a", "as", "b"]


var cMaj = {Root:notes[0],Third:notes[4],Fifth:notes[7]};
var cMin = {Root:notes[0],Third:notes[3],Fifth:notes[7]};
console.log(cMaj.Root,cMaj.Third,cMaj.Fifth)
console.log(cMin.Root,cMin.Third,cMin.Fifth)

//Write a script that checks if a
//variable is less than 100. If it is,
//alert the user that their variable is less
//than 100. If it is not alert the user of what
//the value was and that it was greater than 100.


function hundredCheck(e){
if(e<100){
  return alert("This variable is less than 100")
}else if(e>=100){
  return alert("This variable is "+ e
  +" and it is greater than 100")
}
}

hundredCheck(101)

//Try running the script and then changing the variable's value to see how this affects the program's output.

//5.Write a similar script to check if a
//string stored in a variable is the same as
//another string.

var t = "this is not the string you're looking for";

function stringCheck(t){
if(t == "this is the string you're looking for"){
  return alert("You found it")
}else if(t != "this is the string you're looking for"){
  return alert("look somewhere else")
}
}
stringCheck()


//6.Declare a function that takes a
//name as an argument and tells the user
//what name they've entered. Try running it
//after it has been declared.

function nameReader(name){
  console.log(name)
}

nameReader('Jerry')

//7.Declare a function that takes no arguments
//but prints something to the console. Try
//running it after it has been declared.

function printSomething(){
  console.log('something')
}

printSomething()

//8.Declare a function that depending upon which
//virtual 'door' was entered tells the user they've
//received a different 'prize' in an alert.
//After declaring the function, try running it with
//different options. There must be at least 3 doors.

function pickDoor(door){
  if (door == 1){
    return alert('You selected door number 1! Congratulations you won a jetski!')
  } else if ( door == 2){
    return alert('You selected door number 2! congratulations you won a bottle of water!')
  } else if ( door == 3){
    return alert('You selected door number 3! congratulations you won nothing!')
  } else if ( door > 3 && door <= 20){
    return alert('nope theres only three doors friendo')
  } else if ( door > 20){
    return alert ('what the hell are you doing?')
  } else if ( door == 0){
    return alert ('Oh come on dont be like that')
  }
}

pickDoor()
//You can ask (or query) the variable
//for its datatype using the typeof operator


//Code has a comment that notes which problem
//the code snippet is attempting to solve.

//All solutions should explicitly fulfill
//the requirements noted in each problem.
//(e.g. problem 8 requires you to alert
//the user to what door they selected and what
//the prize is.)

/*
function pickDoor(door){
  if (door == 1){
    return alert('You selected door number 1! Congratulations you won a jetski!')
  } else if ( door == 2){
    return alert('You selected door number 2! congratulations you won a bottle of water!')
  } else if ( door == 3){
    return alert('You selected door number 3! congratulations you won nothing!')
  } else if ( door > 3 && door <= 20){
    return alert('nope theres only three doors friendo')
  } else if ( door > 20){
    return alert ('what the hell are you doing?')
  } else if ( door == 0){
    return alert ('Oh come on dont be like that')
  }
}

pickDoor()
*/

alert("You have three doors numbered 1 through 3, pick a door and win a prize!");
var doors = prompt("pick a door!");
switch(doors){
  case '1':
  ('You\'ve selected door number 1! Congratulations you won a jetski!');
  break;
  case '2':
  alert('You\'ve selected door number 2! congratulations you won a bottle of water!')
  break;
  case '3':
  alert('You\'ve selected door number 3! congratulations you won nothing!')
  break;
  case '69':
  alert("you've won the true prize")
  break;
  case '420':
  alert('shit my dude take a hit of this danky dank')
  break;
  case'no':
  alert('fuck you')
  break;
  default:
    alert('Oh come on dont be like that')
}

//how can I make this into a text input on the page?
//how can I make this loop until you select a correct door number?
