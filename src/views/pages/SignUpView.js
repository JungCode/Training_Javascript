import { IcLogo } from '../../resources/assets/icons';

export default class SignUpView{
  constructor(){
    this.view = this.renderView();
    this.bindSignUpEvent();
  }

  bindSignUpEvent(){
    const submitBtn = this.view.querySelector('#submit-btn');
    const loginForm = this.view.querySelector('.login__card-form');
    submitBtn.addEventListener('click', (event)=>{
      event.preventDefault();
      const formData = new FormData(loginForm);
      const emailInput = formData.get('email');
      console.log(emailInput);
    });
  } 

  getView(){
    return this.view;
  }
  renderView(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML =
    `<section class="container">
      <main class="login__container fade-in" id="content">
        <div class="login__card">
          <div class="login__card-logo">
            <figure>
              <img src="${IcLogo}" alt="logo img" />          
            </figure>
          </div>
          <div class="login__card-header">
            <h1>Create your account</h1>
            <p>Welcome! Please fill in the details to get started.</p>
          </div>
          <form class="login__card-form">
            <label for="email-input" class="login__card-form-label">Email address</label>
            <input name="email" id="email-input" type="email" placeholder="Enter your email address" required/>
            <label for="password-input" class="login__card-form-label login__card-form-label--pass">Password</label>
            <input 
              name="password" 
              id="password-input" 
              type="password" 
              placeholder="Enter your password"   
              required
              minlength="8"
              maxlength="20"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+"
              title="Must contain at least one uppercase letter, one lowercase letter, and one number."/>
            <button id="submit-btn" type="submit">CONTINUE</button>
          </form>
          <div class="login__card-signout-container">
            <div class="login__card-signout-division">         
              <hr>
              or
              <hr>
            </div>
            <div class="login__card-signout-button">
              <p>Already have an account?</p>
              <a href="/login">Sign in</a>
            </div>
          </div>
        </div>
      </main>
    </section>`;
    return wrapper.firstElementChild;
  }
} 
