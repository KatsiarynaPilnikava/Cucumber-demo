@run
Feature: Belly

@run
  Scenario: a few cukes
    Given I have 42 cukes in my belly
    When I wait 1 hour
    Then my belly should growl
  @run
  Scenario: failure
    Given I have 40 cukes in my belly
    When I wait 1 hour
    Then my belly should growl
