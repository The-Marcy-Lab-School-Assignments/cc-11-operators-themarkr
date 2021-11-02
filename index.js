/*
define two parameters num1 and num2 
if statement to compare the two parameters values
if num1 = num2 return true
else return false
*/
function areBothSame(num1, num2){
  return num1 == num2;
}
console.log(areBothSame("5", 2))

/*
define two parameters num1 and num2 
compare the two parameters values AND datatype
if num1 === num2 return true
else return false
*/
function areBothEqual(num1, num2){
  return num1 === num2;
}

//3
function areAllFourEqual(num1, num2, num3, num4){
  if (num1 === num2 && num2 === num3 && num3 === num4){
      return true;
  }else{
      return false;
  }
}


//4
function areAllFourSame(num1, num2, num3, num4){
  if(num1 == num2 && num2 == num3 && num3 == num4){
      return true;
  }else{
      return false;
  }
}

//5
function areAllFourSameOrEqual(num1, num2, num3, num4){
  if (num1 === num2 && num2 === num3 && num3 === num4){
      return "equal";
  }else if(num1 == num2 && num2 == num3 && num3 == num4){
      return "same";
  }else{
      return null;
  }
}

console.log(areAllFourSameOrEqual(true, false, 1, "1"));

