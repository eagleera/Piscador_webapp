module.exports = {
  before: function(browser) {
    browser
      .url("http://localhost:8080")
      .setValue("input[type=email]", "prueba@gg.com")
      .setValue("#password", "123456")
      .click("#loginBtn")
      .pause(1000)
      .execute(
        function() {
          window.localStorage.setItem(
            "accessToken",
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkucGlzY2Fkb3JcL2xvZ2luIiwiaWF0IjoxNTczNjE5ODYwLCJleHAiOjE1Nzc5Mzk4NjAsIm5iZiI6MTU3MzYxOTg2MCwianRpIjoicEtRNjF3dE1xNDgyckNOcCIsInN1YiI6MywicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.7mxHu9GH49ftV_lwn59oBLo1cvQ5vrtoB6Twusi04PA"
          );
          return true;
        },
        [],
        function(result) {
          this.assert.ok(result.value);
        }
      );
  },
  "step one: check if roles exist": function(browser) {
    browser.waitForElementVisible("#mainLayout", 1000).click("#goWorkers");
  },
  "step two: create worker": function(browser) {
    browser
      .waitForElementVisible("#content", 3000)
      .click("#addWorkerBtn")
      .setValue("#name", "Trabajador de prueba")
      .click('#nuevorol option[value="3"]')
      .click("#createWorkerBtn")
      .pause(1000);
  }
};
