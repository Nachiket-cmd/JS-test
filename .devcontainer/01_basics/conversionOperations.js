let score = 44;
/*sometimes when front end and back end communicate with each other
we dont know if the variable is passed as an integer or string etc. 
To fix this, */
// console.log(typeof(score));


let valueInNumber = Number(score); //this will change the score to a number datatype irrespective of what it was
// console.log(typeof(valueInNumber)); 

let number1 = "32nik";
let changeIt = Number(number1);
// console.log(typeof(changeIt));   //this will still give number which is wrong. Beware of this.
    

// "33" => 33
// "33abc" => NaN
// true => 1
//false => 0

let isLoggedIn = 1;
let temp = Boolean(isLoggedIn);
// console.log(temp);

// 1 => true
// 0 => false
// "" => false
// "dfasda" => true

//*********Operations***********//

let value = 2
let negValue = -value;
console.log(negValue);
 
let str1 = "Nachiket";
let str2 = " Tiwari";
let str3 = str2 + str1;
console.log(str3);

let num1 = ("1" + 2 + 2);
let num2 = (2 + 2 + "1");
console.log(num1,num2); //by this we can make out that javascript takes the first datatype as the primitive type and goes ahead according to it.
 

