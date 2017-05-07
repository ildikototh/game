import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public playerItem = '';
  public computerItem = '';
  private rock = 'rock';
  private scissors = 'scissors';
  private paper = 'paper';
  private elements = new Array();
  public winner = '';

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
    if (((this.playerItem === this.paper) && (this.computerItem === this.rock))
      || ((this.playerItem === this.rock ) && (this.computerItem === this.scissors))
      || ((this.playerItem === this.scissors) && (this.computerItem === this.paper))
    ) {
      return 'You won';
    }
    if (this.playerItem === this.computerItem) {
      return 'Results are matching, nobody won';
    }
    return 'The computer won';
  }
}
