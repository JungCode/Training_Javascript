import { IcLogo } from '../../resources/assets/icons';

const Login = () =>{
  console.log('Value:', IcLogo);
  return `<section class="container">
    <main class="login__container">
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
          <label for="email-input" class="login__card-label">Email address</label>
          <input id="email-input" type="email" placeholder="Enter your email address"/>
          <button type="submit">CONTINUE</button>
        </form>
        <div class="login__card-signout-container">
          <div class="login__card-signout-division">         
            <hr>
            or
            <hr>
          </div>
          <div class="login__card-signout-button">
            <p>Don't have an account?</p>
            <a href="">Sign up</a>
          </div>
        </div>
      </div>
    </main>
  </section>`
}

export default Login;
