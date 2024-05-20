import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { GameService } from 'src/app/services/game.service';
@Component({
  selector: 'app-coleccion-cartas',
  templateUrl: './coleccion-cartas.page.html',
  styleUrls: ['./coleccion-cartas.page.scss'],
})
export class ColeccionCartasPage implements OnInit {

  @Input() cards: Array<Card>;
  
  constructor(private gameSvc: GameService) { }
   

  ngOnInit() {

  }
  
  play(index:number) {
    this.gameSvc.play(index);
  }
}



