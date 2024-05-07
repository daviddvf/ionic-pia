import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public puntuacion: number = 0;

  constructor(private auth: AutenticacionFirebaseService, private router: Router) { }

  ngOnInit() {
    
  }
  generarPuntuacion(){
    const minValue = 0;
    const maxValue = 1000;

    const randonNumber =Math.floor(Math.random() * (maxValue - minValue + 1 ) + minValue);

    this.puntuacion = randonNumber;

    this.auth.altaPuntuacion(this.puntuacion);
  }

  navHome(){
    this.router.navigate(['/home']);
  }
}
