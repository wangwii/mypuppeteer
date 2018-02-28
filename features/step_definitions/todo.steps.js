const Cucumber = require('cucumber');
const { Given, When, Then } = Cucumber;

Given("I have a todo {string}", function(todo) {
  // this.setTodo(todo);
  console.log('the todo: %s', todo);
  return 'pending';
});

When("I write the todo in the input field", async function() {
  // return await this.writeTodo();
  return await Promise.resolve('pending');
});

When("I click enter", async function() {
  // return await this.submit();
  return await Promise.resolve('pending');
});

Then("I expect to see the todo in the list", async function() {
  // return await this.checkTodoIsInList();
  return await Promise.resolve('pending');
});
