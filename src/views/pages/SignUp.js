import { IcLogo } from '../../resources/assets/icons';

const SignUp = () =>{
  console.log(IcLogo);
  return `<section class="container">
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
          <input id="email-input" type="email" placeholder="Enter your email address"/>
          <label for="password-input" class="login__card-form-label login__card-form-label--pass">Password</label>
          <input id="password-input" type="password" placeholder="Enter your password"/>
          <button type="submit">CONTINUE</button>
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
  </section>`
}

export default SignUp;
