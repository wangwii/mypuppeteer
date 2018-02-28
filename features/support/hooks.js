const Cucumber = require('cucumber');
const { Given, When, Then, After, Before } = Cucumber;

After(async function() {
  return await this.close();
});
