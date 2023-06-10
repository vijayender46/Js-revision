import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';

export default function Day2() {
    const showLineNumbers = Boolean('showLineNumbers', true);

    //  const fetchData = async() => {
    //     let data = ß('https://jsonplaceholder.typicode.com/todos/1')
    //     return data;
    //  }

    //  fetchData().then(data => console.log(data));

  return (
    <div className='dayBlock'>
        <h1>Day 2: </h1>

        <div className='block'>
            <h2>1) What is Async in javascript?</h2>
            <p>An asynchronous function is a function that operates asynchronously, allowing the program to continue its execution while waiting for an asynchronous operation to complete.</p>
            <p>When a function is marked as async, it automatically returns a Promise. This Promise will be resolved with the value returned by the function, 
                or rejected with an error thrown within the function. <br />
                The async keyword can be used in front of a function declaration or function expression. It enables the use of the await keyword inside the function body to pause the execution and wait for Promises to settle.

            </p>        

            <CodeBlock
                text={`
                const asyncEg = async() => {
                    let data = 'some data';
                    return data;
                }
            
                asyncEg().then(data => alert(data));
                console.log(asyncEg());

                //output 'some data'
                `}
                theme={dracula}
                showLineNumbers={showLineNumbers}
            />

        </div> {/** Block Ends */}

        <div className='block'>
            <h2>1) What is Await in javascript?</h2>
            <p>await keyword is used in an async function to pause the execution of the function until a 
                Promise is fulfilled or rejected. 
                It can only be used inside an async function.</p>
            <p>When await is used before a Promise, it suspends the execution of the async function and 
                waits for the Promise to settle. If the Promise is fulfilled, the value returned by the 
                await expression is the fulfilled value of the Promise. If the Promise is rejected, an error 
                is thrown.
            <br />
            The await keyword is often used in conjunction with asynchronous operations such as 
            fetching data from an API, making network requests, or reading and writing files asynchronously.
            
            </p>        

            <CodeBlock
                text={`
                const getData = async() => {
                    let y = await "Sample Data";
                    console.log(y);
                }
                 
                console.log(1);
                getData();
                console.log(2);

                //output 
                1
                2
                Sample Data
                `}
                theme={dracula}
                showLineNumbers={showLineNumbers}
            />

        </div> {/** Block Ends */}


    </div>
  )
}
