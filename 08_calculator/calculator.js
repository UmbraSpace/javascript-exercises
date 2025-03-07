const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
  for (let num of nums){
    sum += num;
  }
	return sum;
};

const multiply = function(nums) {
  let product = 1;
  for (let num of nums){
    product *= num;
  }
  return product;

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
