import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  protected playerItem = '';
  protected computerItem = '';
  private elements = new Array();
  protected winner = '';

  constructor() {
  }

  ngOnInit() {
    this.elements = ['rock', 'paper', 'scissors'];
  }

  startGame(event) {
    try {
      this.playerItem = event.target.id;
      this.computerItem = this.setComputerItem();
      this.winner = this.getWhoWon();
    }
    catch(error) {
      this.winner = 'Application initialisation failed';
    }
  }

  setComputerItem() {
    const randomKey = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomKey];
  }

  getWhoWon() {
    if (((this.playerItem === 'paper') && (this.computerItem === 'rock'))
      || ((this.playerItem === 'rock') && (this.computerItem === 'scissors'))
      || ((this.playerItem === 'scissors') && (this.computerItem === 'paper'))
    ) {
      return 'You won';
    }
    if (this.playerItem === this.computerItem) {
      return 'Results are matching, nobody won';
    }
    return 'The computer won';
  }
}
