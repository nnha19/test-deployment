describe("Test", () => {
  it("Render hello world", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hello World");
  });
});
