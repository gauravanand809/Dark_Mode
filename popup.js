document.getElementById('red').addEventListener('input', updateColor);
document.getElementById('green').addEventListener('input', updateColor);
document.getElementById('blue').addEventListener('input', updateColor);

function updateColor() {
  const red = document.getElementById('red').value;
  const green = document.getElementById('green').value;
  const blue = document.getElementById('blue').value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'colorChange', color: `rgb(${red}, ${green}, ${blue})` });
  });
}

// Reset sliders to original values when popup is closed
window.addEventListener('beforeunload', () => {
  document.getElementById('red').value = 255;
  document.getElementById('green').value = 255;
  document.getElementById('blue').value = 255;
});

// Handle button click to set text color to black
document.getElementById('blackTextBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'textColorChange', color: 'black' });
  });
});
