import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { AbstractControl,  FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Usuario = new Usuario();
  ionicForm: any;

  constructor(
    private router: Router,
    private autSvc: AutenticacionFirebaseService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(10)]})
    });
  } 

  submitForm() {
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.onLogin();
    }
  } 

  async onLogin() {

    this.autSvc.onLogin(this.user).then((user:any)=> {

      if(user!=null && user.code ==undefined){
        this.router.navigate(['/home']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            this.openModal(user);
          }
        }
      }
    }).catch((error: any)=> {
      this.openModal(error);
    })

  }
  
  async openModal(user: any) {
    console.error(user);
  }

  onRegister(){
    this.router.navigate(['/register']);
  }

  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid &&
      this.ionicForm.controls[controlName].hasError(errorName) &&
      this.ionicForm.controls[controlName].touched;
  } 

 
 

}
