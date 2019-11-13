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
  "step one: check if can do attendance": function(browser) {
    browser
      .waitForElementVisible("#createAttendanceBtn", 1000)
      .assert.urlEquals("http://localhost:8080/assistance");
  },
  "step two: save attendance": function(browser) {
    browser
      .click("#createAttendanceBtn")
      .pause(1000);
  }
};
