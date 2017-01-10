var assert = require('assert');
const webdriver = require('selenium-webdriver');
const webdriverio = require('webdriverio');
const test      = require('selenium-webdriver/testing');
var $ = require('jquery');


describe('masv homepage', function() {
    this.timeout(10000);
    it('should have the right title', function () {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'MASV');
    });

    it('should have a white background', function () {
      var background = browser.element('.backgrounds-hphero');
      var color = background.getCssProperty('background-color').parsed.hex;

      assert.equal(color, '#ffffff');
    });


    it('should have a subhead', function () {
      var subhead = browser.getText('h3');

      assert.equal(subhead, 'branding, identity, creative design, custom illustration');
    });


    it('should have a black logo', function() {
      var logo = browser.element('.header-logo-small');
      var color = logo.getCssProperty('background-color').parsed.hex;

      assert.equal(color, '#000000');
    });

    it('should hide the nav and scroll when the user scrolls', function () {
      browser.scroll(0, 900);

      var nav = browser.element('nav');
      var opacity = nav.getCssProperty('opacity').parsed.value;

      assert.equal(opacity, 0);

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
});
