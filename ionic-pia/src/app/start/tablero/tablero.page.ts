import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.page.html',
  styleUrls: ['./tablero.page.scss'],
})
export class TableroPage implements OnInit {
  @Input() discardCard: Card;
  
  constructor(private gameSvc: GameService) { }

  ngOnInit() {
   
  }

}
