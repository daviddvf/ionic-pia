import { Component, OnInit } from '@angular/core';
import { AutenticacionFirebaseService } from '../services/autenticacion-firebase.service';
import { Router } from '@angular/router';
import { Card } from '../interfaces/card';
import { GameService } from '../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public puntuacion: number = 0;

  discardCard: Card = new Card();
  discardCardSubs: Subscription;

  playercartas: Array<Card> = new Array();
  playercartasSubs: Subscription;

  cpuPlayernCards: number;
  cpuplayerNcartasSubs: Subscription;

  cpuplayercartas: Array<Card> = new Array();
  cpuplayercartasSubs: Subscription;

  constructor(
    private auth: AutenticacionFirebaseService, 
    private router: Router, 
    private gameSvc: GameService
  ) { }

  ngOnInit() {
    this.gameSvc.buildPlayerHand();
    this.gameSvc.buildCpuPlayerHand();
    this.gameSvc.setFirstCard();

    this.discardCardSubs = this.gameSvc.currentCard$.subscribe(card => {
      this.discardCard = card;
    })

    this.playercartasSubs = this.gameSvc.playerCards$.subscribe(cards => {
      this.playercartas = cards;
    })

    this.cpuplayercartasSubs = this.gameSvc.cpuCards$.subscribe(cards => {
      this.cpuplayercartas = cards;
    })

    this.cpuplayerNcartasSubs = this.gameSvc.cpunCards$.subscribe(n => {
      this.cpuPlayernCards = n;
    })



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
