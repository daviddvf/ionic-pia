import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor( 
    private router: Router, 
    private auth: AutenticacionFirebaseService, 
    private actRoute: ActivatedRoute
  ) { }

  infoArray: any;
  email: any;
  
  ngOnInit() {
  
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
    })

    
  }
  ionViewDidEnter() {
    console.log(this.email);
    this.auth.bajaPuntuacion(this.email);
    this.infoArray = this.auth.getDocs();
  }
  navhome(){
    this.router.navigate(['/home']);
  }

}
