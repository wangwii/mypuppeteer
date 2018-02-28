import Driver from './driver';
import Pages from '../pages/index';

const Cucumber = require('cucumber');
const { AfterAll, BeforeAll, setWorldConstructor, setDefaultTimeout } = Cucumber;

let browser;
BeforeAll(async function() {
  browser = await Driver.create();
});

AfterAll(async function(){
  await browser.close();
});

class World {
  constructor({attach, parameters}) {
    this.attach = attach
    this.parameters = parameters
  };

  async open(name) {
    const page = await Pages.create(name, browser);

    this.page = page;
    this.browser = browser;
  }

  async close() {
    await this.page.close();
  }
}

setWorldConstructor(World);
setDefaultTimeout(60 * 1000);
