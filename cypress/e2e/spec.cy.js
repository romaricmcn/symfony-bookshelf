

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/category/new')
    cy.get('input[name="category"]').type('${faker.lorem.words(1)}')
    cy.get('button').click()
  })
})