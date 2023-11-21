//Array squared
//Square the value of every element in the array. Presume that you will only get numbers in the input array.
const inputSquared = [1, 2, 3, 4, 5];
const map = inputSquared.map((x) => Math.pow(x, 2));

console.log("Array squared:", map);

//Sum of every positive element
//If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
const inputFilter = [1, -4, 12, 0, -3, 29, -150];
const filter = inputFilter.filter((positive) => positive > 0);
console.log(filter);
const initialValue = 0;
const sumResult = filter.reduce(
  (positive, current) => positive + current,
  initialValue
);
console.log("Sum of every positive element:", sumResult);

//Calculate median and mean
//Calculate the mean and median values of the number elements from the input array.
const inputMedianMean = [12, 46, 32, 64];
inputMedianMean.sort((a, b) => a - b);

const inputInitial = "George Raymond Richard Martin";

console.log(
  "Get name initials",
  inputInitial
    .split(" ")
    .map((word) => word[0])
    .join("")
);
