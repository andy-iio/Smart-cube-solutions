// Find the block-reveal element
const blockReveal = document.getElementById('blockReveal');

// Get the duration of the scaleDown animation
const Duration = 2000; // Adjust the duration to match your animation duration

// Calculate the total time including the animation duration and delay
const totalTime = Duration + 3030; // Adjust the delay to match your animation delay

// Set a timeout to redirect after the animation is complete
setTimeout(() => {
  window.location.href = 'home'; 
}, totalTime);
