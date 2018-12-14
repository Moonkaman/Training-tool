const terminal = document.querySelector('.terminal');
const logBtn = document.querySelector('.log-btn');
const login = document.querySelector('.login');
const theForm = document.querySelector('.form');
const loginInputs = login.querySelectorAll('input');
const wrongPass = document.querySelector('.wrong-pass');
const formInputs = theForm.querySelectorAll('input');
const formSubmit = theForm.querySelector('.form-submit-btn');
const paymentForm = terminal.querySelector('.payment-form');

logBtn.addEventListener('click', _ => {
  if(loginInputs[0].value === '' && loginInputs[1].value === ''){
    login.style.display = 'none';
    theForm.style.display = 'block';
    //terminal.style.display = 'block'
  } else {
    wrongPass.style.display = 'block';
  }
});

login.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    if(loginInputs[0].value === 'admin' && loginInputs[1].value === 'password'){
      login.style.display = 'none';
      theForm.style.display = 'block';
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
});

formSubmit.addEventListener('click', _ => checkAll());

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
      paymentForm.style.display = 'flex';
    });
  }
}