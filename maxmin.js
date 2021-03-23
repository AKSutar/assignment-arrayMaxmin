var numbers = [2, 4, 9, 2, 0, 16, 24, 36, 59];


var smallest_number =  Math.min(...numbers);
var largest_number = Math.max(...numbers);

console.log("Smallest Value:", smallest_number); 
console.log("Largest Value:", largest_number); 

document.getElementById("minNo").innerHTML = "The smallest number in the array :- " + smallest_number;
document.getElementById("maxNo").innerHTML = "The largest number in the array :- " + largest_number;