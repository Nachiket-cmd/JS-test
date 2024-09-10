let score = 44;
/*sometimes when front end and back end communicate with each other
we dont know if the variable is passed as an integer or string etc. 
To fix this, */
console.log(typeof(score));


let valueInNumber = Number(score); //this will change the score to a number datatype irrespective of what it was
console.log(typeof(valueInNumber)); 

let number1 = "32nik";
let changeIt = Number(number1);
console.log(typeof(changeIt));   //this will still give number which is wrong. Beware of this.
    

// "33" => 33
// "33abc" => NaN
// true => 1
//false => 0

let isLoggedIn = 1;
let temp = Boolean(isLoggedIn);
console.log(temp);

// 1 => true
// 0 => false
// "" => false
// "dfasda" => true