import Base from './base';

const url = 'https://www.google.com';

class GoogleSearch extends Base {
  constructor(browser) {
    super(browser, url);
  }

  searchFor(keyword) {
    console.log('do search for: [%s]', keyword);
  }
}

export default GoogleSearch;
