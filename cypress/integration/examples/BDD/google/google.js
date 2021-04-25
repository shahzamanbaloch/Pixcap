import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The user Open google chrome", function () {
  cy.visit("https://www.google.com/");
  cy.title().should("eq", "Google");
});

When("The user open google map", function () {
  cy.visit("https://www.google.com/");
  cy.get("#zV9nZe > .jyfHyd").click();

  cy.visit(
    "https://www.google.com/maps/place/Gardens+by+the+Bay/@1.2815683,103.8614245,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1904937e1633:0x62099677b59fca76!8m2!3d1.2815683!4d103.8636132"
  );
  cy.get("span[jstcache='129']").should("have.text", "Gardens by the Bay");
  cy.title().should("eq", "Gardens by the Bay - Google Maps");
});

Then("The user verifies Gardens by the Bay Map", function () {
  cy.get("span[jstcache='129']").should("have.text", "Gardens by the Bay");
  cy.title().should("eq", "Gardens by the Bay - Google Maps");
});

And("The can see user zoom in button", function () {
  cy.get("#widget-zoom-in").should("exist");
});

And("The user clicks on zoom in button", function () {
  cy.get("#widget-zoom-in").should("exist").click();
  cy.wait(1000);
  cy.get("#widget-zoom-in > .widget-zoom-icon").should("exist").click();
  cy.get("#widget-zoom-in").should("exist").click();
});

Then("user clicks on zoom out button", function () {
  cy.get("button#widget-zoom-out").should("exist").click();
  cy.get("canvas").trigger("pointerup", {
    clientX: 900,
    clientY: 5000,
  });
});

And("The user mousover on Marina Bay Sands Singapore", function () {
  cy.get("#runway-expand-button").trigger("mouseover").click();

  cy.wait(10000);
});

And("The user clicks on search inputfield", function () {
  cy.get("#searchboxinput")
    .should("exist")
    .clear()
    .type("Marina Bay Sands Singapore");
  cy.get("#searchbox-searchbutton").should("be.enabled").click();
  cy.wait(1000);
});

And("The user verifies Marina Bay Sands Singapore", function () {
  cy.get("span[jstcache='129']").should(
    "have.text",
    "Marina Bay Sands Singapore"
  );
  cy.title().should("eq", "Marina Bay Sands Singapore - Google Maps");
});

And("The can see user zoom in button", function () {
  cy.get("#widget-zoom-in").should("exist");
});

Then("The user clicks on zoom in button", function () {
  cy.get("#widget-zoom-in").should("be.visible").click();
  cy.wait(1000);
  cy.get("#widget-zoom-in > .widget-zoom-icon").should("exist").click();
  cy.get("#widget-zoom-in").should("exist").click();
});

Then("user clicks on zoom out button", function () {
  cy.get("button#widget-zoom-out").should("exist").click();
  cy.get("button#widget-zoom-out").should("exist").click();
  cy.get(".widget-scene-canvas").trigger("pointerup", {
    clientX: 900,
    clientY: 5000,
  });
});

/// this step will e failed as we do not have canvas element
//   //And('The user Drag Icon man on Marina Bay Sands Singapore address',function(){
//     //cy.get('canvas').drag('.widget-scene-canvas')
// })
