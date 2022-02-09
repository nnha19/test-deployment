describe("Test", () => {
  it("Render hello world", () => {
    cy.visit("https://pensive-yonath-c91c4f.netlify.app/");
    cy.contains("Hello World");
  });
});
