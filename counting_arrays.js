"use strict";
let count = 0;
let array = [];

function startCounting() {
  array.unshift(count);
  if (array.length > 9) {
    array.pop();
  }
  console.clear();
  console.log(array);
  count++;
  if (count < 50) {
    setTimeout(startCounting, 400);
  }
}

startCounting();
