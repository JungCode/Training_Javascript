import { IcLogo } from '../../resources/assets/icons';
import { addShowPasswordListener } from '../modules/auth';

export default class LoginView{
  constructor(){
    this.view = this.renderView();
  }

  bindLoginEvent(loginHandler){
    const loginForm = this.view.querySelector('.login__card-form');
    addShowPasswordListener(loginForm);

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const submitBtn = loginForm.querySelector('#submit-btn');
      if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
        return;
      }
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
            <h1>Sign in to Chat-App</h1>
            <p>Welcome back! Please sign in to continue</p>
          </div>
          <form class="login__card-form">
            <div>
              <label for="email-input" class="login__card-form-label">Email address</label>
              <input name="email" id="email-input" type="email" placeholder="Enter your email address" required/>
              <span id="show-login-error-username" class="login__card-form-error">error</span>
            </div>
            <div class="login__card-form-password-container">
              <label for="password-input" class="login__card-form-label">Password</label>
              <input 
              name="password" 
              id="password-input" 
              type="password" 
              placeholder="Enter your password"   
              minLength="6"
              maxLength="20"
              required/>
              <button class="login__card-form-show-pass" id="show-password-input">
                <span class="ti-lock" id="icon"></span>
              </button>
              <span class="login__card-form-error">error</span>
            </div>
            <button id="submit-btn" class="login__card-form-submit" type="submit">CONTINUE</button>
          </form>
          <div class="login__card-signout-container">
            <div class="login__card-signout-division">         
              <hr>
              or
              <hr>
            </div>
            <div class="login__card-signout-button">
              <p>Don't have an account?</p>
              <a href="/sign-up">Sign up</a>
            </div>
          </div>
        </div>
      </main>
    </section>`;
    return wrapper.firstElementChild;
  }
} 
