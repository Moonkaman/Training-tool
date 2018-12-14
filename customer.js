const btns = document.querySelectorAll('.btn');
const bubble = document.querySelector('.talk-cont');
const chat = document.querySelector('.talk');
const chatTimer = document.querySelector('.timer');
const patienceMeter = document.querySelector('.patience-meter');
let canClick = true;
let btnClickTracker = [0, 0, 0, 0, 0];



btns[0].addEventListener('click', _ => {
  btnClickTracker[0]++;
  checkClicks(btnClickTracker[0]);
  chatBubble(customer.fullName(), formInputs[0], 10)
});
btns[1].addEventListener('click', _ => {
  btnClickTracker[1]++;
  checkClicks(btnClickTracker[1]);
  chatBubble(customer.phoneNumber, formInputs[7], 10)
});
btns[2].addEventListener('click', _ => {
  btnClickTracker[2]++;
  checkClicks(btnClickTracker[2]);
  chatBubble(customer.address, formInputs[6], 10)
});
btns[3].addEventListener('click', _ => {
  btnClickTracker[3]++;
  checkClicks(btnClickTracker[3]);
  chatBubble(customer.email, formInputs[5], 10)
});
btns[4].addEventListener('click', _ => {
  btnClickTracker[4]++;
  checkClicks(btnClickTracker[4]);
  chatBubble(customer.birthday(), formInputs[2], 10)
});

function chatBubble(text, focusW, delT) {
  if(canClick) {
    canClick = false;
    let seconds = delT;
    focusW.focus();
    chat.textContent = text;
    chatTimer.innerHTML = `<i class="fas fa-stopwatch"></i> ${seconds}`;
    const theTimer = window.setInterval(_ => {
      canClick = false;
      seconds--;
      chatTimer.innerHTML = `<i class="fas fa-stopwatch"></i> ${seconds}`;
      if(seconds === 0) {
        chatTimer.textContent = '';
        chat.textContent = '...';
        clearInterval(theTimer);
        canClick = true;
      }
    }, 1000);
  }
}

function checkClicks(clickNum) {
  if(canClick) {
    if(clickNum >= 2) {
      customer.patience--;
    }
    patienceMeter.style.width = `${(customer.patience / totalPat) * 100}%`
    if(customer.patience == 0) {
      alert('You lost the customer');
      window.location.reload();
    }
  }
}
