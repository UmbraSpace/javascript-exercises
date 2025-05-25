const palindromes = function (string) {
    string = string.replace(/ |\.|\,|\!/g, "");
    string = string.toLowerCase();
    
    let reversed = string.split("").reverse().join("");

    if (string === reversed) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
