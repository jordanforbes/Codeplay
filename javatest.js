var z = 3;
var c = 10;



function hallo(){
  if(true){
    var c = 2;
  }
  console.log(c);
  // returns 2, not the global value 10
  // implication: variables don't have a
  // separate scope within a block
}
