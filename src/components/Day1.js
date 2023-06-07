import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';



export default function Day1(text) {

//@ts-ignore
const showLineNumbers = Boolean('showLineNumbers', true);
const codeAsync = `document.write("Hi");
document.write("<br>");
setTimeout(() => {
    document.write("Print Asynchronously");
}, 2000);
document.write("<br>");
document.write("End");
document.write("<br>");

// Output
//Hi
//End
//Print Asynchronously
`;
const codeSync = `
document.write("First line of code"); // First
document.write("<br>");

document.write("Vijay") ;// Second
document.write("<br>");

document.write("Third line of code"); // Third

Output:
// First line of code
// Vijay
// Third line of code

`;

  return (
    <div className='dayBlock'>
        <h1>Day 1: </h1>
        <div className='block'>
            <h2>1) What is javascript?</h2>
            <p>JavaScript is a high-level, interpreted programming language primarily used for creating 
                dynamic and interactive web applications. 
                It is a versatile language that can be executed on the client-side (in web browsers) as well 
                as on the server-side (using platforms like Node.js).

JavaScript was initially developed to add interactivity to static web pages by manipulating HTML elements, 
handling user events, and making asynchronous requests to servers. However, it has evolved into a powerful 
language with a wide range of applications beyond web development, including server-side scripting, desktop 
application development, game development, and even mobile app development.</p>

    <h3>Key Features: </h3>
    <p><strong>Asynchronous Programming: </strong>JavaScript has built-in support for asynchronous programming through callbacks, promises, and async/await, 
    which allows non-blocking execution and smooth handling of time-consuming operations like network requests. </p>

    <p><strong>Object Oriented: </strong> JavaScript supports object-oriented programming concepts like encapsulation, inheritance, and polymorphism. 
    Objects in JavaScript are collections of key-value pairs and can have both properties and methods. 
    </p>
    <p><strong>Dynamic Typing: </strong>JavaScript is dynamically typed, meaning you don't need to specify the data type of a variable explicitly. 
    It dynamically determines the type of a variable at runtime. </p>

    <p><strong>Event-Driven: </strong> JavaScript allows developers to handle user interactions and respond to events such as button clicks, form submissions, or mouse movements. 
    This makes it well-suited for building interactive and responsive web applications.</p>

    <p><strong>Extensibility: </strong>JavaScript can be extended using third-party libraries and frameworks, providing additional functionality and simplifying development tasks. 
    Popular JavaScript libraries and frameworks include React.js, Vue.js, AngularJS, and jQuery. </p>

    <p><strong>Support for APIs: </strong>JavaScript provides built-in APIs (Application Programming Interfaces) that allow interaction with web browsers, enabling tasks 
    like manipulating the DOM (Document Object Model), making HTTP requests, and storing data locally. </p>
</div> 

    <div className='block'>
        <h2>2) Asynchronous JavaScript</h2>
        <p>Asynchronous code allows the program to be executed immediately where the synchronous code will block further 
            execution of the remaining code until it finishes the current one.
        </p>

        <CodeBlock
            text={codeAsync}
            // theme={require('../src')[dracula]}
            theme={dracula}
            showLineNumbers={showLineNumbers}
        />
        
    </div>

    <div className='block'>
        <h2>3) Synchronous JavaScript</h2>
        <p>Asynchronous means to be in a sequence, i.e. every statement of the code gets executed one by one.</p>

        <CodeBlock
            text={codeSync}
            // theme={require('../src')[dracula]}
            theme={dracula}
            showLineNumbers={showLineNumbers}
        />
        
    </div> {/* Block Ends */}

    <div className='block'>
        <h2>4) Variable and Types</h2>
        <p>A variable is a named container that holds a value in a computer program.
        ariables are essential for storing data that can be manipulated, processed, 
        or used in different parts of a program 
        </p>
        <h3>- Primitive Types:</h3>
        <ul>
            <li>Number: Represents numeric values, both integers and floating-point numbers.</li>
            <li>String: Represents sequences of characters, such as text.</li>
            <li>Boolean: Represents either true or false.</li>
            <li>Undefined: Represents a variable that has been declared but not assigned a value.</li>
            <li>Null: Represents the intentional absence of any object value.</li>
        </ul>
        

        <CodeBlock
            text={`
            // Primitive types example
                let age = 25; // Number
                let name = "John Doe"; // String
                let isStudent = true; // Boolean
                let undefinedVariable; // Undefined
                let noValue = null; // Null
            `}
            theme={dracula}
            showLineNumbers={showLineNumbers}
        />   


        <h3>- Object Types:</h3>
        <ul>
            <li>Object: Represents a collection of key-value pairs and is a fundamental data structure in JavaScript.</li>
            <li>Array: Represents an ordered collection of elements, which can be of any type.</li>
            <li>Function: Represents reusable blocks of code that can be called and executed.</li>
        </ul>
        

        <CodeBlock
            text={`
            // Object types example
                let person = { name: "John", age: 30 }; // Object
                let numbers = [1, 2, 3, 4, 5]; // Array
                let greet = function () {
                console.log("Hello!");
                }; // Function
            `}
            theme={dracula}
            showLineNumbers={showLineNumbers}
        />   

        <h3>- Special Types:</h3>
        <ul>
            <li>Symbol: Represents unique and immutable values that can be used as object properties.</li>
            <li>BigInt: Represents integers with arbitrary precision, allowing you to work with extremely large numbers.</li>
        </ul>
        

        <CodeBlock
            text={`
            let uniqueId = Symbol("id"); // Symbol
            let bigNumber = BigInt(9007199254740991); // BigInt
            `}
            theme={dracula}
            showLineNumbers={showLineNumbers}
        />         
    </div> {/** Block Ends */}

    <div className='block'>
        <h2>4) Difference between <i>'var'</i>, <i>'let'</i>, <i>'const'</i>.</h2>
        <p>These are use to declare variables. </p>
        <h3>- var:</h3>
        <p><strong>'var'</strong> are both function-scoped or global-scoped.They are hoisted on top of their 
        scope. This means they can be accessed before they are declared within their scope. If 'var' declared outside any function 
        it becomes global variable. Values can be re-assigned to 'var'.</p>
        
        <h3>- let:</h3>
        <p><strong>'let'</strong> are limited block scoped and can't be hoisted. Only accessible 
        within block i.e. curly braces. Values can be re-assigned to 'let'.</p>

        <h3>- const:</h3>
        <p><strong>'const'</strong> are limited block scoped and can't be hoisted. Values can not be 
        re-assigned to 'const'. they must reassigned a value at the time of declaration.</p>

        <h4><i>Tempral dead zone: let and const variables are subject to the temporal dead zone. This means that if you try to access them before they are declared, 
            you'll encounter a ReferenceError. However 'var' being hoisted, do not have a temporal dead zone. They can be accessed (though their value will be undefined) 
            before they are declared.</i> </h4>        

        </div> {/** Block Ends */}

        <div className='block'>
        <h2>4) What is Await in javascript?</h2>
        <p>await keyword is used in an async function to pause the execution of the function until a Promise is fulfilled or rejected. 
            It can only be used inside an async function.</p>
        <p>When await is used before a Promise, it suspends the execution of the async function and waits for the Promise to settle. If the Promise is fulfilled, the value returned by the await expression is the fulfilled value of the Promise. If the Promise is rejected, an error is thrown.
<br />
The await keyword is often used in conjunction with asynchronous operations such as 
fetching data from an API, making network requests, or reading and writing files asynchronously.

</p>
          

        </div> {/** Block Ends */}
        
    </div>
  )
}
