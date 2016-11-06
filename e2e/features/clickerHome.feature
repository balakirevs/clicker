Feature: Clicker Home page example

  Background:
    Given user navigates to home page

  @clicker
  Scenario: Check title & menu
    And user should see the title "Clickers"
    When user clicks menu icon
    Then user should see the text "Menu"
    And left menu has a link "Clickers"
    Then left menu has a link "Goodbye Ionic"