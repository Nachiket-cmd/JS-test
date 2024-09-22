console.log("2" > 1);
console.log(2 > "1");


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// we got true in the case of >= because the comparison operator >= , <= treats null like a number and converts it to 0.

console.log("2" === 2);  // === here is strict check. this checks the value and the datatype as well. this is very useful when you want to strict check the variable.




