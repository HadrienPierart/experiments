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
