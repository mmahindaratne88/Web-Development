function pushBox() {
  const stackContainer = document.getElementById('stack-container');
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  const currentBoxes = document.querySelectorAll('.box');
  newBox.textContent = currentBoxes.length + 1;
  stackContainer.prepend(newBox);
}

function popBox() {
  const stackContainer = document.getElementById('stack-container');
  const currentBoxes = document.querySelectorAll('.box');
  if (currentBoxes.length > 0) {
    stackContainer.removeChild(stackContainer.firstChild);
  }
}
