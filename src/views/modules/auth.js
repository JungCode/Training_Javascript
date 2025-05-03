export const addShowPasswordListener = (loginForm) => {
  const passwordInput = loginForm.querySelector('#password-input');
  const showPasswordBtn = loginForm.querySelector('#show-password-input');
  const icon = loginForm.querySelector('#icon')
  showPasswordBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if(passwordInput.type === 'password'){
      passwordInput.type = 'text';
      icon.classList.remove('ti-lock');
      icon.classList.add('ti-eye');
    }else{
      passwordInput.type = 'password';
      icon.classList.add('ti-lock');
      icon.classList.remove('ti-eye');
    }
  })
}