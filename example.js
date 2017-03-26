var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true, maximizable: true});

nightmare
  .goto('https://kiboengage.kibosupport.com/')
  .wait('#root > div > div > div.pre-header > div > div > div.col-md-6.col-sm-6.additional-nav > ul > li:nth-child(1) > a')
  .click('#root > div > div > div.pre-header > div > div > div.col-md-6.col-sm-6.additional-nav > ul > li:nth-child(1) > a')
  .wait('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > div:nth-child(1) > input')
  .type('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > div:nth-child(1) > input', 'cloudkibo')
  .wait('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > div:nth-child(2) > input')
  .type('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > div:nth-child(2) > input', 'jekram@hotmail.com')
  .wait('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > div:nth-child(3) > input')
  .type('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > div:nth-child(3) > input', 'jawaid')
  .wait('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > button')
  .click('#root > div > div > div > div.mainBody > div > div.col-md-9.col-sm-9 > div > div > div > form > button')
  .wait('#root > div > div > div.page-container > div.page-content-wrapper > div > h1')
  .wait(5000)
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
