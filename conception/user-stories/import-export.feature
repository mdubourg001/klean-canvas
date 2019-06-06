Feature: Import and export of Lean Canvas to JSON as v1.0 save feature

  # ======================================================================== #
  # ============================ PRIMARY SCENARIOS ========================= #
  # ======================================================================== #

  Scenario: User export his canvas as JSON file ✅
    Given the User has filled some boxes of the canvas
    When the User clicks the "JSON export" button
    Then a JSON version of his canvas is exported to a file

  Scenario: User export his canvas as PNG image
    Given the User has filled some boxes of the canvas
    When the User clicks the "PNG export" button
    Then a PNG screenshot of his canvas is exported to a PNG file

  Scenario: User imports a valid JSON canvas from his device
    Given the User hasn't filled any box of the canvas
    And the User has clicked the "JSON import" button
    When the User chooses a valid JSON canvas from his device
    Then the canvas is loaded and the boxes of the canvas are filled

  Scenario: User imports a valid JSON canvas from his device after some work
    Given the User has filled some boxes of the canvas
    And the User has clicked the "JSON import" button
    When the User chooses a valid JSON canvas from his device
    Then the user gets prompted to confirm he agrees to lose his current work

  Scenario: User imports an invalid JSON canvas from his device
    Given the User has clicked the "JSON import" button
    When the User chooses a invalid JSON canvas from his device
    Then an error prompts the User to inform him the canvas he has chosen is invalid

