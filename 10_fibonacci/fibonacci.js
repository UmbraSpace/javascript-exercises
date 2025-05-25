const fibonacci = function(fibonacciIndex) {
    //initiate array variable, set first two items to 1
    //for loop, iterate index up to fibboIndex
        //append sum of items of the previous two indexes to sequence
    //return item in sequence at index fibonacciIndex - 1

    fibonacciIndex = Number(fibonacciIndex);
    
    if (!fibonacciIndex) return 0;
    else if (fibonacciIndex < 0) return "OOPS";

    let fibonacciSequence = [1, 1];
    for (let i = 2; i < fibonacciIndex; i++){
        let nextVal = fibonacciSequence[i-1] + fibonacciSequence[i-2];
        fibonacciSequence.push(nextVal);
    }
    return fibonacciSequence[fibonacciIndex-1];
};

// Do not edit below this line
module.exports = fibonacci;
