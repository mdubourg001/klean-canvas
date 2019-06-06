Feature: Lean Canvas edition and local storage save

  # ======================================================================== #
  # ============================ PRIMARY SCENARIOS ========================= #
  # ======================================================================== #

  Scenario: User fills a new lean canvas ✅
    Given the User has clicked on any box of the canvas
    When the User presses characters using his keyboard
    Then the clicked box gets filled with entered character

  Scenario: User locally saves his work into localStorage after debounce ✅
    Given the User has inputed or removed content in one of the boxes
    When the User stops editing anything for at least 3 seconds
    Then his changes are saved into browser's localStorage

  Scenario: User retrieves his precedent piece of work from localStorage ✅
    Given the User has leaved the application after editing a lean canvas
    When the User comes back on the application
    Then his precedent piece of work fills corresponding boxes in the canvas
    And an alert informs him that his precedent work has been loaded

  Scenario: Automatic saving in localStorage on tab or window closing ✅
    Given the User has inputed or removed content in one of the boxes
    When the User leaves the application
    Then his work is automatically saved into localStorage without waiting 3 seconds

  Scenario: User clears (reset to 0) all his work on the canvas
    Given the User has clicked on the "Clear canvas" button
    And the User has been prompted for confirmation
    When the User clicks on "Yes" to confirm his choice
    Then all the boxes of the canvas and the localStorage get cleared

  # ======================================================================== #
  # ========================== SECONDARY SCENARIOS ========================= #
  # ======================================================================== #

  Scenario: User colors a box of the canvas with a specific color
    Given the User has clicked on the color palette icon next to the title of a box
    And a color picker has been prompted
    When the User clicks on a color of the color picker
    Then the corresponding box's background gets filled with the selected color
