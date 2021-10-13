const typedTextSpan = document.querySelector(".typedText");
const cursorSpan = document.querySelector(".cursor");

const textArr = ["a student", "a military interpreter", "a developer", "Shawn Lee"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

let textArrIndex = 0;
let charIndex = 0;

function type(){
  if(charIndex < textArr[textArrIndex].length){ //If not done typing
    if(!cursorSpan.classList.contains("noblink")) cursorSpan.classList.add("noblink"); // Prevent blink while typing or erasing
    typedTextSpan.textContent += textArr[textArrIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else{ // If done typing
    cursorSpan.classList.remove("noblink"); // Start cursor blink
    setTimeout(erase, newTextDelay);
  }
}

function erase(){
  if(charIndex > 0){ // If not done erasing
    if(!cursorSpan.classList.contains("noblink")) cursorSpan.classList.add("noblink"); // Prevent blink while typing or erasing
    typedTextSpan.textContent = textArr[textArrIndex].substring(0, charIndex-1); // Reduce typed text length by 1
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else{ // If done erasing
    cursorSpan.classList.remove("noblink"); // Start cursor blink
    textArrIndex++;
    if(textArrIndex >= textArr.length){ //Loop back to first text in array
      textArrIndex = 0;
    }
    setTimeout(type, typingDelay + 1000);
  }
}

window.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(type, newTextDelay);
});