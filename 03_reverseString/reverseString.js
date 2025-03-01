const reverseString = function(input) {
    //define new string variable
    let output = "";
    //for loop through string, decrementing index/counter
    for(let i = input.length - 1; i >= 0; i--){
        //append each character to new string
        output += input.charAt(i);
    }
    //return string
    return output;
};

// Do not edit below this line
module.exports = reverseString;
