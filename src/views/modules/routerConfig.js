import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const initRoute = (route) => {
  route.addRoute('/login', Login());
  route.addRoute('/sign-up', SignUp());

}

export const handleSPA = (route) => {
  const content = document.querySelector('#content');
  const allAnchor = document.querySelectorAll('a');
  allAnchor.forEach((a) => {
    a.addEventListener('click', (event)=>{
      event.preventDefault();
      content.classList.remove('fade-in');
      history.pushState({}, '', a.href);
      route.changeRoute();
    });
  });
}
