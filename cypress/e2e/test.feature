Feature: Login

    Scenario: Login
        Given I am on the login page
        When I enter email address
        And I enter password
        And I click on the login button
        Then I am on the dashboard