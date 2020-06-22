/* IIFE OR Anonymous Functions
    IIFE --> Immediately Invocable Function
    Anonymous Function  --> IIFE is also caleed anonymous function as they dont have any name

    Syntax:
    (function(){console.log()}())

    1.These functions does not take any parameter .
    2.There is no way to call this function
    3.These functions will invoke by themselves on startup of file
    4.Used for one time only  -- > static block in java

    Use case: Like on page load if we want to call any url ,etc
*/

//without arrow functions
(function() { console.log('Hi I am JS') }())


//with arrow functions
(() => { console.log('Hello JS') })()