export default class AuthController {
  constructor(authView, authModel){
    this.view = authView;
    this.model = authModel;
    if(authView.bindLoginEvent){

    }else if(this.view.bindSignUpEvent){
      
    }
  }

}