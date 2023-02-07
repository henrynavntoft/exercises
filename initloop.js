"use strict";
let i = 0;
let maxN = 20;
initLoop();

function initLoop() {
  loop();
}

function loop() {
  console.log(i);
  document.getElementById("demo").innerHTML = i;
  i++;
  if (i <= maxN) {
    setTimeout(loop, 200);
  }
}
