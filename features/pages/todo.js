import Base from './base';

const url = 'http://todomvc.com/examples/react/#/';

class Todo extends Base {
  constructor(browser) {
    super(browser, url);
  }
}

export default Todo;