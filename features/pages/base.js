class Base {
  constructor(browser, url) {
    this.url = url;
    this.browser = browser;
  }

  async open() {
    this.page = await this.browser.newPage();
    await this.page.goto(this.url);
    // await this.page.waitFor(1000);
    return this;
  }

  async close() {
    return await this.page.close();
  }
}

export default Base;