import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';

describe('GameComponent', () => {
    let component:GameComponent;
    let fixture:ComponentFixture<GameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [GameComponent]
            })
            .compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create the game component', () => {
        expect(component).toBeTruthy();
    });

    it(`should have Player Box with three buttons`, async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.content-player h2').textContent).toContain('Player');
        const buttons = compiled.querySelectorAll('.content-player button');
        expect(buttons.length).toBe(3);

    }));

    it(`should have Computer Box with loading span`, async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.content-computer h2').textContent).toContain('Computer');
        const span = compiled.querySelectorAll('.content-computer span.computer');
        expect(span.length).toBe(1);
    }));

    it(`should startGame called`, async(() => {
        const startGameSpy = spyOn(component, 'startGame');
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        compiled.querySelectorAll('.content-player button.scissors')[0].click();
        fixture.whenStable().then(() => {
            expect(startGameSpy).toHaveBeenCalled();
        });
    }));

    it(`should return keys of the beatMap object `, async(() => {
        const compiled = fixture.debugElement.nativeElement;
        compiled.querySelectorAll('.content-player button.scissors')[0].click();
        const beatMap = {
            rock: 'scissors',
            scissors: 'paper',
            paper: 'rock'
        };
        expect(component.getItemKeys()).toEqual(Object.keys(beatMap));
    });

    it(`should you won if you selected scissors and computer has paper`, async(() => {
        component.playerItem = 'scissors';
        component.computerItem = 'paper';
        expect(component.getWinner()).toEqual('You won');
    }));

    it(`should you won if you selected paper and computer has rock`, async(() => {
        component.playerItem = 'paper';
        component.computerItem = 'rock';
        expect(component.getWinner()).toEqual('You won');
    }));

    it(`should you won if you selected rock and computer has scissors`, async(() => {
        component.playerItem = 'rock';
        component.computerItem = 'scissors';
        expect(component.getWinner()).toEqual('You won');
    }));

    it(`should have computer won if it has rock, and you selected scissors`, async(() => {
        component.playerItem = 'scissors';
        component.computerItem = 'rock';
        expect(component.getWinner()).toEqual('The computer won');
    }));

    it(`should have computer won if it has paper, and you selected rock`, async(() => {
        component.playerItem = 'rock';
        component.computerItem = 'paper';
        expect(component.getWinner()).toEqual('The computer won');
    }));

    it(`should have computer won if it has scissors, and you selected paper`, async(() => {
        component.playerItem = 'paper';
        component.computerItem = 'scissors';
        expect(component.getWinner()).toEqual('The computer won');
    }));

    it(`should nobody won, if you and the computer selected same item`, async(() => {
        component.playerItem = 'scissors';
        component.computerItem = 'scissors';
        expect(component.getWinner()).toEqual('Results are matching, nobody won');
    }));
});
