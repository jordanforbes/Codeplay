
var yourData = "This is my data."

//If you're unsure of an items index number inside
//of an array, When unsure of an index number

var myArr = ["doot","Snoopy"]
var snoopyPosition = myArr.indexOf("Snoopy");
//console.log(snoopyPosition);
//>>1
//console.log(myArr[0])
//>>doot

//Loops- for
for(var i = 0; i<10; i++){
  //i will continue increasing as long as it's
  //less than 10
  console.log(i)
}

//Loops - for
beers=["Lagunitas","Peak"]
for(var i = 0; i< beers.length; i++){
//beers.length = 2 since there are 2 elements in
//the array

//it loops as long as i is under 2
  console.log(beers[i])
}


//Loops - while
x = 6
while(x < 10){
  console.log("On number " + x)
  x++
}

//Create a while loop that "sings" 
//the classic song "99 Bottles of Root Beer
//on the Wall". The code it outputs to the console
//should look similar to this:

//"99 bottles of root beer on the wall,
//99 bottles of root beer...take one down,
//pass it around 98 bottles of root beer on the wall,
//98 bottles of root beer on the wall,
//98 bottles of root beer...take one down,
//pass it around 97 bottles of root beer on the
//wall," etc., all the way to 0 bottles.
