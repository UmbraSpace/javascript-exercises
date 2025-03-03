const removeFromArray = function(array, ...unwantedItems) {
    //for loop through array
    //for each array item, for loop through unwanted items
    //if array item equals unwanted item, splice array item out of array and break out of inner loop
    //return array
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < unwantedItems.length; j++){
            if (array[i] === unwantedItems[j]){
                array.splice(i, 1);
                i--;
                break;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
