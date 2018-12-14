const terminal = document.querySelector('.terminal');
const logBtn = document.querySelector('.log-btn');
const login = document.querySelector('.login');
const form = document.querySelector('.form');
const loginInputs = login.querySelectorAll('input');
const wrongPass = document.querySelector('.wrong-pass');

logBtn.addEventListener('click', _ => {
  if(loginInputs[0].value === '' && loginInputs[1].value === ''){
    login.style.display = 'none';
    form.style.display = 'block';
    terminal.style.display = 'block'
  } else {
    wrongPass.style.display = 'block';
  }
});

