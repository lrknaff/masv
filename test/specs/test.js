var assert = require('assert');
const webdriver = require('selenium-webdriver');
const webdriverio = require('webdriverio');
const test      = require('selenium-webdriver/testing');
var $ = require('jquery');


describe('masv homepage', function() {
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'MASV');
    });

    it('should have a white background', function () {
      browser.url('/');

      var background = browser.element('.backgrounds-hphero');
      var color = background.getCssProperty('background-color').parsed.hex;

      console.log(color)

      assert.equal(color, '#ffffff');
    });

    it('should have a masthead', function () {

    });

    it('should have a subhead', function () {

    });

    it('should have a nav', function () {

    });

    it('should have a black logo', function() {

    });

    it('should hide the nave and scroll when the user scrolls past 50px', function () {

    });
});

describe('masv navigation', function() {
    it('should have 3 links', function () {

    });

    it('should scroll to the about section when the user clicks about', function () {

    });

    it('should scroll to the services section when the user clicks services', function () {

    });

    it('should scroll to the contact section when the user clicks contact', function() {

    });

    it('should disapear when the use scrolls past 50px', function () {

    });
});

describe('masv about page', function() {
    it('should have a background with a pattern', function () {

    });

    it('should have and about us section', function () {

    });

    it('should have 3 services', function () {

    });

    it('should not show the nav or scroll', function () {

    });

    it('should have a white logo', function() {

    });
});

describe('masv projects page', function() {
    it('should have a white background', function () {

    });

    it('should display 4 projects', function () {

    });

    it('should have 3 services', function () {

    });

    it('should not show the nav or scroll', function () {

    });

    it('should have a black logo', function() {

    });

    it('should click to individual projects', function() {

    });
});

describe('masv contact page', function() {
  it('should display contact copy', function() {

  });
  it('should have a link that open up email', function() {

  });
  it('should have a footer', function() {

  });
  it('should have a black background', function() {

  });
  it('should have a white logo', function() {

  });
})
