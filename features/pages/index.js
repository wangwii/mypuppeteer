import _ from 'lodash';
import requires from 'require-glob';

const excludes = ['index', 'base'];
const files = requires.sync(`${__dirname}/*.js`);
const pages = _.reduce(files, (ret, module, name)=> {
  return _.includes(excludes, name)
    ? ret
    : Object.assign(ret, { [module.default.name]: module.default });
}, {});

export default {
  create: (name, browser)=> {
    return new pages[name](browser).open();
  }
}