import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cpu-player',
  templateUrl: './cpu-player.page.html',
  styleUrls: ['./cpu-player.page.scss'],
})
export class CpuPlayerPage implements OnInit {
  nCards: number;
  cartas: Array<Card> = new Array();
  constructor(private gameSvc: GameService) {
 
   }

  ngOnInit() {
    
    this.cartas = this.gameSvc.getCollectionCards(7);
    this.nCards = this.cartas.length;
    console.log('cartas del cpu player');
    console.log(this.cartas);
   
  }
}
