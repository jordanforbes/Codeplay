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

function stringCheck()


//6.Declare a function that takes a
//name as an argument and tells the user
//what name they've entered. Try running it
//after it has been declared.


//7.Declare a function that takes no arguments
//but prints something to the console. Try
//running it after it has been declared.

//8.Declare a function that depending upon which
//virtual 'door' was entered tells the user they've
//received a different 'prize' in an alert.
//After declaring the function, try running it with
//different options. There must be at least 3 doors.

//Code has a comment that notes which problem
//the code snippet is attempting to solve.

//All solutions should explicitly fulfill
//the requirements noted in each problem.
//(e.g. problem 8 requires you to alert
//the user to what door they selected and what
//the prize is.)
