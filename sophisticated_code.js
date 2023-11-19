/*************************************************************
 * Filename: sophisticated_code.js
 * Content: Complex and elaborate code showcasing various JavaScript features
 **************************************************************/

// Complex math operations
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Object-oriented programming with classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Promises and asynchronous operations
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function performTask() {
    console.log("Task started.");
    await delay(2000);
    console.log("Task completed.");
}

// Manipulating arrays with higher-order functions
const numbers = [1, 2, 3, 4, 5];
const evenSum = numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);

// Error handling and try-catch blocks
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(`An error occurred: ${error.message}`);
}

// Complex regular expressions
const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const email = "example@test.com";
const isValid = regex.test(email);

// Event handling with event listeners
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    console.log("Button clicked.");
});

// Complex data structures and algorithms
const graph = new Map();
graph.set("A", new Set(["B", "C"]));
graph.set("B", new Set(["A", "D"]));
graph.set("C", new Set(["A"]));
graph.set("D", new Set(["B"]));

function depthFirstSearch(startNode) {
    const visited = new Set();
    const stack = [startNode];

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            const neighbors = graph.get(node);
            for (const neighbor of neighbors) {
                stack.push(neighbor);
            }
        }
    }

    console.log("DFS Visited Nodes:", visited);
}

// Usage examples
const fib10 = fibonacci(10);
console.log(`Fibonacci (n=10): ${fib10}`);

const john = new Person("John Doe", 30);
john.greet();

performTask();

console.log("Even Sum:", evenSum);
console.log("Email is valid:", isValid);

depthFirstSearch("A");

// ... more code here ...

/*************************************************************
 * End of JavaScript code.
 **************************************************************/