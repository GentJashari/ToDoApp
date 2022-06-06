Feature: Delete a todo task
    Scenario: User wants to delete a to-do task
        Given I am on the homepage
        And There are to-dos
        When I click on delete button
        Then Todo will be removed from the todo list
