/*Declare a function that takes any string
as an argument and console logs to the user
the text they've entered, try invoking it after
it has been declared*/

function printName(Name){
  return console.log(Name);
}
printName("Jordan");

/*Declare a function that takes no arguments
but prints something to the console, try
invoking it after it has been declared*/

function go(x){
  return console.log(x)
}

go()

/*No Whammies!!! Declare a function
that receives an input of door 1, 2 or 3.
Depending upon which virtual "door" was entered,
the function will tell the user they've received
a different "prize" in an alert. Try running
it after it has been declared a few times with
each door option.*/
function pickDoor(door){
  if(door == 'door 1'){
    return alert('congratulations you won a jetski!')
  } else if ( door == 'door 2'){
    return alert('congratulations you won a bottle of water!')
  } else if ( door == 'door 3'){
    return alert('congratulations you got nothing!')
  } else {
    return alert('what are you doing???')
  }
}

pickDoor()
