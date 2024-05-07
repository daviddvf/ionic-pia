import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor(private router: Router, private auth : AutenticacionFirebaseService) {}
  
  navlogin()
  {
    this.router.navigate(['/login']);
  }

  navEstadisticas()
  {
    this.router.navigate(['home/estadisticas']);
  }

  navstart(){
    this.router.navigate(['home/start']);
  }

  logout(){
    this.auth.onlogout();
    this.router.navigate(['/login']);
  }
}
