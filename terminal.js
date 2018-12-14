const terminal = document.querySelector('.terminal');
const logBtn = document.querySelector('.log-btn');
const login = document.querySelector('.login');
const theForm = document.querySelector('.form');
const loginInputs = login.querySelectorAll('input');
const wrongPass = document.querySelector('.wrong-pass');
const formInputs = theForm.querySelectorAll('input');

logBtn.addEventListener('click', _ => {
  if(loginInputs[0].value === '' && loginInputs[1].value === ''){
    login.style.display = 'none';
    theForm.style.display = 'block';
    terminal.style.display = 'block'
  } else {
    wrongPass.style.display = 'block';
  }
});

terminal.addEventListener('keypress', event => {
  if(event.key === 'Enter') {
    checkAns(formInputs[0].value === customer.firstName, formInputs[0]);
    checkAns(formInputs[1].value === customer.lastName, formInputs[1]);
    checkAns(formInputs[2].value == monthToNum(customer.birthMonth), formInputs[2]);
    checkAns(formInputs[3].value == customer.birthDay, formInputs[3]);
    checkAns(formInputs[4].value == customer.birthYear, formInputs[4]);
    checkAns(formInputs[5].value == customer.address, formInputs[5]);
    checkAns(formInputs[6].value == customer.phoneNumber.slice(0,3), formInputs[6]);
    checkAns(formInputs[7].value == customer.phoneNumber.slice(3,6), formInputs[7]);
    checkAns(formInputs[8].value == customer.phoneNumber.slice(6,10), formInputs[8]);
  }
});

console.log(customer.phoneNumber.slice(0,3));

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

function checkAns(Expr, elem) {
  if(Expr) {
    elem.style.color = '#2ecc71';
    elem.style.boxShadow = '0px 0px 5px #2ecc71';
  } else {
    elem.style.color = '#e74c3c';
    elem.style.boxShadow = '0px 0px 5px #e74c3c';
  }
}