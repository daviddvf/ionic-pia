import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cpu-player',
  templateUrl: './cpu-player.page.html',
  styleUrls: ['./cpu-player.page.scss'],
})
export class CpuPlayerPage implements OnInit {
  @Input() nCards: number;

  constructor(private gameSvc: GameService) { }

  ngOnInit() {
    
    
   
  }
}
