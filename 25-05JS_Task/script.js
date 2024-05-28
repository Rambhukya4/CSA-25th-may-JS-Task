let a= 30;


//checking  given number is odd or even.

if(a%2===0){
    console.log("give a value is even");
}
else if (a%2 !== 0){
    console.log("given a value is odd");
}
else{
    console.log("given a value is undefined ")
}



// checking given number is positive or negative or zero.

if(a>0){
    console.log("Given a value is positive value");
}
else if (a==0){
    console.log("Given a value is equal to 0");
}
else if(a<0){
    console.log("Given a value is negative");
}

//checking  given number is of one digited or two digited or three digited or more than three digited.
let length = Math.abs(a).toString().length;
if(length === 1){
    console.log("given a value is single digit value");
}
else if(length === 2){
    console.log("Given a value is 2 digit value");
}
else if (length === 3){
    console.log ("Given a value is 3 digit value");
}
else{
    console.log("Given a value is more the 3 digits value");
}

// The entered number is smallest 4 digit number or not.


let x = parseInt(prompt("Enter a number:"));

if (x === 1000) {
  console.log(`${x} is the smallest four-digit number`);
}
else if(x<1000){
    console.log("given valu is not a 4 digit number, please enter 4 digit number only")
}
else {
  console.log(`${x} is not the smallest four-digit number`);
}


let char1 = "99"
if (/[A-Z]/.test(char1)){
    console.log("Given value is in UPPER case")
}
else if (/[a-z]/.test(char1)){
    console.log("Given value is in lower case")
}
else if(/[0-9]/.test(char1)){
    console.log("Given value is in digits")
}
else{
    console.log("given value is undefined")
}


//The given year is a leap year or not.
let year = 2128;
if (year%4 == 0){
    console.log(`${year} is an leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}


//check  given number is divisible by 5 or not.


 if (a%5 == 0){
    console.log(`${a} is perfectly divisible by 5`);
  }
 else{
    console.log(`${a} is not divisible by 5 `);
 }


 //Find maximum number out of given three numbers.

 let Ram = 99769;
 let dilip = 21675;
 let shiva = 99810;
 let maxNumber = Math.max(Ram, dilip, shiva);
 let minNumber = Math.min(Ram, dilip, shiva);
console.log(`the maximum number is ${maxNumber}`);
console.log(`The minimum number is ${minNumber}`);


// Checking weather giventhree integers can form triangle or not
let side1 = 3;
let side2 = 5;
let side3 = 5;
if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1 ){
    console.log("The given 3 values  can form a triangle");
}

else if(side1<=0 || side2<=0 || side3<=0){
    console.log("If given vales are zero's and negative values, then those values can't form triangle");
}
else if (side1+side2 >! side3 && side1+side3>!side2 && side2+side3>!side1 ){
    console.log("Given values are not satisfy the inequality theorem conditions");
}
else{
    console.log("given values are undefined");
}


