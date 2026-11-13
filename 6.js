let numbers = [10, 20, 30, 40]; // array 

let sum = numbers.reduce((total, value) => {
    return total + value;
}, 0);

console.log("Total:", sum);