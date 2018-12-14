const btns = document.querySelectorAll('.btn');
const bubble = document.querySelector('.talk-cont');
const chat = document.querySelector('.talk');
const chatTimer = document.querySelector('.timer');
let canClick = true;

btns[0].addEventListener('click', _ => chatBubble(customer.fullName(), 5));
btns[1].addEventListener('click', _ => chatBubble(customer.phoneNumber, 5));
btns[2].addEventListener('click', _ => chatBubble(customer.address, 10));
btns[3].addEventListener('click', _ => chatBubble(customer.email, 5));
btns[4].addEventListener('click', _ => chatBubble(customer.birthday(), 5));

function chatBubble(text, delT) {
  if(canClick) {
    let seconds = delT;
    chat.textContent = text;
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

