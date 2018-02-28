import puppeteer from 'puppeteer';

export default {
  create: async ()=> {
    const opts = {
      headless: false,
      // TODO: add the chromePath = 
    };

    return await puppeteer.launch(opts);
  }
};
