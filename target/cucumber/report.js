$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resourses/feature/BellyTest.feature");
formatter.feature({
  "line": 2,
  "name": "Belly",
  "description": "",
  "id": "belly",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "a few cukes",
  "description": "",
  "id": "belly;a-few-cukes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have 42 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I wait 1 hour",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "42",
      "offset": 7
    }
  ],
  "location": "BellyTest.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 69353053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "BellyTest.i_wait_hour(int)"
});
formatter.result({
  "duration": 75369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growl",
      "offset": 16
    }
  ],
  "location": "BellyTest.my_belly_should_growl(String)"
});
formatter.result({
  "duration": 3572463,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "failure",
  "description": "",
  "id": "belly;failure",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I have 40 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I wait 1 hour",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 7
    }
  ],
  "location": "BellyTest.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 85952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "BellyTest.i_wait_hour(int)"
});
formatter.result({
  "duration": 52918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "growl",
      "offset": 16
    }
  ],
  "location": "BellyTest.my_belly_should_growl(String)"
});
formatter.result({
  "duration": 1328730,
  "error_message": "java.lang.AssertionError: \nExpected: is \"growl\"\n     but: was \"silent\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:865)\r\n\tat org.junit.Assert.assertThat(Assert.java:832)\r\n\tat Cucumber_demo.Cucumber_demo.BellyTest.my_belly_should_growl(BellyTest.java:30)\r\n\tat ✽.Then my belly should growl(resourses/feature/BellyTest.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "skip",
  "description": "",
  "id": "belly;skip",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have 40 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I wait 1 second",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "my belly should growl",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 7
    }
  ],
  "location": "BellyTest.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 88838,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "growl",
      "offset": 16
    }
  ],
  "location": "BellyTest.my_belly_should_growl(String)"
});
formatter.result({
  "status": "skipped"
});
});