const btns = document.querySelectorAll('.btn');
const bubble = document.querySelector('.talk-cont');
const chat = document.querySelector('.talk');
const chatTimer = document.querySelector('.timer');
let canClick = true;

btns[0].addEventListener('click', _ => chatBubble());

function chatBubble() {
  if(canClick) {
    let seconds = 3;
    chat.textContent = customer.fullName();
    chatTimer.textContent = `:${seconds}`;
    const theTimer = window.setInterval(_ => {
      canClick = false;
      seconds--;
      chatTimer.textContent = `:${seconds}`;
      if(seconds === 0) {
        chatTimer.textContent = '';
        chat.textContent = '...';
        clearInterval(theTimer);
        canClick = true;
      }
    }, 1000);
  }
}

