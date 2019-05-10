let randomNum = require("./function").randumNum;
let firstNum = parseInt(process.argv[2]);
let secondNum = parseInt(process.argv[3]);
if(isNaN(firstNum) || isNaN(secondNum)){
    console.log("Please provide two numbers");
}
else{ 
    console.log(randomNum(firstNum, secondNum));
}
