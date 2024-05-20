import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
 cards = ['0','1','2','3','4','5','6','7','8','9','+2','+4'];
 colors = ['red', 'green', 'yellow', 'blue'];

 discardCard: Card = new Card();

 playercartas: Array<Card> = new Array();

 cpuPlayernCards: number;
 cpuplayercartas: Array<Card> = new Array();

private discardSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
currentCard$ = this.discardSubject.asObservable();

private playerCardsSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
playerCards$ = this.playerCardsSubject.asObservable();

private cpuCardsSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
cpuCards$ = this.cpuCardsSubject.asObservable();

private cpunCardsSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
cpunCards$ = this.cpunCardsSubject.asObservable();
 
  constructor() { }

  buildPlayerHand() {
    this.playercartas = this.getCollectionCards(7);
    this.playerCardsSubject.next(this.playercartas);
  }

  buildCpuPlayerHand() {
    this.cpuplayercartas = this.getCollectionCards(7);
    this.cpuCardsSubject.next(this.cpuplayercartas);

    this.cpuPlayernCards = this.cpuplayercartas.length;
    this.cpunCardsSubject.next(this.cpuPlayernCards);
  }

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
    this.discardCard = this.getRandomCard();
    this.discardSubject.next(this.discardCard);
  }

  play(index: number): boolean {
    if(this.puedeBajarCarta(this.playercartas)) {

      if(this.validCard(this.playercartas[index])) {
          this.discardCard = this.playercartas[index];
          this.discardSubject.next(this.discardCard);
  
          this.playercartas.splice(index,1);
          this.playerCardsSubject.next(this.playercartas);

        }
      else {
        return false;
      }
    }
    else {
      this.playercartas.push(this.getRandomCard());
      this.playerCardsSubject.next(this.playercartas);
      
    }

    if(this.puedeBajarCarta(this.cpuplayercartas)) {
      const cpuCards: Array<Card> = this.cartasValidas(this.cpuplayercartas, this.discardCard) ;
      const cpuCardIndex = this.getRandomCardIndex(cpuCards.length);
      const cpuindex = this.cpuplayercartas.indexOf(cpuCards[cpuCardIndex]);

      if(this.validCard(this.cpuplayercartas[cpuindex])) {
          this.discardCard = this.cpuplayercartas[cpuindex];
          this.discardSubject.next(this.discardCard);
  
          this.cpuplayercartas.splice(cpuindex,1);
          this.cpuCardsSubject.next(this.cpuplayercartas);

          this.cpuPlayernCards = this.cpuplayercartas.length;
          this.cpunCardsSubject.next(this.cpuPlayernCards);
        }
      return true;
    }
    else {
      this.cpuplayercartas.push(this.getRandomCard());
      this.cpuCardsSubject.next(this.cpuplayercartas);
      return true;
    }

    
  }
 
  getRandomCard() : Card {
    const card: Card = new Card();
      card.number = this.cards[this.getRandomCardIndex(this.cards.length)];
      card.color = this.colors[this.getRandomCardIndex(this.colors.length)];

      return card;
  }

  getRandomCardIndex(arrayLength: number): number {
    
    const randomIndex = Math.floor(Math.random() * arrayLength);
    return randomIndex;
  }

  puedeBajarCarta(cartas: Array<Card>): boolean {
    let flag: Boolean = false;
    console.log(this.discardCard.number);
    cartas.forEach(carta => {
      if(carta.number == this.discardCard.number || carta.color == this.discardCard.color) {
        flag = true;
      }
    })
    if(flag) {
      return true;
    }
    else {
      return false;
    }
  }
  cartasValidas(cards: Array<Card>, discard: Card ): Array<Card> {
    const arrayCards: Array<Card> = new Array();
    cards.forEach((card) => {
      if(card.number == discard.number || card.color == discard.color ) {
        arrayCards.push(card);
      }
    })

    return arrayCards;
  }

  validCard(playercard: Card, ):boolean {
    if(playercard.color == this.discardCard.color || playercard.number == this.discardCard.number) {
      return true;
    }
    else {
      return false;
    }
  }


}