const Cucumber = require('cucumber');
const { Given, When, Then } = Cucumber;

When("I search for {string}", function(keyword) {
  return this.page.searchFor(keyword);
});

Then("I see results", function() {
  return 'pending';
});
