describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://www.google.de/');

    cy.contains(
      'Testkube provides a Kubernetes-native framework for test definition, execution and results'
    );
  });
});
