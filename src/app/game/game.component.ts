import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public playerItem = '';
  public computerItem = '';
  private beatMap = new Object();
  public winner = '';

  constructor() {
  }

  ngOnInit() {
    this.beatMap = {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock'
    };
  }

  getItemKeys() {
    return Object.keys(this.beatMap);
  }

  startGame(item) {
    try {
      this.playerItem = item;
      this.computerItem = this.setComputerItem();
      this.winner = this.getWhoWon();
    }
    catch (error) {
      this.winner = 'Application initialisation failed';
    }
  }

  setComputerItem() {
    const keys=this.getItemKeys();
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return this.beatMap[randomKey];
  }

  getWhoWon() {
    if (this.beatMap[this.playerItem] === this.computerItem) {
      return 'You won';
    }
    if (this.playerItem === this.computerItem) {
      return 'Results are matching, nobody won';
    }
    return 'The computer won';
  }
}
