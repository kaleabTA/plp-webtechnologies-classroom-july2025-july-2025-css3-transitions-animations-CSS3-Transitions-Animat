/* ===============================
   Part 2: Functions (scope, params, return)
   =============================== */

// Global variable (accessible everywhere)
let animationCount = 0;

// Function with parameters + return value
function calculateAnimationSpeed(baseSpeed, multiplier) {
  // Local variable only available in this function
  let result = baseSpeed * multiplier;
  return result;
}

// Example: reusing function
let fastSpeed = calculateAnimationSpeed(500, 2); 
console.log("Fast speed:", fastSpeed); // outputs 1000

/* ===============================
   Part 3: Combine JS + CSS
   =============================== */

const box = document.querySelector('.box');
const animateBtn = document.getElementById('animateBtn');
const togglePopupBtn = document.getElementById('togglePopupBtn');
const popup = document.getElementById('popup');

// Animate box when button is clicked
animateBtn.addEventListener('click', function() {
  box.classList.toggle('animate');
  animationCount++; // update global variable
  console.log("Box animation triggered:", animationCount, "times");
});

// Popup toggle function
function togglePopup() {
  if (popup.classList.contains('show')) {
    popup.classList.remove('show');
    popup.classList.add('hide');
  } else {
    popup.classList.remove('hide');
    popup.classList.add('show');
  }
}

togglePopupBtn.addEventListener('click', togglePopup);
