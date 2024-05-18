import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-coleccion-cartas',
  templateUrl: './coleccion-cartas.page.html',
  styleUrls: ['./coleccion-cartas.page.scss'],
})
export class ColeccionCartasPage implements OnInit {

  cartas: Array<Card> = new Array();
  constructor(private gameSvc: GameService) {
 
   }

  ngOnInit() {
    
    this.cartas = this.gameSvc.getCollectionCards(7);

    
   
  }
  playCard(cardIndex: any) {
    
    if(this.gameSvc.validCard(this.cartas[cardIndex])) {
      console.log("boton carta");
      this.gameSvc.setDeckCard(this.cartas[cardIndex]);
      this.cartas.splice(cardIndex, 1);
    }
    
  }


}



