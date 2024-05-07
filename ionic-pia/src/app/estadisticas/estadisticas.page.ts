import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor( private router: Router, private auth: AutenticacionFirebaseService) { }
  infoArray: any;
  
  ngOnInit() {
    this.auth.bajaPuntuacion();
    this.infoArray = this.auth.getDocs();
  }
  navhome(){
    this.router.navigate(['/home']);
  }

}
