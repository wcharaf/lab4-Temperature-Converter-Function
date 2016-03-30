var temp;
var type;
function convertor (temp, type) {
	// type = type.tolowercase();
  //if (type="F")||
  if (type="f") {
    temp= (temp-32)*(5/9);
    console.log(temp+" "+type+" degrees!");
  }
  //else (type="C")||
  else if (type="c") {
    temp = (temp *(9/5))+32;
    console.log(temp+" "+type+" degrees!");
  }
  else {
    console.log("TYPO IDIOT!!!!!")
  }
}
console.log(convertor(212, "c"));
