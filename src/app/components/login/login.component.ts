import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import eventService from 'src/app/event.service';
import { map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() login: Login = new Login();
  @Output() retorno = new EventEmitter<Login>();

  public roteador: Router;
  loginService: LoginService;
  token: any;
  router: any;

  constructor(loginService: LoginService,private router: Router, private  cookieService : CookieService) {
    this.loginService = loginService;
    this.roteador = router;
  }
  ngOnInit(): void {

    this.cookieService.deleteAll();
      

  }

  async logar() {
 

    if (!this.login.email || !this.login.senha) {
      alert('E-mail e senha são obrigatórios!');
      return;
    }

    // Call the loginService.fetch() method to authenticate the user
    (await this.loginService.fetch(this.login.email, this.login.senha)).subscribe( data => { 

      if ( data == Error) {

        alert("Usuario nao existe")
      } else {

        const logouObj = JSON.parse( JSON.stringify(data));
          let dpsElimino = this.token = logouObj.access_token;   
           console.log("token :" + dpsElimino);



        eventService.emit("usuario Logou" ,dpsElimino )
        
   

           this.cookieService.set("JWT", dpsElimino);
           this.router.navigate(['/account']);

      }
    
      
let teste = JSON.stringify(data);
      console.log(teste)})

    

  //   // Make a request to the sing-up back end to validate the login
  //   const isLoginValid = await this.loginService.validateLogin(loginResponse.email as string, loginResponse.senha as string);

  //   if (isLoginValid) {
  //     this.retorno.emit(loginResponse);
  //   } else {
  //     alert('Login ou senha incorretos!');
  //   }
  }
}
