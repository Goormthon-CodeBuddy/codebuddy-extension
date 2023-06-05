// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//     if (msg.color) {
//       console.log("Receive color = " + msg.color);
//       document.body.style.backgroundColor = msg.color;
//       sendResponse("Change color to " + msg.color);
//     } else {
//       sendResponse("Color message is none.");
//     }
//   });

const imageIds = ['test2', 'test4'];

const loadButton = document.createElement('input');
loadButton.innerText = 'Load images';
loadButton.addEventListener('click', handleLoadRequest);
console.log('buddy extension is loaded');

if (document) document.querySelector('body')?.prepend(loadButton);

function handleLoadRequest() {
  for (const id of imageIds) {
    const element = document.getElementById(id) as HTMLImageElement;
    if (element) element.src = chrome.runtime.getURL(`${id}.png`);
  }
}