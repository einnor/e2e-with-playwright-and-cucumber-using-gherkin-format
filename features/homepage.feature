Feature: Random
    A random feature using Playwirght stuff

Scenario: Govuk accessibility statement link
    Given I view 'www.gov.uk'
    When I click 'Accessibility statment'
    Then I expect to be on the accessibility page
