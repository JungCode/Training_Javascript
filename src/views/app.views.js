import { handleSPA, initRoute } from "./modules/routerConfig";
import Router from "../router/Router";

export default class AppView{
  constructor(){
    const root = document.querySelector('#root');
    this.routes = new Router();
    initRoute(this.routes);
    this.routes.changeRoute();

    handleSPA(this.routes);
  }
}
