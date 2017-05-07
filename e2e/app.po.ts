import { browser, element, by} from 'protractor';

export class GamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAllPlayerButtonsCount() {
    return element(by.css('.content-player button')).length;
  }

  getScissorButton() {
    return element(by.css(' .content-player button.scissors'));
  }

  getPaperButton() {
    return element(by.css('.content-player button.paper'));
  }

  getRockButton() {
    return element(by.css(' .content-player button.rock'));
  }

  getComputerSpan() {
    return element(by.css(' .content-computer span'));
  }
}
