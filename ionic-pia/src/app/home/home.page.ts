import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
  userSubs: Subscription;

  email: any;

  constructor (
    private router: Router,
    private authSvc : AutenticacionFirebaseService,
    private navCtrl: NavController
  ) {  }

  ngOnInit() {
    this.userSubs = this.authSvc.usuario$.subscribe(user => {
      this.user = user;
      this.email = user.email;
    });
    console.log(this.user.email)
  }
  
  navlogin() {
    this.router.navigate(['/login']);
  }

  navEstadisticas() {
    this.navCtrl.navigateForward(`home/estadisticas/${this.email}`);
    //this.router.navigate(['home/estadisticas']);
  }

  navstart() {
    this.router.navigate(['home/start']);
  }

  logout() {
    this.authSvc.onlogout();
    this.router.navigate(['/login']);
  }
}
