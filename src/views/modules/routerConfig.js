import AuthController from "../../controllers/auth.controller";
import AuthModel from "../../models/auth.model";
import LoginView from "../pages/LoginView";
import SignUpView from "../pages/SignUpView";

export const initRoute = (routes) => {
  const loginView = new LoginView();
  const signUpView = new SignUpView();

  routes.addRoute('/login', loginView.getView());
  routes.addRoute('/sign-up', signUpView.getView());

  new AuthController(loginView, new AuthModel());
  new AuthController(signUpView, new AuthModel());
}

export const handleSPA = (routes) => {
  const routesList = routes.getRoutes();
  for(const route of routesList){
    const anchors = route.component.querySelectorAll('a');
    for(const a of anchors){
      a.addEventListener('click', (e) =>{
        e.preventDefault();
        history.pushState({}, '', a.href);
        routes.changeRoute();
      })
    }
  }
}
