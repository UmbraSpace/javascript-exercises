function findTheOldest (array){
    let oldest = array.reduce((acc, curr) => {
        let accAge = acc.yearOfDeath ? acc.yearOfDeath - acc.yearOfBirth :
        2025 - acc.yearOfBirth;
        let currAge = curr.yearOfDeath ? curr.yearOfDeath - curr.yearOfBirth :
        2025 - curr.yearOfBirth;
        if (accAge >= currAge){
            return acc;
        } else return curr;
    })
    return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
