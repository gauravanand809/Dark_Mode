chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'colorChange') {
      document.body.style.backgroundColor = message.color;
    } else if (message.type === 'textColorChange') {
      document.querySelectorAll('*').forEach((element) => {
        element.style.color = message.color;
      });
    }
  });
  