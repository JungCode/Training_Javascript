export const initRoute = (routes) => {

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
