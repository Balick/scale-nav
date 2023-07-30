// import the css file
import './style.css'

// Retrieve the DOM elements from their IDs
const navElement = document.getElementById("nav");
const navButton = document.getElementById("button");
const scaleElement = document.getElementById("scale-element");
const navigation = document.getElementById("navigation");

// Destructure the children of the navButton
// The first element is hidden, so we use the _ to ignore it
const [_, line1, line2, line3] = [...navButton.children];

// Add an event listener to the navButton
// it will be triggered when the user clicks on it
navButton.addEventListener('click', function(event) {
    // Toggle the classes of the elements
    navElement.classList.toggle('hidden');
    scaleElement.classList.toggle('scale');
    navigation.classList.toggle('text-white');
    line1.classList.toggle('reduce-line1');
    line1.classList.toggle('change-bg-line');
    line2.classList.toggle('suppress-line2');
    line2.classList.toggle('change-bg-line');
    line3.classList.toggle('reduce-line3');
    line3.classList.toggle('change-bg-line');
})