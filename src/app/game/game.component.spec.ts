import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

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
    //expect(buttons.length.toEqual(3);
  }));

  it(`should have Computer Box with loading button`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content-computer h2').textContent).toContain('Computer');
    const span = compiled.querySelector('.content-computer span');
    //expect(span.length.toEqual(3);
  }));

  it(`should startGame called`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    spyOn(component, 'startGame');

    let button = compiled.querySelector(('.content-computer button.scissors');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.startGame).toHaveBeenCalled();
    });
  }));

  xit(`should you won if you selected scissors and computer has paper`, async(() => {
  }));

  xit(`should you won if you selected paper and computer has rock`, async(() => {
  }));

  xit(`should you won if you selected rock and computer has scissors`, async(() => {
  }));

  xit(`should have computer won if it has rock, and you selected scissors`, async(() => {
  }));

  xit(`should have computer won if it has paper, and you selected rock`, async(() => {
  }));

  xit(`should have computer won if it has scissors, and you selected paper`, async(() => {
  }));

  xit(`should nobody won, idf you and the computer selected same item`, async(() => {
  }));
});
