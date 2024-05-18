import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { Card } from '../interfaces/card';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public puntuacion: number = 0;

  currentCard: Card = new Card();

  playercartas: Array<Card> = new Array();

  cpuPlayernCards: number;
  cpuplayercartas: Array<Card> = new Array();

  constructor(
    private auth: AutenticacionFirebaseService, 
    private router: Router, 
    private gameSvc: GameService
  ) { }

  ngOnInit() {
    this.playercartas = this.gameSvc.getCollectionCards(7);

    this.cpuplayercartas = this.gameSvc.getCollectionCards(7);
    this.cpuPlayernCards = this. cpuplayercartas.length;

    this.currentCard = this.gameSvc.getRandomCard();
  }

  startGameLoop() {

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
