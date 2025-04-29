export default class Router {
  constructor() {
    this.routes = [];
    this.currRoute = null;
  }

  addRoute(pathName, component) {
    this.routes.push({ pathName, component });
  }

  changeRoute(){
    const currPathName = window.location.pathname;
    if(currPathName === '/'){
      window.location.href = '/login';
    }
    const route = this.routes.find((eachRoute)=> currPathName == eachRoute.pathName)
    if(route){
      const { component } = route;
      const container = document.querySelector('#container')
      if(typeof component === 'string'){
        container.innerHTML = component;
      }else{
        container.innerHTML = '';
        if(component){
          container.append(component)
        }
      }
    }
  }
}
