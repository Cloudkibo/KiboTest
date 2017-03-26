var chai = require("Chai");
var Nightmare = require('nightmare');
var expect = chai.expect;

var should = chai.should();

describe('Authentication', function(){
  it("Agent can login to the web portal", function(){
    var nightmare = Nightmare();

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
      .evaluate(function(){
        return document.querySelector('#root > div > div > div.page-container > div.page-content-wrapper > div > h1');
      })
      .end()
      .then(function (result) {
        console.log(result)
        'dsad'.should().equal('Dashboard');
        done();
      })
  });
  it("Client can login for a new session");
});

describe('Chat Session', function(){
  it("Client should be able to send chat message");
  it("Client should be able to receive chat message");
  it("Agent should be able to send chat message");
  it("Agent should be able to receive chat message");
});
