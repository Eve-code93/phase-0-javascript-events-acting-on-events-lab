// Ensure there is a dodger element in your HTML:
// <div id="dodger" style="position: absolute; left: 180px;"></div>

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    // Get the current left position (removing 'px' and converting to a number)
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    // Only move left if we're not at the left edge of the screen
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    // Assuming a game width of 400px, prevent moving past 360px (as an example)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  