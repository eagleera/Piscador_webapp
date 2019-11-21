module.exports = {
  "step one: check if in login": function(browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("#titleLogin", 1000);
  },
  "step two: log into the app": function(browser) {
    browser
      .setValue("input[type=email]", "prueba@gg.com")
      .setValue("#password", "123456")
      .click("#loginBtn")
      .waitForElementVisible("#firstTime", 3000)
      .assert.urlEquals("http://localhost:8080/firsttime")
      .pause(1000);
  }
};
