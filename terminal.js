const terminal = document.querySelector('.terminal');
const logBtn = document.querySelector('.log-btn');
const login = document.querySelector('.login');
const theForm = document.querySelector('.form');
const loginInputs = login.querySelectorAll('input');
const wrongPass = document.querySelector('.wrong-pass');
const formInputs = theForm.querySelectorAll('input');
const formSubmit = theForm.querySelector('.form-submit-btn');
const checkout = terminal.querySelector('.payment-form');
const userH1 = document.querySelector('.customer h1');
const checkoutH3s = checkout.querySelectorAll('h3');
const checkoutInput = checkout.querySelector('input');



logBtn.addEventListener('click', _ => {
  if(loginInputs[0].value === '' && loginInputs[1].value === ''){
    userH1.textContent = username;
    login.style.display = 'none';
    theForm.style.display = 'block';
    timer();
    //terminal.style.display = 'block'
  } else {
    wrongPass.style.display = 'block';
  }
});

login.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    if(loginInputs[0].value === 'admin' && loginInputs[1].value === 'password'){
      userH1.textContent = username;
      login.style.display = 'none';
      theForm.style.display = 'block';
      timer();
      //terminal.style.display = 'block'
    } else {
      wrongPass.style.display = 'block';
    }
  }
});

theForm.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    checkAll();
  }

  if(event.key === '~') {
    formInputs[0].value = customer.firstName;
    formInputs[1].value = customer.lastName;
    formInputs[2].value = monthToNum(customer.birthMonth);
    formInputs[3].value = customer.birthDay;
    formInputs[4].value = customer.birthYear;
    formInputs[5].value = customer.email;
    formInputs[6].value = customer.address;
    formInputs[7].value = customer.phoneNumber.slice(0,3);
    formInputs[8].value = customer.phoneNumber.slice(3,6);
    formInputs[9].value = customer.phoneNumber.slice(6,10);
  }
});

formSubmit.addEventListener('click', _ => checkAll());

function timer() {
  let theTimer = document.querySelector('.timer-cont h3');
  let digit1 = 0;
  let digit2 = 0;
  let digit3 = 0;
  let digit4 = 1;

  theTimer.innerHTML = `<i class="fas fa-clock"></i> ${digit1}${digit2}:${digit3}${digit4}`;
  
  setInterval(_ => {
    theTimer.innerHTML = `<i class="fas fa-clock"></i> ${digit1}${digit2}:${digit3}${digit4}`;
    if(digit4 < 9) {
      digit4 += 1;
    } else {
      digit3 += 1;
      digit4 = 0;
    }

    if(digit3 < 6) {
    } else {
      digit2 += 1;
      digit3 = 0;
    }

    if(digit2 < 9) {
    } else {
      digit1 += 1;
      digit2 = 0;
    }

    if(digit2 % 3 == 0 && digit3 == 0 && digit4 == 0){
      customer.patience--;
      patienceMeter.style.width = `${(customer.patience / totalPat) * 100}%`
      if(customer.patience == 0) {
        alert('You lost the customer');
        window.location.reload();
      }
    }
  }, 1000);  
}

function monthToNum(month) {
  switch(month) {
    case months[0]:
      return 1;
    break;

    case months[1]:
      return 2;
    break;

    case months[2]:
      return 3;
    break;

    case months[3]:
      return 4;
    break;

    case months[4]:
      return 5;
    break;

    case months[5]:
      return 6;
    break;

    case months[6]:
      return 7;
    break;

    case months[7]:
      return 8;
    break;

    case months[8]:
      return 9;
    break;

    case months[9]:
      return 10;
    break;

    case months[10]:
      return 11;
    break;

    case months[11]:
      return 12;
    break;
  }
}

function checkAll() {
  checkAns(formInputs[0].value.trim() === customer.firstName, formInputs[0]);
  checkAns(formInputs[1].value.trim() === customer.lastName, formInputs[1]);
  checkAns(formInputs[2].value == monthToNum(customer.birthMonth), formInputs[2]);
  checkAns(formInputs[3].value == customer.birthDay, formInputs[3]);
  checkAns(formInputs[4].value == customer.birthYear, formInputs[4]);
  checkAns(formInputs[5].value.trim() == customer.email, formInputs[5]);
  checkAns(formInputs[6].value.trim() == customer.address, formInputs[6]);
  checkAns(formInputs[7].value == customer.phoneNumber.slice(0,3), formInputs[7]);
  checkAns(formInputs[8].value == customer.phoneNumber.slice(3,6), formInputs[8]);
  checkAns(formInputs[9].value == customer.phoneNumber.slice(6,10), formInputs[9]);
  canMoveOn();
}

function checkAns(Expr, elem) {
  if(Expr) {
    elem.style.color = '#2ecc71';
    elem.style.boxShadow = '0px 0px 5px #2ecc71';
  } else {
    elem.style.color = '#e74c3c';
    elem.style.boxShadow = '0px 0px 5px #e74c3c';
  }
}

function canMoveOn() {
  let right = 0;
  formInputs.forEach( item => {
    if(item.style.color == 'rgb(46, 204, 113)') {
      right += 1;
    }
  });
  if(right == formInputs.length) {
    formSubmit.textContent = 'Next';
    formSubmit.addEventListener('click', _ => {
      theForm.style.display = 'none';
      checkout.style.display = 'block';
      checkoutH3s[2].textContent = `Total before sale & tax: $${customer.buy.beforePrice}`;
      checkoutH3s[0].textContent = `Type: ${customer.buy.type}`;
      checkoutH3s[1].textContent = `Sale: ${customer.buy.sale}%`;
    });
  }
}

checkoutInput.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    checkAns(checkoutInput.value == customer.buy.price, checkoutInput);
  }

  if(checkoutInput.value == customer.buy.price){
    const theTimer = document.querySelector('.timer-cont h3');
    alert(`Congratulations you made the sale in ${theTimer.textContent[1]}${theTimer.textContent[2]} Minutes and ${theTimer.textContent[4]}${theTimer.textContent[5]} Seconds, click ok to get a new customer`)
    window.location.reload();
  }
})