import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    public playerItem = '';
    public computerItem = '';
    private beatMap = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    public winner = '';

    constructor() {
    }

    ngOnInit() {
    }

    getItemKeys() {
        return Object.keys(this.beatMap);
    }

    startGame(item) {
        try {
            this.playerItem = item;
            this.computerItem = this.getRandomItem();
            this.winner = this.getWinner();
        }
        catch (error) {
            this.winner = 'Application initialisation failed';
        }
    }

    getRandomItem() {
        const keys = this.getItemKeys();
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return this.beatMap[randomKey];
    }

    getWinner() {
        if (this.beatMap[this.playerItem] === this.computerItem) {
            return 'You won';
        }
        if (this.playerItem === this.computerItem) {
            return 'Results are matching, nobody won';
        }
        return 'The computer won';
    }
}
