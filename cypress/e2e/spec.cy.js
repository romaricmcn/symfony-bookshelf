

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/category/new')
    cy.get('input[name="category"]').type('${faker.lorem.words(1)}')
    cy.get('button').click()
  })
})