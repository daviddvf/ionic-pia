import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
 cards = ['0','1','2','3','4','5','6','7','8','9','+2','+4'];
 colors = ['red', 'green', 'yellow', 'blue'];
currentCard: Card = new Card();

private currentcardSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
currentCard$ = this.currentcardSubject.asObservable();
 
  constructor() { }

  getCollectionCards(count: number) :  Array<Card>{
    const playercards: Array<Card> = new Array();
    for (let i = 0; i < count; i++) {
      
      const card: Card = new Card();
      card.number = this.cards[this.getRandomCardIndex(this.cards.length)];
      card.color = this.colors[this.getRandomCardIndex(this.colors.length)];
      
      playercards.push(card);
  }
  return playercards;
  }

  setFirstCard() {
    this.currentCard = this.getRandomCard();
    this.currentcardSubject.next(this.currentCard);
  }

  setDeckCard(card: Card) {
    this.currentCard = card;
    this.currentcardSubject.next(card);
  }
  getRandomCard() : Card {
    const card: Card = new Card();
      card.number = this.cards[this.getRandomCardIndex(this.cards.length)];
      card.color = this.colors[this.getRandomCardIndex(this.colors.length)];

      return card;
  }
  getRandomCardIndex(arrayLength: number) {
    
    const randomIndex = Math.floor(Math.random() * arrayLength);
    return randomIndex;
  }

  validCard(playercard: Card, ):boolean {
    if(playercard.color == this.currentCard.color || playercard.number == this.currentCard.number) {
      return true;
    }
    else {
      return false;
    }
  }


}