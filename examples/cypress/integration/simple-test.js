describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('frontend.portal-test.svc.cluster.local');

    cy.contains(
      'Testkube provides a Kubernetes-native framework for test definition, execution and results'
    );
  });
});
