import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister : any;

  user: Usuario = new Usuario();

  constructor(
    private autSvc: AutenticacionFirebaseService,
    private router: Router,
    
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  }
  onLogin(){
    
    this.router.navigate(["/login"]);
  }

  buildForm(){
    this.formRegister = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }

  submitForm(){
    if(this.formRegister.valid){
      this.user.email = this.formRegister.get('email').value;
      this.user.password = this.formRegister.get('password').value;
      this.onRegister();
    }
  }

  ionViewWillEnter(){
    this.formRegister.reset();
    console.log(this.autSvc.auth.currentUser?.email);
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.formRegister.controls[controlName].valid &&
			this.formRegister.controls[controlName].hasError(errorName) &&
			this.formRegister.controls[controlName].touched;
	}

}
