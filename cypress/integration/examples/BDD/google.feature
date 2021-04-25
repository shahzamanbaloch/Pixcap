Feature: verify google map and drag into canvas

    Scenario: Verify Gardens by the Bay Map
    Given The user Open google chrome
    When The user open google map
    Then The user verifies Gardens by the Bay Map
    And The can see user zoom in button
    And The user clicks on zoom in button
    Then user clicks on zoom out button
    And The user clicks on search inputfield
    And The user verifies Marina Bay Sands Singapore
    Then The can see user zoom in button
    And The user clicks on zoom in button
    Then user clicks on zoom out button
    ##note following step will be failed as we do not have canvas element
    #And The user Drag Icon man on Marina Bay Sands Singapore address

 