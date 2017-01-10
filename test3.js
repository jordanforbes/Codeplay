var my_arr = ["giraffe","zebra","antelope"];
for(i = 0; i < my_arr.length; i++){
  console.log(i + " " + my_arr[i]);
}

function someName(numberOne, otherNumber){
  return numberOne + 10 + otherNumber;
}

function alertName(somePersonsName){
  return alert(somePersonsName);
}

console.log(someName(4,14));
alertName("Zach");
