import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ICardGame } from '../utils/type';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {
  public cards: ICardGame[] = [];
  private counterShow: number = 0;
  public points: number = 0;
  public isStart: boolean = false;

  public handlerClick(): void {
    this.counterShow++;
    if (this.counterShow === 2) {
      const selectCards = this.cards.filter(
        (card: ICardGame) => !card.isSelect && card.isShow
      );
      if (selectCards[0].src !== selectCards[1].src) {
        setTimeout(() => {
          this.cards = this.cards.map((card: ICardGame) =>
            card.isSelect
              ? card
              : {
                ...card,
                isShow: false,
              }
          );
          this.counterShow = 0;
        }, 500);
      } else {
        this.counterShow = 0;
        this.points += 2;
        if (this.points === this.cards.length) {
          setTimeout(() => {
            this.routes.navigate(['/congratulation'])
          }, 500)
          this.points = 0;
          return;
        }
        this.cards = this.cards.map((card: ICardGame): ICardGame => {
          if (card.src === selectCards[0].src) {
            return { ...card, isSelect: true };
          } else {
            return card;
          }
        });
      }
    } else if (this.counterShow >= 3) {
      this.cards = this.cards.map((card: ICardGame) =>
        card.isSelect
          ? card
          : {
            ...card,
            isShow: false,
          }
      );
    }
    console.log(this.counterShow);
  }

  public handlerStart(): void {
    this.cards = [];
    this.isStart = true;
    this.points = 0;
    this.randomize();
    this.cards = this.cards.map((card: ICardGame) => ({
      ...card,
      isShow: true,
    }));

    setTimeout(() => {
      this.cards = this.cards.map((card: ICardGame) => ({
        ...card,
        isShow: false,
      }));
      this.isStart = false;
    }, 2000);
  }


  constructor(public routes: Router) { }

  ngOnInit(): void {
    this.randomize();
  }

  private randomize(): void {
    const random = (max: number): number => {
      return Math.floor(Math.random() * (max - 1));
    };

    const srcs: { src: string; quantity: number }[] = [
      { src: 'url(../../../assets/svg/bombsvg.svg)', quantity: 2 },
      { src: 'url(../../../assets/svg/clover.svg)', quantity: 2 },
      { src: 'url(../../../assets/svg/fish.svg)', quantity: 2 },
      { src: 'url("../../../assets/svg/bitesvg.svg")', quantity: 2 },
    ];

    let colorIndex: number;
    while (this.cards.length < 8) {
      colorIndex = random(5);

      if (srcs[colorIndex].quantity > 0) {
        this.cards.push({
          id: this.cards.length + 1,
          isSelect: false,
          isShow: false,
          src: srcs[colorIndex].src,
        });

        srcs[colorIndex].quantity--;
      }
    }
  }

}
