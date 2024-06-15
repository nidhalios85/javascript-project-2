//String functions
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"




function countCharacters(str) {
    return str.length;
}

// Example usage:
console.log(countCharacters("hello")); // Output: 5




function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"




//array functions
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Example usage:
console.log(findMaximum([1, 2, 3, 4, 5])); // Output: 5
console.log(findMinimum([1, 2, 3, 4, 5])); // Output: 1


function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage:
console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15


function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);
}

// Example usage:
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); // Output: [4, 5]




//maths
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120



function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(5)); // Output: true
console.log(isPrime(4)); // Output: false


function fibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacciSequence(5)); // Output: [0, 1, 1, 2, 3]
