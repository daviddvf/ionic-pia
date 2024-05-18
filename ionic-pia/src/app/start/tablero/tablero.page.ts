import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.page.html',
  styleUrls: ['./tablero.page.scss'],
})
export class TableroPage implements OnInit {

  currentCard: Card = new Card();

  constructor(private gameSvc: GameService) { }

  ngOnInit() {
    this.gameSvc.setFirstCard();
    this.gameSvc.currentCard$.subscribe(card => {
      this.currentCard = card;
    })
    
  }

}
