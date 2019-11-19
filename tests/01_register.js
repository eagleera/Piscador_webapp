module.exports = {
  "step one: go to register": function(browser) {
    browser
      .url("http://localhost:8080")
      .waitForElementVisible("body", 1000)
      .click("#registerAnchor")
      .waitForElementVisible("#title", 1000);
  },
  "step two: fill the form": function(browser) {
    browser.assert
      .containsText("#title", "Registrarme")
      .setValue("input[type=email]", "prueba@gg.com")
      .setValue("#nombre", "Prueba usuario")
      .setValue("#password", "123456")
      .setValue("#confirm_password", "123456")
      .click("#registerBtn")
      .waitForElementVisible("#titleLogin", 1000)
      .assert.urlEquals("http://localhost:8080/")
      .pause(1000);
  }
};
