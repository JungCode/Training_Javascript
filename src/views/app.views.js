import { initRoute } from "./modules/routerConfig";
import Router from "../router/Router";
class AppView{
  constructor(){
    const root = document.querySelector('#root');
    this.route = new Router();
    initRoute(this.route);
    this.route.changeRoute();
  }
}

export default AppView