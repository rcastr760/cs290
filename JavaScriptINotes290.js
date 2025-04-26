// Notes for Javascript I

// Typical Variable Declaration in JS

let age = 10.0; // let variable declaration used as float

age = ten;   //used as string , this can also potentially create a new variable if misspelled

const hour = 60.0; // const variable declaration used with string

// these are our "Golden Rules"
// use "let", "const" not "var" *RULE 1*
// use strict mode as 'use-strict';
// also to use strict mode in Node REPL
// node --use strict


//Types in JS

// values in JS have 6 types

//A number (int or float)
// Boolean value (true or false)
// special values (undefined & null)
// a string
// a symbol
// an object


// Numbers in JS

// for number values we can turn the value into a string and a string into a number
// parseFloat() and parseInt() allow for string conversion into a decimal/whole number or a integer
// toString() changes the value of a number on over to a string
// Math.trunc() discards the fractional part of a number
// Math.round() rounds the number up or down to the nearest integer
// also when letting system know something is not a number we can display is as NaN (0/0) is essentially NaN

// Objects, Arrays, JSON in Javascript

//Following example to be used to explain some concepts

const s1 = { company: 'Aramark', symbol: 'ARMRK', price: '28.5' }


//to create and update a property is using the . operator on the variable in an assignment statement

s1.price = 10 //sets the value of the 'price' property to 10 and if the property 'price' already existed the value will be updated.
// if property doesn't exist then it will be created

