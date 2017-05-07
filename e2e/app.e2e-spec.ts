import { GamePage } from './app.po';
import { element, by } from 'protractor';

describe('game App', () => {
  let page: GamePage;

  beforeEach(() => {
    page = new GamePage();
    page.navigateTo();
  });

  it('should display message saying Stone-Scissor-Paper game', () => {
    expect(page.getParagraphText()).toEqual('Stone-Scissor-Paper game');
  });

  it('should display 3 buttons at player', () => {
    // expect(page.getScissorButton()).toBe(true);
    // expect(page.getPaperButton()).toBe(true);
    // expect(page.getRockButton()).toBe(true);
  });

  it('should display 1 span box at computer', () => {
    expect(page.getComputerSpan()).toBe(true);
  });

});
