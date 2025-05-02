import { IcLogo } from '../../resources/assets/icons';

export default class LoginView{
  constructor(){
    this.view = this.renderView();
    this.bindLoginEvent();
  }

  bindLoginEvent(){
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
            <h1>Sign in to Chat-App</h1>
            <p>Welcome back! Please sign in to continue</p>
          </div>
          <form class="login__card-form">
            <label for="email-input" class="login__card-form-label">Email address</label>
            <input name="email" id="email-input" type="email" placeholder="Enter your email address" required/>
            <button id="submit-btn" type="submit">CONTINUE</button>
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
