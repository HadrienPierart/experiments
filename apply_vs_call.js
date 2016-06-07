// > A useful mnemonic is "A for array and C for comma."
// Call takes a list of parameters and Apply takes an Array
// Apply becomes handy when you dont know how many params you receive. Then you can use the array 'arguments'

// Apply
// =====

// Given the MDN documentation, apply's behavour of the given this will change if under strict env and if null or undefined is passed in

function nonStrictApply(){
  'use strict';
  return this.Infinity
}
nonStrictApply.apply();
// > Uncaught TypeError: Cannot read property 'Infinity' of undefined(…)

// Whereas this "works" :
function nonStrictApply(){
  return this.Infinity
}
nonStrictApply.apply();
// > Infinity
