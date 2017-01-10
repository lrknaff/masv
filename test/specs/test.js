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

    it('should have a masthead', function () {
      var masthead = browser.element('.hp-hero-masthead');

      assert.equal(masthead.isExisting(), true);
    });

    it('should have a scroll ui', function () {
      var scroll = browser.element('.hp-hero-scroll');

      assert.equal(scroll.isExisting(), true);
    });

    it('should have a subhead with the correct copy', function () {
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
    it('should have a navigation', function () {
      var nav = browser.element('.backgrounds-hphero');

      assert.equal(nav.isExisting(), true);
    });

    it('should scroll to the about section when the user clicks about', function () {
      browser.click('.nav-li-about');

      assert.equal(browser.getUrl(), 'http://localhost:3000/#about');
      assert.equal(browser.isVisibleWithinViewport('.hp-about-copy'), true);
    });

    it('should scroll to the services section when the user clicks services', function () {
      browser.scroll(0,0);
      browser.click('.nav-li-portfolio');

      assert.equal(browser.getUrl(), 'http://localhost:3000/#portfolio');
      assert.equal(browser.isVisibleWithinViewport('.hp-portfolio'), true);
    });

    it('should scroll to the contact section when the user clicks contact', function() {
      browser.scroll(0,0);
      browser.click('.nav-li-contact');

      assert.equal(browser.getUrl(), 'http://localhost:3000/#contact');
      assert.equal(browser.isVisibleWithinViewport('.hp-contact'), true);
    });
});

describe('masv about page', function() {
    it('should have a background with a pattern', function () {
      browser.url('/');
      browser.click('.nav-li-about');
      browser.waitForVisible('.hp-about-copy');

      var background = browser.element('.backgrounds-aboutus');
      var image = background.getCssProperty('opacity').parsed.value;

      assert.equal(image, 1);
    });

    it('should have and about us section', function () {
      var aboutSection = browser.element('.hp-about');

      assert.equal(aboutSection.isExisting(), true);
    });

    it('should have 3 services', function () {
      var service1 = browser.element('.services-li-branding');
      var service2 = browser.element('.services-li-solutions');
      var service3 = browser.element('.services-li-illustration');

      assert.equal(service1.isExisting(), true);
      assert.equal(service2.isExisting(), true);
      assert.equal(service3.isExisting(), true);
    });

    it('should have a white logo', function() {
      browser.url('/');
      browser.click('.nav-li-about');
      browser.waitForVisible('.hp-about-copy');

      var logo = browser.element('a.header-logo-small');
      var color = logo.getCssProperty('fill').parsed.hex;

      assert.equal(color, '#ffffff');
    });
});

describe('masv projects page', function() {
    it('should have a white background', function () {
      browser.element('.hp-portfolio-left').scroll();
      browser.waitForVisible('.hp-portfolio-container');

      var background = browser.element('.backgrounds-aboutus');
      var image = background.getCssProperty('opacity').parsed.value;

      assert.equal(image, 0);
    });

    it('should display 4 projects', function () {

    });

    it('should have a black logo', function() {
      var logo = browser.element('a.header-logo-small');
      var color = logo.getCssProperty('fill').parsed.hex;

      assert.equal(color, '#000000');
    });

    it('should click to individual projects', function() {
      browser.click('.cinebody');

      assert.equal(browser.getUrl(), 'http://localhost:3000/projects/Cinebody/');
    });
});

describe('masv contact page', function() {
  it('should display contact copy', function() {
    browser.url('/');
    var contact = browser.element('.hp-contact-container');

    assert.equal(contact.isExisting(), true);
  });

  it('should have a link that opens up email', function() {

  });

  it('should have a footer', function() {
    var footer = browser.element('footer');

    assert.equal(footer.isExisting(), true);
  });

  it('should have a black background', function() {
    browser.element('.hp-contact-container').scroll();
    browser.waitForVisible('.hp-contact-container');

    var background = browser.element('.backgrounds-hphero');
    var color = background.getCssProperty('color').parsed.hex;

    assert.equal(color, '#000000');
  });

  it('should have a white logo', function() {
    var logo = browser.element('a.header-logo-small');
    var color = logo.getCssProperty('fill').parsed.hex;

    assert.equal(color, '#ffffff');
  });
});
