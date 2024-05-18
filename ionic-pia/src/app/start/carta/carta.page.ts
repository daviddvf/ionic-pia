import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {
  @Input() number: string;
  @Input() color: string;
  constructor() {
    
   }
   ngOnInit() {

   }
   



}
