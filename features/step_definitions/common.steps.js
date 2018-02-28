const Cucumber = require('cucumber');
const { Given, When, Then } = Cucumber;

Given("I am on the {string} page", async function(page) {
  return await this.open(page);
});
