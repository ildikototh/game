import { GamePage } from './app.po';

describe('game App', () => {
  let page: GamePage;

  var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  };

  beforeEach(() => {
    page = new GamePage();
    page.navigateTo();
  });

  it('should display message saying Stone-Scissor-Paper game', () => {
    expect(page.getParagraphText()).toEqual('Rock-Paper-Scissors game');
  });

  it('should display 3 buttons at player', () => {
    expect(page.getScissorButton().isDisplayed()).toBe(true);
    expect(page.getPaperButton().isDisplayed()).toBe(true);
    expect(page.getRockButton().isDisplayed()).toBe(true);
    expect(page.getAllPlayerButtonsCount()).toBe(3);

  });

  it('should display 1 span box at computer', () => {
    expect(page.getComputerSpan().isDisplayed()).toBe(true);
  });

});
