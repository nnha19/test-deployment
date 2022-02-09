describe("Test", () => {
  it("Render hello world", () => {
    cy.visit("https://maymyovision.netlify.app/");
    cy.contains("May Myo Vision");
  });
});
