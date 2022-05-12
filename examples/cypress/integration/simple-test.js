describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://frontend.portal-test.svc');
    cy.visit('frontend.portal-test.svc');


    cy.contains(
      'Testkube provides a Kubernetes-native framework for test definition, execution and results'
    );
  });
});
