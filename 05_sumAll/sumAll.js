const sumAll = function(num1, num2) {
    //for loop, set i equal to first argument and increment until greater than second
    //for each iteration, add i to sum variable
    //return sum
    
    let negativeInput = (num1 < 0 || num2 < 0);
    
    let areIntegers = 
    (Math.floor (num1) === num1 &&
    Math.floor (num2) === num2);
    
    let areNumbers = 
    (typeof num1 === "number" && typeof num2 === "number");
    
    if (!areIntegers || !areNumbers || negativeInput) return "ERROR";
    
    
    let sum = 0;

    if (num2 > num1)
        for (let i = num1; i <= num2; i++) sum+=i;
    else
        for (let i = num2; i <= num1; i++) sum+=i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
